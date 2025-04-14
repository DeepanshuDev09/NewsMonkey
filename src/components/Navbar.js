import React, { Component } from 'react'
import { Link} from 'react-router-dom'

export class Navbar extends Component {
  render() {
    const handleSearch = () => {
      const searchValue = document.querySelector('textarea').value;
      this.props.handleSetSearch(searchValue);
    }
        return (
      <div>
        <nav className="navbar navbar-expand-lg" style={{backgroundColor : "#F02F34"}}>
  <div className="container-fluid">
    <a className="navbar-brand" href="/"><b>NewsMonkey</b></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/general">Home</Link>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle active" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Catorgoies
          </a>
          <ul className="dropdown-menu">
            <li><Link className='btn' to="/general">General</Link></li>
            <li><Link className='btn' to="/sports">Sports</Link></li>
            <li><Link className='btn' to="/political">Political</Link></li>
            <li><Link className='btn' to="/economics">Economcis</Link></li>
            <li><Link className='btn' to="/health">Health</Link></li>
            <li><Link className='btn' to="/entertainment">Entertainment</Link></li>
          </ul>
        </li>
        {/* <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle active" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Set Time
          </a>
          <ul className="dropdown-menu">
            <li><textarea value="format : 25-04-12"></textarea></li>
            <li><textarea value="format : 25-04-14"></textarea></li>
            <li><button className='btn' onClick={handleDate}>Apply Changes</button></li>
          </ul>
        </li> */}
        {/* <li className="nav-item">
          <a className="nav-link disabled" aria-disabled="true">Disabled</a>
        </li> */}
      </ul>
      <div className="d-flex" role="search">
        {/* <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/> */}
        <textarea className="form-control me-2" type="search" placeholder="Search" aria-label="Search" rows="1"></textarea>
        <Link className="btn btn-primary" onClick={handleSearch} to="/search" >Search</Link>
      </div>
    </div>
  </div>
</nav>
      </div>
    )
  }
}

export default Navbar
