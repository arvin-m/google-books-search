import React, { useState, useEffect } from "react";
import '../SearchForm/style.css';


function SearchForm(props) {

  
  return (
    <React.Fragment>
      <div className="form-row search-wrapper col-md-12 col-sm-12">
        <div className="col-md-6"></div>
        <div className="col-md-6 mb-3 ">
          <label>Search For Book</label>
          <div className="input-group ">
            <form  onSubmit={(e)=>props.handleSubmit(e)}>
            <input type="text"
              className="form-control shadow-lg p-3 mb-5 bg-white rounded "
              name="search"
              placeholder="Harry Potter"
              onChange={(event) => props.handleUserSearch(event, event.target.value)}
             
              />
              </form>
          </div>
        </div>
      </div>
    </React.Fragment>


  )
}

export default SearchForm;