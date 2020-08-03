import GUIThemeFactory from '../../interfaces/IGUIThemeFactory'
import Button from './Components/Button'
import CheckBox from './Components/CheckBox';
import Input from './Components/Input';

export default class GUIFactory implements GUIThemeFactory {
    getInputComponent(placeholder: string) {
        return new Input(placeholder);
    }
    getButtonComponent(htmlType: string, text: string) {
        return new Button(htmlType, text);
    }
    getCheckBoxComponent(checked: boolean) {
        return new CheckBox(checked)
    }
}