import { LitElement, html, css } from 'lit'

const stepIconSrc = new URL(
  '../../../assets/shoe-prints-solid.svg',
  import.meta.url
).href

class StepsComponent extends LitElement {
  _emitStep(step) {
    this.dispatchEvent(new CustomEvent('playerStep', { detail: step }))
  }

  render() {
    return html`
      <div id="steps-component">
        <span
          class="step-left"
          @click=${() => {
            this._emitStep('left')
          }}
        >
          <img
            class="steps-icon steps-icon-left"
            alt="left step"
            .src=${stepIconSrc}
          />
          LEFT
        </span>
        <hr id="division-steps-line" />
        <span
          class="step-right"
          @click=${() => {
            this._emitStep('right')
          }}
        >
          <img
            class="steps-icon steps-icon-right"
            alt="right step"
            .src=${stepIconSrc}
          />
          RIGHT
        </span>
      </div>
    `
  }

  static styles = css`
    #steps-component {
      background-color: #86c2f8;
      color: black;
      font-size: 1.2rem;
      border-radius: 5px;
      display: flex;
      height: 50px;
    }

    .step-left,
    .step-right {
      display: inline-flex;
      width: 150px;
      height: 50px;
      align-items: center;
      justify-content: center;
    }

    .step-left:hover,
    .step-right:hover {
      background-color: #add6fa;
    }

    .steps-icon {
      height: 20px;
      transform: rotate(-90deg);
      margin-right: 5px;
    }

    .steps-icon-left {
      transform: rotate(-90deg);
    }

    .steps-icon-right {
      transform: rotate(-90deg) rotatex(180deg);
    }

    #division-steps-line {
      width: 2px;
      height: 50px;
      padding: 0;
      margin: 0;
      border: none;
      background-color: #55a1e6;
    }
  `
}

customElements.define('steps-component', StepsComponent)
