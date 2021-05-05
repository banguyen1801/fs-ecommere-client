import './review-panel.styles.scss';
import React from 'react';

const ReviewPanel = () => {
  return (
    <div className="review-panel">
      <div className="review-panel__legend">Reviews</div>

      <div className="review-panel__pagination">
        <span className="icon icon-navigate_before"></span>
        <span className="page-number">1/999</span>
        <span className="icon icon-navigate_next"></span>
      </div>

      <div className="review-panel__review-list">
        <div className="review-entries">review 1...</div>
        <div className="review-entries">review 2...</div>
        <div className="review-entries">review 3...</div>
      </div>

      <div className="review-panel__pagination">
        <span className="icon icon-navigate_before"></span>
        <span className="page-number">1/999</span>
        <span className="icon icon-navigate_next"></span>
      </div>
    </div>
  );
};

export default ReviewPanel;
