import React, { useState } from 'react';
import './ShowMoreText.css';

function ShowMoreText(props) {
  const [showMore, setShowMore] = useState(false);


  function toggleShowMore() {
    setShowMore(!showMore);
  }

  return (
    <div>
      {showMore ? props.text : props.text.slice(0, props.maxLength)}
      {props.text.length > props.maxLength && (
        <button className = "ShowMeMoreText" onClick={toggleShowMore}>
          {showMore ? 'Show Less...' : 'Show More...'}
        </button>
      )}
    </div>
  );
}

export default ShowMoreText;
