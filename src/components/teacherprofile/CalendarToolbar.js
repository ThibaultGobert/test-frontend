import React from 'react';
import PropTypes from 'prop-types';
import {Button, Label} from 'semantic-ui-react';
import {navigate, messages} from "../../constants/calendar";
import cn from 'classnames';

class CalendarToolbar extends React.Component {

  constructor(props) {
    super(props);

    this.navigate = this.navigate.bind(this);
    this.view = this.view.bind(this);
  }

  navigate(action) {
    this.props.onNavigate(action);
  }

  view(view) {
    this.props.onViewChange(view);
  }


  viewNamesGroup() {
    let viewNames = this.props.views;
    const view = this.props.view;

    if (viewNames.length > 1) {
      return (
        viewNames.map(name =>
          <Button key={name}
                  className={cn({'active': view === name})}
                  onClick={() => this.view(name)}
          >
            {messages[name]}
          </Button>
        )
      );
    }
  }

  render() {
    let {label} = this.props;
    return (
      <div className="calendar-toolbar">
        <div className="view-type">
          {
            this.viewNamesGroup()
          }
        </div>
        <div className="view-details">
          <span className="calendar-control">
            <img src={require('../../assets/images/calendar/left-arrow.png')} alt="Navigate left" onClick={() => this.navigate(navigate.PREVIOUS)}/>
            <img src={require('../../assets/images/calendar/right-arrow.png')} alt="Navigate right" onClick={() => this.navigate(navigate.NEXT)}/>
          </span>
          <span className="calendar-label">
            <Label>{label}</Label>
          </span>
        </div>
        <div className="clearfix" />

      </div>
    );
  }
}

CalendarToolbar.propTypes = {
  view: PropTypes.string.isRequired,
  views: PropTypes.arrayOf(PropTypes.string).isRequired,
  label: PropTypes.node.isRequired,
  messages: PropTypes.object,
  onNavigate: PropTypes.func.isRequired,
  onViewChange: PropTypes.func.isRequired,
};

export default CalendarToolbar;
