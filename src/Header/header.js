import React from 'react';

const header = (props) => {
  return(
    <nav class="navbar navbar-dark bg-primary">
      <a class="navbar-brand" href="#">{props.title}</a>
    </nav>
  );
}

export default header;
