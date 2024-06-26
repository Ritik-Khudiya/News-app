import React, { Component } from 'react'

export class Newsitem extends Component {
 
  render() {
    let {title,description,imageUrl,newsUrl,author,date,source}=this.props;
     return (
      <div>
        <div className="card" >
          <div style={{display:'flex',
           justifyContent:'flex-end',
           position:'absolute',
           right:'0'
          }}>
          <span className=" badge rounded-pill bg-danger"> {source} </span>
          </div>
      
          <img src={!imageUrl?"https://cdn.24.co.za/files/Cms/General/d/10743/97d776dc91734e98906c0e1b7f3b1afa.jpg":imageUrl} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}...</p>
                <p className="card-text"><small className="text-muted">By {!author?"Unknown":author} on {new Date(date).toGMTString()}</small></p>
              <a  rel="noreferrer" href={newsUrl}  target='_blank' className="btn btn-sm btn-dark">Read more</a>
            </div>
       </div> 
    </div>
    )
  }
}

export default Newsitem