import React from "react";
import * as actions from "../../actions/ticTacToeActions";
import {connect} from "react-redux";

const Footer = (props) => {

  let footerStyle = {
    width: '75%',
    marginTop: '15px', marginBottom: '10px', marginLeft: 'auto', marginRight: 'auto',
    paddingTop: '15px',
    borderTop: '1px solid gray'
  };

  let resetBtnStyle = {
    borderRadius: '0.5em',
    width: '200px', height: '50px',
    fontSize: '25px'
  };

  return (
      <div style={footerStyle}>
        <div>
          <button style={resetBtnStyle} onClick={props.resetBoard}>
            Begin again
          </button>
        </div>
      </div>
  )

};


const mapDispatchToPros = (dispatch) => ({
  resetBoard: () => dispatch(actions.resetBoard())
});

export default connect(() => ({}), mapDispatchToPros)(Footer);
