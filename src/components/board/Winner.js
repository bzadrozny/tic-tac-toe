import React from "react";

const Winner = (props) => {
  let message = props.winner === '' ?
      'Draw!!!' :
      'The winner is: ' + props.winner;
  let style = {
    height: '20%',
    marginTop: '40%', marginBottom: '40%',
    fontSize: '3em',textAnchor: 'middle'
  };
  return <p style={style}>
    {message}
  </p>;
};

export default Winner;
