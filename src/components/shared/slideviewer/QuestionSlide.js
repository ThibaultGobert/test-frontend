import React from 'react';
import PropTypes from 'prop-types';
import renderHtml from 'react-render-html';
import {Grid} from 'semantic-ui-react';
import _ from 'lodash';
import Modal from '../Modal';

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
    if (this.state.questionAnswered) {
      return
    }

    let correctAnswer = answer.correctAnswer;
    answer.attempted = true;
    if (!correctAnswer) {
      this.setState({
        numberOfWrongAnswers: this.state.numberOfWrongAnswers + 1
      }, function() {
        if (this.state.numberOfWrongAnswers > 1) {
          this.showModal("Het juiste antwoord was", renderHtml(this.getCorrectAnswer()), "Volgende slide", this.goToNextSlide);

        } else {
          this.showModal("Jammer", renderHtml(answer.explanation), "Probeer nog eens");
        }
      });
    } else {
      this.setState({
        timesCorrect: this.state.timesCorrect + 1
      }, function() {
        if (this.state.timesCorrect === this.state.numberOfCorrectAnswers) {
          this.showModal("Goed zo", renderHtml(answer.explanation), "Volgende slide", this.goToNextSlide);
        } else {
          this.showModal("Goed zo", renderHtml(answer.explanation), "Er zijn nog mogelijke antwoorden");
        }
      });
    }
  }

  goToNextSlide() {
    this.modalClosed();
    this.setState({
      questionAnswered: true,
    }, function() {
      this.props.nextSlide();
    });
  }

  getCorrectAnswer() {
    let correctAnswer = "";
    this.props.answers.map(answer => {
      if (answer.correctAnswer) {
        correctAnswer += answer.value + '&nbsp;&nbsp;&nbsp;&nbsp;' +  answer.explanation + "<br />";
      }
    });
    return correctAnswer;
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
        <div className="question-slide">
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
              <Grid>
                {this.props.answers.map(answer => {
                  let answerKey = "answer" + answer.id;

                  let classname = "";
                  if (answer.attempted) {
                    if (answer.correctAnswer) {
                      classname += "correct-answer";
                    } else {
                      classname += "wrong-answer";
                    }
                  }

                  return (
                    <Grid.Column width={16 / this.props.layout.columns} key={answerKey} className={classname}>
                      <Grid className="answer" onClick={() => { this.selectAnswer(answer); }} disabled={!this.state.questionAnswered}>
                        <Grid.Column className="answer-symbol" width={4}>{answer.numbering}</Grid.Column>
                        <Grid.Column className="answer-content" width={12}>
                          {renderHtml(answer.value)}
                        </Grid.Column>
                      </Grid>
                    </Grid.Column>
                  );
                })}
              </Grid>
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
