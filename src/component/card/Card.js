import React from 'react';
import { Link } from "react-router-dom";
import './Card.css'
const Card = (props) => {
  const { data } = props;
  console.log(data.category);
  return (
    <div className="col-md-4">
      <div className="blog-card blog-card-blog">
        <div className="blog-card-image">
          <Link to={data.contentLink}> <img className="img" src={data.image} />
          </Link>
          <div className="ripple-cont" />
        </div>
        <div className="blog-table">
          <Link to={data.contentLink}><h6 className="blog-category blog-text-success"><i className="far fa-newspaper" />{data.category}</h6></Link>
          <h4 className="blog-card-caption">
            <Link to={data.contentLink}>{data.titel}</Link>
          </h4>
        </div>
      </div>
    </div>
  );
}

export default Card;
