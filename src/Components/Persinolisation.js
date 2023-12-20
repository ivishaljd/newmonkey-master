import React, { Component } from 'react'
import {
  Link
} from "react-router-dom";

export class Persinolisation extends Component {
  render() {
    return (
      <div className='d-flex flex-column bd-highlight mb-3 mt-4'>
      <h6>Select Categoy</h6>
      <ul className="list-group" >
      <li class="list-group-item"><Link className="nav-link" to="/business">Business</Link></li>
      <li class="list-group-item"><Link className="nav-link" to="/entertainment">Entertainment</Link></li>
      <li class="list-group-item"><Link className="nav-link" to="/general">General</Link></li>
      <li class="list-group-item"><Link className="nav-link" to="/health">Health</Link></li>
      <li class="list-group-item"><Link className="nav-link" to="/science">Science</Link></li>
      <li class="list-group-item"><Link className="nav-link" to="/sports">Sports</Link></li>
      <li class="list-group-item"><Link className="nav-link" to="/technology">Technology</Link></li>
      </ul>
      </div>
    )
  }
}

export default Persinolisation