import React from "react";
import "./style.css"

function Form({ q, handleInputChange, handleFormSubmit }) {
  return (
    <form>
      <div className="form-group">
        <label htmlFor="Query">
          <strong>Book</strong>
        </label>
        <input
          style={{backgroundColor:" rgb(99, 172, 85)",color:"white"}}
          className="form-control"
          id="Title"
          type="text"
          value={q}
          placeholder="Search For Book ..."
          name="q"
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="pull-right">
        <button
          onClick={handleFormSubmit}
          type="submit"
          className="btn btn-dark float-right"
        >
          Search
        </button>
      </div>
    </form>
  );
}

export default Form;
