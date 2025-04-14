import React, { Component } from 'react'

export class NewsItem extends Component {
    mystyle = {

    };
    render() {
        let {title,description,imgUrl, newsUrl, date, author, source} = this.props;
        const removeEmail = (str) => {
            for (let i = 0; i < str.length; i++) {
                if (str[i] === '@') {
                    for (let j = i; j < str.length; j++) {
                        if (str[j] === '(') {
                            return str.slice(j+1, str.length-2);
                        }
                    }
                }
            }
            return str;
        }
        return (
            <div>
                <div className="card" style={{backgroundColor: "#F2BFA4"}}>
                    <div style={{position: "relative", left: "90%", zIndex: "1"}}>
                <span className="position-absolute top-10 translate-middle badge rounded-pill bg-danger">{source}</span>
                </div>
                    <img src={imgUrl} className="card-img-top" alt="..." height="300px" />
                    <div className="card-body">
                        <h5 className="card-title" style={{height: "50px"}}>{title}......</h5>
                        <p className="card-text" style={{height: "70px"}}>{description}.....</p>
                        <p className='card-text' style={{height: "20px"}}><small className='text-muted'>By {removeEmail(author)} on {date}</small></p>
                        <a href={newsUrl} className="btn btn-primary btn-sm" style={{height: "30px"}}>Read More...</a>
                    </div>
                </div>
                
            </div>
        )
    }
} 

export default NewsItem
