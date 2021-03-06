import IInput from "../../../interfaces/IInput";

export default class Input implements IInput {
  constructor(private placeholder: string) {}

  render() {
    return `<input class="input black" type="text" placeholder="${this.placeholder}"></input>`;
  }
}
