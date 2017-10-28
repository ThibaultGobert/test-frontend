import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import PropTypes from 'prop-types';
import Accordion from "../shared/Accordion";
import ErrorMessage from '../shared/ErrorMessage';
import * as locationsActions from '../../actions/courses';
import Loader from '../shared/Loader';
import _ from 'lodash';
import Reloader from "../shared/Reloader";

class LocationsPage extends React.Component {
  // init state + bind functions
  constructor(props, context) {
    super(props, context);
    this.mapToPanels = this.mapToPanels.bind(this);
    this.loadLocations = this.loadLocations.bind(this);
  }

  componentDidMount() {
    if(_.isEmpty(this.props.locations) && !this.props.hasError) {
      this.loadLocations();
    }
  }

  componentDidUpdate() {
    if(!this.props.loading && _.isEmpty(this.props.locations) && !this.props.hasError) {
      this.loadLocations();
    }
  }

  loadLocations(){
    this.props.actions.loadLocations();
  }

  mapToPanels(data) {
    let panels = data.map((location) => {
      return {
        title: {
          name: location.name,
        },
        content: {
          teacher_remark: location.teacher_remark
        }
      };
    });
    return panels;
  }

  render() {
    const {
      locations,
      loading,
      hasError,
      error
    } = this.props;

    let panels = this.mapToPanels(locations);

    return(
      <div className="container">
        <Loader active={loading}/>
        <Reloader action={this.loadLocations}/>
        <h1>Locaties</h1>
        <div className="subtitle">Bekijk hier je info over de locaties waar je lesgeeft</div>
        { !hasError && <Accordion panels={panels}/>}
        { hasError && <ErrorMessage header="Fout bij inladen" message={error.message} />}
      </div>
    );
  }
}

LocationsPage.propTypes = {
  actions: PropTypes.object.isRequired,
  locations: PropTypes.arrayOf(PropTypes.object),
  loading: PropTypes.bool,
  error: PropTypes.object.isRequired,
  hasError: PropTypes.bool.isRequired,
};

function mapStateToProps(state, ownProps) {
  return {
    loading: state.locations.loading,
    locations: state.locations.data,
    error: state.locations.error,
    hasError: state.locations.hasError
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(locationsActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LocationsPage);
