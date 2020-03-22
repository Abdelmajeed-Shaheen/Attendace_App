import React from "react";
import Home from "./homepage/Home";
import { connect } from "react-redux";
import Header from "./header/Header";
import ClassRoom from "./tablesPage/ClassRoom";

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
