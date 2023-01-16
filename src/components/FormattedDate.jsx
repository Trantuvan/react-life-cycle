import PropTypes from 'prop-types';
import React, { Component } from 'react';

export default class FormattedDate extends Component {
  render() {
    const { date } = this.props;

    return <h2>It is {date.toLocaleTimeString()}</h2>;
  }
}

FormattedDate.propTypes = {
  date: PropTypes.object.isRequired,
};
