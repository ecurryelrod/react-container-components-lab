// Code MovieReviews Here

import React from "react";

// this code works in app but does not pass the tests

// const MovieReviews = props => (
//     <div className="review-list">
//         {props.reviews.map(({headline, byline, link, summary_short}, idx) => (
//             <div key={idx}>
//                 <br/><br/>
//                 <a href={link.url}>{headline}</a>
//                 <p>{byline}</p>
//                 <p>{summary_short}</p>
//             </div>
//         ))}
//     </div>
// )

// this code passes the tests (from lab solution)....

const Review = ({headline, byline, link, summary_short}) => {
  return (
    <div key={headline} className="review">
      <header>
        <a className="review-link" href={link.url}>{headline}</a>
        <br/>
        <span className="author">{byline}</span>
      </header>
      <blockquote>{summary_short}</blockquote>
    </div>
  );
};

const MovieReviews = ({ reviews }) => <div className="review-list">{reviews.map(Review)}</div>;

MovieReviews.defaultProps = {
  reviews: []
};

export default MovieReviews;
