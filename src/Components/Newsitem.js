import React, { Component } from 'react'

export class Newsitem extends Component {


  render() {
    const imgstyle = {
      height: "200px",
    };
    let{title , description , imageurl , newsurl,author,date} = this.props;
    return (
    <div className='my-3'>
        <div className="card">
            <img src={imageurl} style={imgstyle} className="card-img-top" alt="d"/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}....</p>
                <p className="card-text"><small className='text-muted'>By {author?author:"Unknown"} <br/> on {new Date(date).toGMTString()}</small></p>
                <a href={newsurl} className="btn btn-sm btn-dark">Read More</a>
            </div>
            </div>
    </div>
    
    )
  }
}

export default Newsitem

// Your API key is: ec6f2ec751104aebb677890080a52e97