import { LitElement, html, css } from "lit";
import "@lrnwebcomponents/absolute-position-behavior/absolute-position-behavior.js";
import "@lrnwebcomponents/simple-icon/simple-icon.js";
import "@lrnwebcomponents/simple-icon/lib/simple-icons.js";
import "@lrnwebcomponents/simple-icon/lib/simple-icon-button.js";
import "../src/date-title.js";
import "../src/merit-badge.js";
import "../src/locked-badge.js";

//FOR COMPILING THIS IS THE EQUIVELANT OF HIS MERIT BADGE! MY MERIT BADGE WILL BE THE EQUIV OF  STICKER-STICKER ADN THEN BADGE PROPERTIES WILL 
// BE THE SAME AS HIS MERIT BADGE




class BadgeProperties extends LitElement {
  static properties = {
    badgeDate: { type: String },
    badgeImage: { type: String },
    badgeTitle: { type: String },
    badgeDetails: { type: String },
    hyperLink: { type: String },
    badgeSkills: { type: String },
    skillsOpened: { type: Boolean },
    badgeUnlocked: {type: Boolean}
  };

  static styles = css`

.badge
  {
    width: 200px;
    height: 200px;
    background: red;
    border-radius: 50%
    padding: 20px;
    margin: 10px;
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
    text-align: center;
  }

  .badgeImage
  {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  `;

  constructor() {
    super();

  }

  render() {
    return html`

<div class="badge">
<div class="badgeImage">
<img src="https://www.freeiconspng.com/thumbs/shield-png/shield-png-4.png" alt="shield" width="50" height="60">
</div>

</div>


    `;
  }


}

customElements.define("badge-properties", BadgeProperties);