import { LitElement, html, css } from 'lit'

class InputFieldComponent extends LitElement {
  static properties = {
    label: { type: String },
    value: { type: String },
    type: { type: String },
    isFocus: { type: Boolean, sate: true },
    isFirstTime: { type: Boolean, sate: true }
  }

  constructor() {
    super()
    this.value = ''
    this.isFocus = false
    this.isFirstTime = true
  }

  firstUpdated() {
    this.userNameInput = this.shadowRoot.querySelector('#user-name-input')
  }

  _getLabelCalss() {
    if (this.value?.length > 0 || this.isFocus) {
      this.isFirstTime = false
      return 'label-up'
    }

    if (this.isFirstTime) {
      return ''
    }

    return 'label-center'
  }

  _setValue(value) {
    this.value = value
    this.dispatchEvent(
      new CustomEvent('update-value', { detail: { value: this.value } })
    )
  }

  render() {
    return html`<span id="input-field">
      <span>
        <label class=${this._getLabelCalss()}>${this.label}</label>
        <input
          id="user-name-input"
          .value=${this.value}
          .type=${this.type}
          @keyup=${() => {
            this._setValue(this.userNameInput.value)
          }}
          @focusin=${() => {
            this.isFocus = true
          }}
          @focusout=${() => {
            this.isFocus = false
          }}
          maxlength="13"
        />
      </span>
    </span>`
  }

  static styles = css`
    :host {
      display: inline-block;
      width: 100%;
      height: fit-content;
    }

    #input-field {
      width: 100%;
      height: fit-content;
      display: flex;
      align-items: center;
      height: 58px;
    }

    #input-field span {
      width: 100%;
      height: fit-content;
    }

    input {
      height: 50px;
      max-width: 300px;
      width: calc(100% - 13px);
      min-width: 220px;
      font-size: 1.2rem;
      padding-left: 7px;
      padding-right: 1px;
      border: 2px solid #ffffff;
      border-radius: 3px;
      background: #121113;
      color: white;
    }

    input:focus {
      outline: none !important;
      border: 2px solid #87b7e4;
    }

    span label {
      position: absolute;
      margin-top: 14px;
      margin-left: 7px;
      padding: 0 2px 0 2px;
      animation-duration: 1s;
      animation-fill-mode: forwards;
      color: white;
      font-size: 1.2rem;
    }

    .label-up {
      animation-name: outAnimation;
    }

    .label-center {
      animation-name: inAnimation;
    }

    @keyframes inAnimation {
      from {
        margin-top: -12px;
        margin-left: 7px;
        background: black;
      }
      to {
        margin-top: 14px;
        margin-left: 7px;
      }
    }

    @keyframes outAnimation {
      to {
        margin-top: -12px;
        margin-left: 7px;
        background: black;
        color: #86c2fa;
      }
    }
  `
}

customElements.define('input-field-component', InputFieldComponent)
