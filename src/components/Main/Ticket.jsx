import React from 'react';

import '../../styles/home/ticket.scss';

export default function Ticket() {
  return (
    <div>
      <div class="ticket">
        <div class="ticket-edge-top-left"></div>
        <div class="ticket-edge-top-right"></div>
        <div class="ticket-edge-bottom-left"></div>
        <div class="ticket-edge-bottom-right"></div>
        <div class="ticket-punches"></div>
        <div class="ticket-punches-right"></div>
        <div class="ticket-inner">
          <div class="ticket-star">
            <i class="fa fa-star-o"></i>
          </div>
          <div class="ticket-headline">SEARCH</div>
          <div class="ticket-admit">
            <span class="char">M</span>
            <span class="char">O</span>
            <span class="char">V</span>
            <span class="char">I</span>
            <span class="char">E</span>
            <span class="char">S</span>
          </div>
          {/* <div class="ticket-numbers">5482144</div>
          <div class="ticket-numbers second">5482144</div> */}
        </div>
      </div>
    </div>
  );
}
