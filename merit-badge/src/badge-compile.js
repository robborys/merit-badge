import { LitElement, html, css } from "lit";
import "@lrnwebcomponents/absolute-position-behavior/absolute-position-behavior.js";
import "@lrnwebcomponents/simple-icon/simple-icon.js";
import "@lrnwebcomponents/simple-icon/lib/simple-icons.js";
import "@lrnwebcomponents/simple-icon/lib/simple-icon-button.js";
import "../src/locked-badge.js";
import "../src/merit-badge.js";
import "../src/date-title.js";
import confetti from "canvas-confetti";


//FOR COMPILING INDIVIDUAL MERIT BADGES AND LOCKED BADGES




class BadgeCompile extends LitElement {
  static properties = {
    badgeDate: { type: String },
    badgeImage: { type: String },
    badgeTitle: { type: String },
    badgeDetails: { type: String },
    hyperLink: { type: String },
    badgeSkills: { type: String },
    skillsOpened: { type: Boolean },
    detailsOpened: { type: Boolean },
    badgeUnlocked: {type: Boolean}
  };

  static styles = css`

.container
{
  display: flex;
  flex-direction: column;
  float: left;
  width: 250px;
  justify-content: center;
  align-items: center;

}

.badges
{
  order: 1;
}

.unlockButton
{
  margin-top:50px;
  order: 2;
  width: 175px;
  background-color: var(--simple-colors-default-theme-blue-8);
  font-family: "Monaco";
  display: inline-block;
  outline: 0;
  border: none;
  cursor: pointer;
  line-height: 1.2rem;
  font-weight: 900;
  padding: 8px 14px 9px;
  font-size: 15px;
  border-radius: 4px;
  color: #fff;
  height: 36px;
  transition: all 75ms ease-in-out;
  :hover{
  box-shadow: 0 1px 4px rgb(0 0 0 / 30%);
  }
  margin-left: 100px;
                
}

  `;

  constructor() {
    super();
    this.badgeUnlocked = false;
  }

  render() {
    return html`
      <div class="container">
        ${this.badgeUnlocked
          ? html`<merit-badge></merit-badge>`
          : html`<locked-badge></locked-badge>`}
        <button class="unlockButton" @click="${this.unlockButtonClicked}">
          ${this.badgeUnlocked ? "Unlocked" : "Unlock?"}
        </button>
      </div>

    `;
  }

  unlockButtonClicked() {
    this.badgeUnlocked = !this.badgeUnlocked;
  }

  unlockButtonClicked() {
    this.badgeUnlocked = !this.badgeUnlocked;
    if (this.badgeUnlocked) {
      this.createConfetti();
    }
  }

  createConfetti() {
    confetti({
      particleCount: 500,
      spread: 200,
      origin: { y: 0.6 },
    });
  }


}

customElements.define("badge-compile", BadgeCompile);