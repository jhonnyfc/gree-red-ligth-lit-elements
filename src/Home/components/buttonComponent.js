import { LitElement, html, css } from 'lit'

class ButtonComponent extends LitElement {
  static properties = {
    label: { type: String }
  }

  render() {
    return html` <span class="button-component">${this.label}</span> `
  }

  static styles = css`
    .button-component {
      background-color: #86c2f8;
      color: black;
      font-size: 1.2rem;
      border-radius: 5px;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 50px;
      width: 100%;
    }

    .button-component:hover {
      background-color: #add6fa;
    }
  `
}

customElements.define('button-component', ButtonComponent)
