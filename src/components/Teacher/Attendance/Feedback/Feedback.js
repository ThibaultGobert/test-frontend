import React from 'react';
import FeedbackCard from './FeedbackCard';
import AddFeedbackForm from './AddFeedbackForm';
import { Modal, Button, Icon, Grid } from 'semantic-ui-react';
import NotesList from './NotesList';
import './Feedback.css';

const Feedback = ({isOpen, onClose, user, course, feedbackFormVisible, toggleFeedbackForm, saveComment, notes, toggleEditing, onChange}) => {

  return (
    <Modal
      open={isOpen}
      onClose={onClose}
      onActionClick={onClose}
      className="FeedbackModal"
    >
      <Modal.Header>Feedback</Modal.Header>

      <Modal.Content>
        <Grid>
          <Grid.Column width={5}>
            <FeedbackCard user={user} course={course} />
          </Grid.Column>
          <Grid.Column width={11}>
            { !feedbackFormVisible && <Button onClick={toggleFeedbackForm} primary className="alignRight" content='Voeg opmerking toe' icon='pencil' labelPosition='left' /> }
            { feedbackFormVisible &&
              <AddFeedbackForm
                cancel={toggleFeedbackForm}
                onChange={onChange}
                save={saveComment}
              />
            }
            <div className="clearfix" />
            <NotesList notes={notes} toggleEditing={toggleEditing} onChange={onChange}/>
          </Grid.Column>
        </Grid>
      </Modal.Content>
    </Modal>
  );
};

export default Feedback;
