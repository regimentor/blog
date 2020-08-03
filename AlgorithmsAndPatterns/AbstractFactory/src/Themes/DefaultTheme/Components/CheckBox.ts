import ICheckBox from "../../../interfaces/ICheckBox";

export default class CheckBox implements ICheckBox {
  constructor(private checked: boolean) {}

  render() {
    return `<input class="checkbox default" type="checkbox" ${this.checked ? 'checked': ''}></input>`;
  }
}
