import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as courseActions from "../../actions/courses";
import {browserHistory} from "react-router";
import {Button, Dimmer, Loader, Message} from "semantic-ui-react";
import DataTable from "../shared/DataTable";
import * as subscriptionTypes from '../../constants/subscriptionTypes';
import _ from 'lodash';

String.prototype.replaceAll = function(target, replacement) {
  return this.split(target).join(replacement);
};

class ClassListPage extends React.Component {
  // init state + bind functions
  constructor(props, context) {
    super(props, context);
    this.state = { classlistLoaded: false };
    this.redirectToClassGroups = this.redirectToClassGroups.bind(this);
  }

  componentWillMount() {
    if (!this.props.course.classlist) {
      this.props.actions.loadChildren(this.props.course.id);
    } else {
      this.setState({
        classlistLoaded: true
      });
    }
  }

  componentWillReceiveProps(nextProps) {
    if ("classlist" in nextProps.course && nextProps.course.classlist.length > 0) {
      this.setState({
        classlistLoaded: true
      });
    }
  }

  redirectToClassGroups() {
    browserHistory.goBack();
  }

  // render function --> typically calling child component, here is markup inline
  render() {
    if(!this.state.classlistLoaded) {
      return (<Dimmer active>
        <Loader size="medium">Loading</Loader>
      </Dimmer>);
    }


    let data = this.props.course.classlist.map(student => {
      let highlight = false;
      if (student.subscription_type == subscriptionTypes.TRIAL) {
        highlight = true;
      }
      let parentRemark = student.parentremark;
      if (parentRemark != undefined) {
        parentRemark = parentRemark.replaceAll("<p>", "");
        parentRemark = parentRemark.replaceAll("</p>", "");

      }
      let hidden_info = parentRemark;

      return Object.assign(student, {highlight: highlight, hidden_info: hidden_info});
    });

    let columns = [
      {
        defaults: "",
        display: "Naam",
        key: "name",
        type: "string"
      },
      {
        defaults: "",
        display: "Geboortedatum",
        key: "birthdate",
        type: "number"
      },
      {
        defaults: "",
        display: "Leerjaar",
        key: "grade",
        type: "number"
      },
      {
        defaults: "",
        display: "Naam ouder",
        key: "parent_name",
        type: "string"
      },
      {
        defaults: "",
        display: "Contact ouder",
        key: "parent_contact",
        type: "string"
      },
      {
        defaults: "",
        display: "Leerplatform username",
        key: "usernames_platform",
        type: "string"
      },
      {
        defaults: "",
        display: "Leerplatform hint",
        key: "password_hint",
        type: "string"
      },
      {
        defaults: "",
        display: "Scratch username",
        key: "scratchusername",
        type: "string"
      },
      {
        defaults: "",
        display: "Scratch paswoord",
        key: "scratchpassword",
        type: "string"
      },
    ];


    return (
      <div className="class-list">
        <Message className="aanwezigheden-info">
          <Message.Header>Opgelet: Tijdelijk wachtwoord</Message.Header>
          <p>Spreek de ouders van de kinderen aan waarvan het tijdelijk wachtwoord (CFR17!) nog actief staat, spoor ze aan om dit via het ouderprofiel te wijzigen</p>
        </Message>

        <Button labelPosition="left" icon="left chevron" content="Terug" onClick={this.redirectToClassGroups}/>
        <div className="class-list-header">
          <h1>Klaslijst {this.props.course.name} </h1>
          <Button className="download-classlist" disabled>Download klaslijst</Button>

        </div>
       <DataTable data={data} columns={columns}/>
        <div className="legende">
          <div className="legende-trial">
            <span className="symbol trial"></span>
            <span className="explanation">Proefles</span>
          </div>
        </div>
        <div className="clearfix" />
      </div>
    );
  }
}

function getCourseById(courses, id) {
  const course = courses.filter(course => course.id == id);
  if (course) {
    return course[0];
  }
  return null;
}

ClassListPage.propTypes = {
  actions: PropTypes.object.isRequired,
  course: PropTypes.object,
};

// redux connect and related functions
function mapStateToProps(state, ownProps) {
  const courseId = ownProps.params.id; // from path /course/:id
  let course = getCourseById(state.courses, courseId);

  return {
    course: course
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(courseActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ClassListPage);
