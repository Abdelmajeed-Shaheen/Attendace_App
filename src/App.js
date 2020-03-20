import React from "react";
import ClassRoom from "./ClassRoom";
import Home from "./Home";
import { connect } from "react-redux";
import Header from "./Header";

const App = porps => {
  return (
    <>
      <Header />
      {porps.selected ? <ClassRoom /> : <Home />}
    </>
  );
};

const mapStateToProps = state => {
  return {
    classrooms: state.classromsState.classroms,
    selected: state.studentsState.selected
  };
};

export default connect(mapStateToProps)(App);
