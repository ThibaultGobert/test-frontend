import React from 'react';
import PropTypes from 'prop-types';
import renderHtml from 'react-render-html';
import {Grid, Segment, Label} from 'semantic-ui-react';
import _ from 'lodash';
import Modal from '../Modal';
import toastr from 'toastr';
import questionApi from '../../../api/questions';

class QuestionSlide extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numberOfWrongAnswers: 0,
      timesCorrect: 0,
      numberOfCorrectAnswers: this.mapToNumberOfCorrectAnswers(props),
      modal: {
        isOpen: false,
        body: '',
        header: '',
        button: '',
        callback: this.modalClosed
      },
      questionAnswered: false,
    };
    this.selectAnswer = this.selectAnswer.bind(this);
    this.modalClosed = this.modalClosed.bind(this);
    this.goToNextSlide = this.goToNextSlide.bind(this);
  }

  mapToNumberOfCorrectAnswers(data) {
    let answers = data.answers;
    let multipleAnswers = data.layout.multipleAnswers;
    if (!multipleAnswers) {
      return 1;
    }

    let numberOfCorrectAnswers = 0;
    _.forEach(answers, (answer) => {
      if (answer.correctAnswer) {
        numberOfCorrectAnswers++;
      }
    });

    return numberOfCorrectAnswers;
  }



  selectAnswer(answer) {
    questionApi.registerAnswer(answer.id).then(result => {
      let correctAnswer = result.correct;
      let explanation = result.explanation;
      let renderedExplanation = renderHtml(explanation);
      answer.attempted = true;
      answer.correctAnswer = result.correct;

      // TODO: enable tracking
      /*if (result.isTrack) {
        if (!correctAnswer) {
          this.showModal("Jammer", renderedExplanation, "Probeer nog eens", function() {
            if (this.result.answerscount > 2) {
              this.showModal("Het juiste antwoord was", <div>All correct answers</div>, "Volgende slide", this.goToNextSlide);
            }
          });
        } else {
          if (this.result.correctanswers == this.result.totalcorrectanswers) {
            this.showModal("Goed zo", renderedExplanation, "Volgende slide", this.goToNextSlide);
          } else {
            this.showModal("Goed zo", renderedExplanation, "Er zijn nog mogelijke antwoorden");
          }
        }
      } else {*/
      if (!correctAnswer) {
        this.showModal("Jammer", renderedExplanation, "Probeer nog eens");
      } else {
        this.showModal("Goed zo", renderedExplanation, "Verder");
      }
    }).catch(error => {
      toastr.error(error);
    });
  }

  goToNextSlide() {
    this.modalClosed();
    this.setState({
      questionAnswered: true,
    }, function() {
      this.props.nextSlide();
    });
  }

  showModal(header, body, button, callback) {
    this.setState({
      modal: {
        isOpen: true,
        body: body,
        header: header,
        button: button,
        callback: callback? callback: this.modalClosed
      }
    });
  }

  modalClosed() {
    this.setState({
      modal: {
        isOpen: false,
        body: '',
        header: '',
        button: ''
      }
    });
  }

  render() {
    return (
      <div className="slide">
        <div className="question-slide slide-content">
          <Modal isOpen={this.state.modal.isOpen}
                 body={this.state.modal.body}
                 header={this.state.modal.header}
                 button={this.state.modal.button}
                 onClose={this.state.modal.callback}/>

          <h1>{this.props.title}</h1>
          <div className="question-content">
            <div className="question-panel">
              {renderHtml(this.props.question)}
            </div>
            <div className="answers-panel">
              <Grid columns={this.props.layout.columns}>
                {this.props.answers.map(answer => {
                  let answerKey = "answer" + answer.id;

                  let classname = "answer ";
                  if (answer.attempted) {
                    if (answer.correctAnswer) {
                      classname += "correct-answer";
                    } else {
                      classname += "wrong-answer";
                    }
                  }

                  return (
                    <Grid.Column key={answerKey} stretched>
                      <div className={classname} onClick={() => { this.selectAnswer(answer); }} disabled={!this.state.questionAnswered}>

                        <div className="answer-content middle aligned">
                          <Label floating>{answer.numbering}</Label>
                          <div className="answer-value">
                            {renderHtml(answer.value)}
                          </div>
                        </div>
                      </div>
                    </Grid.Column>
                  );
                })}
              </Grid>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

QuestionSlide.propTypes = {
  title: PropTypes.string.isRequired,
  question: PropTypes.string.isRequired,
  answers: PropTypes.arrayOf(PropTypes.object),
  layout: PropTypes.object.isRequired,
  nextSlide: PropTypes.func.isRequired,
};

export default QuestionSlide;
