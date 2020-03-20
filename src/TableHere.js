import React from "react";
import TableHereRow from "./TableHereRow";
import { connect } from "react-redux";

const TableNotchecked = props => {
  const studentlist = props.here.map(student => (
    <TableHereRow student={student} key={student} />
  ));
  return (
    <div
      style={{ overflowY: "scroll", height: "500px", borderRadius: "25px" }}
      className="bg-dark"
    >
      <table
        className="table table-hover table-dark text-center"
        style={{ borderRadius: "25px" }}
      >
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>{studentlist}</tbody>
      </table>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    here: state.studentsState.here
  };
};

export default connect(mapStateToProps)(TableNotchecked);
