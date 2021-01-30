import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {
    
    const { reviews, restaurantId, deleteReview } = this.props 
    const associatedReviews = reviews.filter(r => r.restaurantId === restaurantId)

    return (
      <ul>
        {associatedReviews.map((r, i) => <Review key={i} review={r} deleteReview={deleteReview} /> )}       
      </ul>
    );
  }
};

export default Reviews;