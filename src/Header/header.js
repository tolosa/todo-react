import React from 'react';
import ActivityIndicator from './ActivityIndicator/ActivityIndicator'

const header = (props) => (
  <nav className="navbar navbar-dark bg-primary">
    <a className="navbar-brand" href="#">{props.title}</a>
    <ActivityIndicator />
  </nav>
)

export default header;
