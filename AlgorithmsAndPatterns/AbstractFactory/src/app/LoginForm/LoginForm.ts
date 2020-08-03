import IGUIThemeFactory from "../../interfaces/IGUIThemeFactory";
import BlackGUI from "../../Themes/BlackTheme/GUIFactory";
import DefaultGUI from "../../Themes/DefaultTheme/GUIFactory";
import IComponent from "../../interfaces/IComponent";

export default class LoginForm implements IComponent {
  private gui: IGUIThemeFactory;

  constructor(private theme: string) {
    this.createGui();
  }

  createGui() {
    switch (this.theme) {
      case "black":
        this.gui = new BlackGUI();
        break;
      case "default":
      default:
        this.gui = new DefaultGUI();
    }
  }

  render() {
    const button = this.gui.getButtonComponent("button", "Войти");
    const loginInput = this.gui.getInputComponent("Логин")
    const passwordInput = this.gui.getInputComponent("Пароль")
    const checkbox = this.gui.getCheckBoxComponent(false);
    return `
      <form>
        ${loginInput.render()}
        ${passwordInput.render()}
        ${checkbox.render()}
        <label>
          ${button.render()}
          Запомнить меня
        </label>
      </form>
    `
  }
}
