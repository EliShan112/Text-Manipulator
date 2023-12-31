import './Navbar.css';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';

export default function Navbar(props) {

  return (
    <>
    <nav className={`navbar navbar-expand-lg bg-body-tertiary`}  data-bs-theme={`${props.mode}`}>
      <div className="container-fluid">
        <a className="navbar-brand" href="#">{props.title}</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">{props.home}</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">{props.about}</a>
            </li>
          </ul>
          <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
            <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
            <label className="form-check-label f-size16" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
        </div>
        </div>
      </div>
    </nav>
    </>
  )
}

Navbar.propTypes = {
  title : PropTypes.string.isRequired,
  home : PropTypes.string.isRequired,
  about : PropTypes.string.isRequired,
  contact : PropTypes.string.isRequired
}

Navbar.defaultProps = {
  title : "Set title here",
  home : "Set home name here",
  about : "Set about here",
  contact : "Set contact here"
}