import React from 'react';

const header = (props) => (
  <nav className="navbar navbar-dark bg-primary">
    <a className="navbar-brand" href="#">{props.title}</a>
  </nav>
)

export default header;
