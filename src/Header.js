import React from "react";
import logo from "./logo.png";
import { connect } from "react-redux";
import { reload } from "./redux/actions";

const Header = props => {
  return (
    <nav
      className="navbar navbar-light sticky-top"
      style={{ backgroundColor: "rgba(0,0,0,.8)" }}
    >
      <img
        src={logo}
        width="150px"
        height="50px"
        className="d-inline-block align-top mr-2"
        alt=""
      />
      <button
        className="btn btn-outline-primary my-2 my-sm-0"
        onClick={() => props.reload()}
      >
        Home
      </button>
    </nav>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    reload: () => dispatch(reload())
  };
};

export default connect(null, mapDispatchToProps)(Header);
