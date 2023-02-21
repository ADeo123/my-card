import { LitElement, html, css } from 'lit';
import "@lrnwebcomponents/meme-maker/meme-maker.js";

const logo = new URL('../assets/open-wc-logo.svg', import.meta.url).href;

class MyCard extends LitElement {
  static properties = {
    header: { type: String },
  }

  static styles = css`
  div {
    text-align: center;
    border: 2px solid rgb(0, 0, 0);
    padding: 8px 8px 32px 32px;
    width: 500px;
    height: 500px;
    background-color: navajowhite;
    
  }
  button {
    color: blue;
    padding: px 8px 8px 8px 8px;
    display: block;
    margin: auto
  }
  .btn:hover {
    background-color: blue; 
    color: white;
  }
  .btn:focus {
    background-color: blue; 
    color: white;
  }
  .image {
    padding: 8px 8px 32px 10px;
  }
  .heading{
    margin: 50px;
  }
  @media (min-width: 500px) and (max-width: 800px) {
    button {
      opacity: 0;
      display: none;
    }
  }
  @media (max-width: 500px) {
    div {
      font-size: 10px;
      image-resolution: auto;
    }
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