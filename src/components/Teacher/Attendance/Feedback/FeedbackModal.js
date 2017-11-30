import React from 'react';
import PropTypes from 'prop-types';
import { Modal, Button, Icon, Grid } from 'semantic-ui-react';
import './Feedback.css';
import FeedbackCard from './FeedbackCard';
import FeedbackForm from './FeedbackForm';

class FeedbackModal extends React.Component {
  constructor(...props) {
    super(...props);
    this.toggleFeedbackForm = this.toggleFeedbackForm.bind(this);
    this.saveComment = this.saveComment.bind(this);
    this.state = {
      feedbackFormVisible: false,
      comment: ''
    };
  }

  toggleFeedbackForm() {
    const { feedbackFormVisible } = this.state;
    this.setState({
      feedbackFormVisible: !feedbackFormVisible,
    });
  }

  saveComment() {
    // save comment with sumo api call
  }

  render() {
    const { isOpen, onClose, user, course } = this.props;
    const { feedbackFormVisible } = this.state;
    return (
      <Modal
        open={isOpen}
        onClose={onClose}
        onActionClick={onClose}
        className="FeedbackModal"
        scrolling
      >
        <Modal.Header>Feedback</Modal.Header>

        <Modal.Content>
          <Grid>
            <Grid.Column width={5}>
              <FeedbackCard user={user} course={course} />
            </Grid.Column>
            <Grid.Column width={11}>
              { !feedbackFormVisible && <Button onClick={this.toggleFeedbackForm}>Voeg opmerking toe</Button> }
              { feedbackFormVisible &&
                <FeedbackForm
                  cancel={this.toggleFeedbackForm}
                  save={this.saveComment}
                  comment={this.state.comment}
                />
              }
            </Grid.Column>
          </Grid>
        </Modal.Content>

        <Modal.Actions>
          <Button primary onClick={onClose}>
            <Icon name="save" />Opslaan
          </Button>
        </Modal.Actions>
      </Modal>
    );
  }
}

FeedbackModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default FeedbackModal;
