import React from "react";
import { connect } from "react-redux";
import { nothere } from "./redux/actions";

const TableHereRow = props => {
  return (
    <tr>
      <td>{props.student}</td>
      <td>
        <div className="btn-group" role="group" aria-label="Basic example">
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => props.nothere(props.student)}
          >
            <i className="fa fa-close"></i>{" "}
          </button>
        </div>
      </td>
    </tr>
  );
};
const mapDispatchToProps = dispatch => {
  return {
    nothere: student => dispatch(nothere(student))
  };
};

export default connect(null, mapDispatchToProps)(TableHereRow);
