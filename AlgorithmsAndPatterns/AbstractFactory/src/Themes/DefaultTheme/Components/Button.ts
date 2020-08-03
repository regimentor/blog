import IButton from "../../../interfaces/IButton";

export default class Button implements IButton {
  constructor(private htmlType: string, private text: string) {}

  render() {
    return `<button class="button default" type="${this.htmlType}">${this.text}</button>`;
  }
}
