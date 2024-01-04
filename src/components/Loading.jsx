import React from 'react';

import '../styles/loading.scss';

export default function Loading() {
  return (
    <div className="loading">
      <span className="fade-in" id="digit1">
        LO
      </span>
      <span className="fade-in" id="digit2">
        AD
      </span>
      <span className="fade-in" id="digit3">
        ING
      </span>
    </div>
  );
}
