import React from "react";
import { connect } from "react-redux";
import { classselected } from "./redux/actions";

const ClassCard = props => {
  return (
    <div className="col-md-4 mb-2 text-center">
      <div className="card h-100">
        <div className="card-header">{props.classroom["name"]}</div>
        <div className="card-body">
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => props.classselected(props.classroom)}
          >
            Select
          </button>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    classselected: students => dispatch(classselected(students))
  };
};

export default connect(null, mapDispatchToProps)(ClassCard);
