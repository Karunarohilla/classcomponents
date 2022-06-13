import React from 'react';
export default function NewsItem(props){
    let {title, description, imageUrl, newsUrl, author, publishedAt, source}=props;
    return(
        <>
            <div className="card">
                <div style={{textAlign: 'center'}}>
                    <img className="card-img-top" src={imageUrl?imageUrl:'https://cdn.arstechnica.net/wp-content/uploads/2022/05/GettyImages-151054421-e1653346027144-760x380.jpeg'} alt="Card" style={{width: '250px', marginTop: '1em'}} />
                </div>
                
                <div className="card-body">
                    <h6 className="card-title font-weight-bold">{title}...</h6>
                    <p className="card-text">{description}</p>
                    <p>Updated by {author} at {new Date(publishedAt).toUTCString()}</p>
                    <p>Source {source}</p>
                    <a href={newsUrl} className="btn btn-primary" rel="noreferrer" target="_blank">Read More</a>
                </div>
            </div>
        </>
    )
}