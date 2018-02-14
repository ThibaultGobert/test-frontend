import React from 'react';

import Bootstrap from './Bootstrap';
import StudentSeason from './StudentSeasonActive';


const Student = ({ isBootstrapped, user }) => {
  if (!isBootstrapped) {
    return <Bootstrap />;
  }

  return (
    <div className="page-wrapper">
      <StudentSeason user={user} />
    </div>
  );
};

export default Student;
