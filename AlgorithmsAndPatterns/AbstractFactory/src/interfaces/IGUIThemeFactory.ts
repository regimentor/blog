import IButton from "./IButton";
import IInput from "./IInput";
import ICheckBox from "./ICheckBox";


export default interface IGUIThemeFactory {
    getInputComponent: (placeholder: string) => IInput;
    getButtonComponent: (htmlType: string, text: string) => IButton;
    getCheckBoxComponent: (checked: boolean) => ICheckBox;
}