import React from 'react';
import PropTypes from 'prop-types';
import { Button, Grid } from 'semantic-ui-react';

import './Attendance.css';

const Attendance = ({
  classList, course, redirectToOverview, onChange, onSubmit,
}) => {
  return (
    <div className="Attendance">
      <Button className="Attendance__Back" labelPosition="left" icon="left chevron" content="Terug" onClick={redirectToOverview} />

    </div>
  );
};

Attendance.propTypes = {
  course: PropTypes.object.isRequired,
  classList: PropTypes.array.isRequired,
  redirectToOverview: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default Attendance;
