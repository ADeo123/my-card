import { LitElement, html, css } from 'lit';
import "@lrnwebcomponents/meme-maker/meme-maker.js";

const logo = new URL('../assets/open-wc-logo.svg', import.meta.url).href;

class MyCard extends LitElement {
  static properties = {
    header: { type: String },
  }

  static styles = css`
    :host {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      font-size: calc(10px + 2vmin);
      color: #1a2b42;
      max-width: 960px;
      margin: 0 auto;
      text-align: center;
      background-color: var(--my-card-background-color);
    }

    main {
      flex-grow: 1;
    }

    .logo {
      margin-top: 36px;
      animation: app-logo-spin infinite 20s linear;
    }

    @keyframes app-logo-spin {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }

    .app-footer {
      font-size: calc(12px + 0.5vmin);
      align-items: center;
    }

    .app-footer a {
      margin-left: 5px;
    }
  `;

  constructor() {
    super();
    this.header = 'My app';
  }




  render() {
    return html`
      <div class="mainWrapper">
      <h1 id="heading"> Penn State University </h1>
      <img src="https://images.onwardstate.com/uploads/2014/02/NittanyLionLogo.jpg" width="400" class="image">
      <h2>Description</h2>
      <p>The Penn State University logo showing the Nittany Lion. </p>
      <button> <a href="https://hax.psu.edu"> Details
      </a> </button> 
      <meme-maker alt="Penn State Logo" image-url="https://images.onwardstate.com/uploads/2014/02/NittanyLionLogo.jpg" top-text="We Are" bottom-text="Penn State">
      </meme-maker>
</div>

    `;
  }
}

this.shadowRoot.querySelector(".duplicateBtn").addEventListener("click", function(e){
  const div = this.shadowRoot.querySelector(".duplicateBtn");
  let division = div.cloneNode(true);
  document.body.appendChild(division);
});
//JavaScript Hover implementation
this.shadowRoot.querySelector("div").addEventListener("mouseover", function (e) {
const div = this.shadowRoot.querySelector("div");
let hoverEffect = div.style.borderColor = "white";
document.body.appendChild(hoverEffect);
});
this.shadowRoot.querySelector("div").addEventListener("mouseout", function (e) {
const div = this.shadowRoot.querySelector("div");
let hoverEffect = div.style.borderColor = "black";
document.body.appendChild(hoverEffect);
});
//When the card is clicked the color changes
this.shadowRoot.querySelector("changeColorBtn").addEventListener("click", function (e) {
const div = this.shadowRoot.querySelector("div");
let divColor = (div.style.backgroundColor = "gray"); //changes the background to gray
document.body.appendChild(divColor);
});
//When the heading/title is clicked it is change to "something else"
this.shadowRoot.querySelector("ChangeHeadingBtn").addEventListener("click", function (e) {
heading.innerHTML = "Something else"; //replaces the text of the heading
});
//Deletes the last duplicated card from the webpage
this.shadowRoot.querySelector(".deleteBtn").addEventListener("click", function (e) {
let div = this.shadowRoot.querySelector("div");
document.parentNode.removeChild(div);
});


customElements.define('my-card', MyCard);