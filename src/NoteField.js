import React from "react";

const NoteField = () => {
  return (
    <div className="row ">
      <div className="col-3"></div>
      <div className="col-6">
        <div className="text-center">
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text" id="basic-addon1">
                note
              </span>
            </div>
            <input
              type="text"
              className="form-control"
              placeholder="What For !!!!"
              aria-describedby="basic-addon1"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default NoteField;
