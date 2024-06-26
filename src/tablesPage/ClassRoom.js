import React from "react";
import { connect } from "react-redux";
import TableNotchecked from "../notHereTable/TableNotchecked";
import TableHere from "../hereTable/TableHere";
import NoteField from "./NoteField";

const ClassRoom = props => {
  return (
    <div className="container">
      <h2 className="text-center mt-2" style={{ color: "white" }}>
        <b>{props.roomName}</b>
      </h2>
      <NoteField />
      <div className="row">
        <div className="col-md-2"></div>
        <div className="col-md-4 mb-3">
          <TableNotchecked />
        </div>
        <div className="col-md-4">
          <TableHere />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    roomName: state.studentsState.roomName
  };
};

export default connect(mapStateToProps)(ClassRoom);
