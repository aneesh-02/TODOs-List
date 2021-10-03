import React from 'react'
import PropTypes from 'prop-types'

export default function Header(props) { // props keyword is used to send data from parent(App.js) to child(here)
  return (
    // Header bar
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">{props.title}</a> 
        {/* props.data can be used to access it  */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">About</a>
            </li>
          </ul>
          {/* pros.data? 1:2 works like if true display 1 else 2  */}
          { props.searchBar? <form className="d-flex">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>: " " }
        </div>
      </div>
    </nav>

  )
}

// default props can be used to define default values to the props
Header.defaultProps = {
  title: "My ToDos List",
  searchbar: true
}

// this is basically declaring the props and their datatype
Header.propTypes = {
  title: PropTypes.string,
  searchBar : PropTypes.bool.isRequired
}