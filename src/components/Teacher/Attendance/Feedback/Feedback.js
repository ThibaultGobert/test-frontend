import React from 'react';
import FeedbackCard from './FeedbackCard';
import AddFeedbackForm from './AddFeedbackForm';
import { Modal, Button, Icon, Grid } from 'semantic-ui-react';
import NotesList from './NotesList';
import './Feedback.css';

const Feedback = ({isOpen, onClose, user, course, feedbackFormVisible, toggleFeedbackForm, comment, saveComment, notes}) => {

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
            { !feedbackFormVisible && <Button onClick={toggleFeedbackForm} primary icon="edit" className="alignRight">Voeg opmerking toe</Button> }
            { feedbackFormVisible &&
            <AddFeedbackForm
              cancel={toggleFeedbackForm}
              save={saveComment}
              comment={comment}
            />
            }
            <div className="clearfix" />
            <NotesList notes={notes}/>
          </Grid.Column>
        </Grid>
      </Modal.Content>
    </Modal>
  );
};

export default Feedback;
