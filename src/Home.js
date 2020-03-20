import React from "react";
import { connect } from "react-redux";
import ClassCard from "./ClassCard";

const Home = props => {
  const classromlist = props.classrooms.map(classroom => (
    <ClassCard classroom={classroom} key={classroom["name"]} />
  ));
  return (
    <div className="container">
      <h1 className="text-center mt-2" style={{ color: "white" }}>
        <b>Coded Live</b>
      </h1>
      <div className="row mt-5 text-center">{classromlist}</div>
    </div>
  );
};
const mapStateToProps = state => {
  return {
    classrooms: state.classromsState.classroms
  };
};

export default connect(mapStateToProps)(Home);
