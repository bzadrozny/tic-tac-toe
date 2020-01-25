import React from "react";

const Header = (props) => {
  let headerStyle = {
    backgroundColor: 'WhiteSmoke', borderRadius: '2em',
    width: '50%',
    marginTop: '10px', marginBottom: '15px', marginLeft: 'auto', marginRight: 'auto',
    borderSpacing: '10px',
    paddingTop: '1px',
    border: '1px solid gray',
    fontSize: '1.5em'
  };
  let pStyle = {
    marginTop: '10px', marginBottom: '10px'
  };
  return (
      <div style={headerStyle}>
        <p style={pStyle}>Player: {props.player} <br/> Pozostały czas na ruch: {props.time}</p>
      </div>
  )
};

export default Header;