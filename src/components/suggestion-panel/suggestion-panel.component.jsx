import React from 'react';
import './suggestion-panel.styles.scss';

const suggestions = [
  {
    cardName: 'Zara latest products 1',
  },
  {
    cardName: 'Zara latest products 2',
  },
  {
    cardName: 'Zara latest products 3',
  },
  {
    cardName: 'Zara latest products 4',
  },
  {
    cardName: 'Zara latest products 5',
  },
  {
    cardName: 'Zara latest products 6',
  },
  {
    cardName: 'Zara latest products 7 ',
  },
  {
    cardName: 'Zara latest products 8',
  },
];

const SuggestionPanel = () => {
  return (
    <div className="suggestion-panel">
      <div className="suggestion-panel__legend">You may also like</div>
      <div className="suggestion-panel__card-list">
        {suggestions.map((suggestion, id) => (
          <div key={id} className="suggestion-panel__card-list__card">
            <div className="card-image">card image</div>
            <div className="card-name">{suggestion.cardName}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SuggestionPanel;
