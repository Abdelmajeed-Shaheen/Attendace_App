import React from "react";
import TableNotcheckedRow from "./TableNotcheckedRow";
import { connect } from "react-redux";

const TableNotchecked = props => {
  const studentlist = props.nothere.map(student => (
    <TableNotcheckedRow student={student} key={student} />
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
        <thead style={{}}>
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
    nothere: state.studentsState.nothere
  };
};

export default connect(mapStateToProps)(TableNotchecked);
