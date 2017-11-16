import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import SelectLessonForm from "./SelectLessonForm";
import * as organisationActions from '../../actions/organisation';
import * as lessonActions from '../../actions/lessons';
import ErrorMessage from "../shared/ErrorMessage";
import Loader from '../shared/Loader';
import _ from 'lodash';
import ManageLessonList from './ManageLessonList';
import * as lessonTypes from '../../constants/lessonTypes';
import {Button} from 'semantic-ui-react';
import organisationsApi from '../../api/organisation';

class OverviewPage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.fetchOrganisation = this.fetchOrganisation.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);

    this.state = {
      filterValues: {
        groups: [],
        levels: [],
        types: [],
        orders: [],
        version: ''
      },
      showFilters: true
    }
  }

  componentDidMount() {
    this.fetchOrganisation();
  }

  toggleVisibilityFilters(e) {
    e.preventDefault();
    this.setState({showFilters: !this.state.showFilters});
  }

  fetchOrganisation() {
    const { fetchLevelsStart, fetchLevelsSuccess, fetchLevelsError, fetchGroupsStart, fetchGroupsSuccess, fetchGroupsError } = this.props.organisationActions;

    fetchLevelsStart();
    fetchGroupsStart();

    organisationsApi.getAllLevels()
      .then((response) => fetchLevelsSuccess(response))
      .then((error) => fetchLevelsError(error));

    organisationsApi.getAllGroups()
      .then((response) => fetchGroupsSuccess(response))
      .then((error) => fetchGroupsError(error));
  }

  searchLessons() {
    this.props.lessonActions.searchLessons(Object.assign({}, this.state.filterValues));
  }

  onSubmit() {
    this.searchLessons();
  }

  onChange(e, {name, value}) {
    let newFilters = Object.assign({}, this.state.filterValues, {[name]: value });
    this.setState({ filterValues: newFilters});
  }

  mapToClanOptions(clans) {
    return _.map(clans, (clan) => {
      return {key: clan.name, value: clan.name, text: clan.desc}
    });
  }

  mapToLevelOptions(levels) {
    return _.map(levels, (level) => {
      return {key: level.number, value: level.number, text: level.name}
    });
  }

  typeOptions() {
    return [
      {key: 'klas', value: lessonTypes.CLASS, text: 'Klas'},
      {key: 'thuis', value: lessonTypes.HOME, text: 'Thuis'},
      {key: 'mix', value: lessonTypes.CLASSHOME, text: 'Mix'},
      {key: 'extra', value: lessonTypes.EXTRA, text: 'Extra'},
      {key: 'workshop', value: lessonTypes.WORKSHOP, text: 'Workshop'},
    ]
  }

  lessonOptions() {
    let lessonOptions = [];
    for (let i = 0; i < 10; i++) {
      let nr = i+1;
      lessonOptions[i] = {key: _.toString(nr), value: _.toString(nr), text: _.toString(nr)};
    }
    return lessonOptions;
  }

  versionOptions () {
    return [
      {key: '1.0', value: '1.0', text: '1.0'},
      {key: '1.1', value: '1.1', text: '1.1'},
      {key: '1.2', value: '1.2', text: '1.2'},
      {key: '2.0', value: '2.0', text: '2.0'},
      {key: 'empty', value: '', text: '--'},
    ]
  }

  render() {
    const {
      levels,
      groups,
      lessons
    } = this.props;

    let hasError = levels.hasError || groups.hasError;
    let loading = levels.loading || groups.loading || lessons.loading;

    return (
      <div className="select-lesson">
        <Loader active={loading}/>
        <h1>Selecteer lessen:</h1>

        {(!loading && !hasError) &&
          <div className="select-lesson-content">
            {this.state.showFilters &&  <Button size='mini' floated='right' icon='close' onClick={this.toggleVisibilityFilters.bind(this)}/>}
            {!this.state.showFilters &&  <Button size='mini' className="show-filters-btn" floated='right' onClick={this.toggleVisibilityFilters.bind(this)}>Show filters</Button>}
            { this.state.showFilters && <SelectLessonForm
              onSubmit={this.onSubmit}
              onChange={this.onChange}
              clanOptions={this.mapToClanOptions(groups.data)}
              levelOptions={this.mapToLevelOptions(levels.data)}
              typeOptions={this.typeOptions()}
              lessonOptions={this.lessonOptions()}
              versionOptions={this.versionOptions()}
              initialValues={this.state.filterValues}
            />}
            { lessons.data.length > 0 && <ManageLessonList lessons={lessons.data}/>}
          </div>
        }
        {hasError && <ErrorMessage header="Fout" message="Inladen van data mislukt"/>}
      </div>
    );
  }
}

OverviewPage.propTypes = {
  levels: PropTypes.object,
  groups: PropTypes.object,
  lessons: PropTypes.object
};

function mapStateToProps(state, ownProps) {
  return {
    levels: state.organisation.levels,
    groups: state.organisation.groups,
    lessons: state.lessons
  };
}

function mapDispatchToProps(dispatch) {
  return {
    organisationActions: bindActionCreators(organisationActions, dispatch),
    lessonActions: bindActionCreators(lessonActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(OverviewPage);
