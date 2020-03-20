import React from "react";
import { connect } from "react-redux";
import { ishere } from "./redux/actions";

const TableNotcheckedRow = props => {
  return (
    <tr>
      <td>{props.student}</td>
      <td>
        <div className="btn-group" role="group" aria-label="Basic example">
          <button
            type="button"
            className={"btn btn-success"}
            onClick={() => props.ishere(props.student)}
          >
            <i className="fa fa-check"></i>
          </button>
        </div>
      </td>
    </tr>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    ishere: student => dispatch(ishere(student))
  };
};

export default connect(null, mapDispatchToProps)(TableNotcheckedRow);
