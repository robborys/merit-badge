import { LitElement, html, css } from 'lit';
import "../src/date-title.js";


class MeritBadge extends LitElement {
  static properties = {
    unlockDate: { type: String },
    badgeLogo: { type: String },
    badgeTitle: { type: String },
    detailsIcon: { type: String },
    details: { type: String },
    verificationLink: { type: String },
    skills: { type: String },
    skillsOpened: { type: Boolean },
    detailsOpened: { type: Boolean },
  }

  static styles = css`
  .badge
  {
    width: 200px;
    height: 200px;
    background: red;
    border-radius: 50%
    padding: 20px;
    margin: 20px;
    background: #ff0030;
    color: #fff;
    font-size: 21px;
    font-weight: bold;
    line-height: 1.3em;
    border: 2px dashed #fff;
    border-radius: 50%;
    box-shadow: 0 0 0 4px #ff0030, 2px 1px 6px 4px rgba(10, 10, 0, 0.5);
    text-shadow: -1px -1px #aa3030;
    font-weight: normal;
    position: relative;    
 
  }

  .badgeImage
  {
    width: 75px;
    height: 75px;
    position: absolute;
    top: -24%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .date-title
  {
    position: absolute;
    top: -24%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .badgepic
  {
    position: absolute;
    top: 34%;
    left: 37%;
  }

  `;

  constructor() {
    super();

  
  }

  render() {
    return html`


<div class="badge">
  <date-title class="date-title" title="fart of the middle ages" date="08.22.23"></date-title>
  <div class="badgeImage">
  </div>
  <img class="badgepic" src="https://cdn-icons-png.flaticon.com/512/2619/2619273.png" alt="shield" width=50 height=50>


</div>


    `;
  }
}

customElements.define('merit-badge', MeritBadge);