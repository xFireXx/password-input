import { EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
export declare class PasswordInputComponent {
    label: string;
    enableCapsLockCheck: boolean;
    lengthPassword?: number;
    placeholder: string;
    customClass: string;
    passwordChange: EventEmitter<string>;
    private _password;
    passwordVisible: boolean | undefined;
    get password(): string;
    set password(value: string);
    capsLockOn: boolean;
    inputType: 'password' | 'text';
    passwordError: string | null;
    checkCapsLock(event: KeyboardEvent): void;
    validatePassword(): void;
    clearPassword(): void;
    togglePasswordVisibility(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<PasswordInputComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PasswordInputComponent, "lib-password-input", never, { "label": { "alias": "label"; "required": false; }; "enableCapsLockCheck": { "alias": "enableCapsLockCheck"; "required": false; }; "lengthPassword": { "alias": "lengthPassword"; "required": false; }; "placeholder": { "alias": "placeholder"; "required": false; }; "customClass": { "alias": "customClass"; "required": false; }; }, { "passwordChange": "passwordChange"; }, never, never, false, never>;
}
