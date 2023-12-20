import * as i0 from '@angular/core';
import { Injectable, EventEmitter, Component, Input, Output, HostListener, NgModule } from '@angular/core';
import * as i1 from 'ng-zorro-antd/input';
import { NzInputModule } from 'ng-zorro-antd/input';
import * as i2 from 'ng-zorro-antd/core/transition-patch';
import * as i3 from '@angular/forms';
import { FormsModule } from '@angular/forms';
import * as i4 from 'ng-zorro-antd/icon';
import { NzIconModule } from 'ng-zorro-antd/icon';
import * as i5 from '@angular/common';
import { CommonModule } from '@angular/common';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzButtonModule } from 'ng-zorro-antd/button';

class PasswordInputService {
    constructor() { }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: PasswordInputService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: PasswordInputService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: PasswordInputService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return []; } });

class PasswordInputComponent {
    constructor() {
        this.label = 'Password';
        this.enableCapsLockCheck = false;
        this.placeholder = 'Wpisz hasło';
        this.customClass = 'input-form';
        this.passwordChange = new EventEmitter();
        this._password = '';
        this.capsLockOn = false;
        this.inputType = 'password';
        this.passwordError = null;
    }
    get password() {
        return this._password;
    }
    set password(value) {
        this._password = value;
        this.passwordChange.emit(value);
    }
    checkCapsLock(event) {
        if (this.enableCapsLockCheck) {
            this.capsLockOn = event.getModifierState && event.getModifierState('CapsLock');
        }
    }
    validatePassword() {
        if (!!this.password && !!this.lengthPassword) {
            const passwordLength = this.password.length;
            if (passwordLength > this.lengthPassword) {
                this.passwordError = `Hasło nie może być dłuższe niż ${this.lengthPassword} znaków`;
            }
            else {
                this.passwordError = "";
            }
        }
    }
    clearPassword() {
        this.password = '';
    }
    togglePasswordVisibility() {
        this.passwordVisible = !this.passwordVisible;
        if (this.passwordVisible) {
            this.inputType = 'text';
        }
        else {
            this.inputType = 'password';
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: PasswordInputComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: PasswordInputComponent, selector: "lib-password-input", inputs: { label: "label", enableCapsLockCheck: "enableCapsLockCheck", lengthPassword: "lengthPassword", placeholder: "placeholder", customClass: "customClass" }, outputs: { passwordChange: "passwordChange" }, host: { listeners: { "window:keydown": "checkCapsLock($event)" } }, ngImport: i0, template: `
  <div>
    <label>
      {{ label }}
      <nz-input-group [nzSuffix]="suffixTemplate">
        <input
          [type]="inputType"
          [(ngModel)]="password"
          nz-input
          (keydown)="validatePassword()"
          [placeholder]="placeholder"
          [(ngModel)]="password"
          [ngClass]="customClass"
        />
        <button class="clearButton" (click)="clearPassword()">X</button>
      </nz-input-group>
      <ng-template #suffixTemplate>
        <span
          nz-icon
          [nzType]="passwordVisible ? 'eye-invisible' : 'eye'"
          (click)="togglePasswordVisibility()"
        ></span>
        
      </ng-template>
      <div class="errorCapslock" *ngIf="capsLockOn">
        Masz włączonego capslocka
      </div>
      <div class="errors" *ngIf="passwordError">{{ passwordError }}</div>
    </label>
    <div class="errors"></div>
  </div>
  `, isInline: true, styles: [".errorCapslock{color:red}.clearButton{background:transparent;border:0}.input-form{height:50px}\n"], dependencies: [{ kind: "directive", type: i1.NzInputDirective, selector: "input[nz-input],textarea[nz-input]", inputs: ["nzBorderless", "nzSize", "nzStepperless", "nzStatus", "disabled"], exportAs: ["nzInput"] }, { kind: "component", type: i1.NzInputGroupComponent, selector: "nz-input-group", inputs: ["nzAddOnBeforeIcon", "nzAddOnAfterIcon", "nzPrefixIcon", "nzSuffixIcon", "nzAddOnBefore", "nzAddOnAfter", "nzPrefix", "nzStatus", "nzSuffix", "nzSize", "nzSearch", "nzCompact"], exportAs: ["nzInputGroup"] }, { kind: "directive", type: i1.NzInputGroupWhitSuffixOrPrefixDirective, selector: "nz-input-group[nzSuffix], nz-input-group[nzPrefix]" }, { kind: "directive", type: i2.ɵNzTransitionPatchDirective, selector: "[nz-button], nz-button-group, [nz-icon], [nz-menu-item], [nz-submenu], nz-select-top-control, nz-select-placeholder, nz-input-group", inputs: ["hidden"] }, { kind: "directive", type: i3.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i3.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i3.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { kind: "directive", type: i4.NzIconDirective, selector: "[nz-icon]", inputs: ["nzSpin", "nzRotate", "nzType", "nzTheme", "nzTwotoneColor", "nzIconfont"], exportAs: ["nzIcon"] }, { kind: "directive", type: i5.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i5.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: PasswordInputComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-password-input', template: `
  <div>
    <label>
      {{ label }}
      <nz-input-group [nzSuffix]="suffixTemplate">
        <input
          [type]="inputType"
          [(ngModel)]="password"
          nz-input
          (keydown)="validatePassword()"
          [placeholder]="placeholder"
          [(ngModel)]="password"
          [ngClass]="customClass"
        />
        <button class="clearButton" (click)="clearPassword()">X</button>
      </nz-input-group>
      <ng-template #suffixTemplate>
        <span
          nz-icon
          [nzType]="passwordVisible ? 'eye-invisible' : 'eye'"
          (click)="togglePasswordVisibility()"
        ></span>
        
      </ng-template>
      <div class="errorCapslock" *ngIf="capsLockOn">
        Masz włączonego capslocka
      </div>
      <div class="errors" *ngIf="passwordError">{{ passwordError }}</div>
    </label>
    <div class="errors"></div>
  </div>
  `, styles: [".errorCapslock{color:red}.clearButton{background:transparent;border:0}.input-form{height:50px}\n"] }]
        }], propDecorators: { label: [{
                type: Input
            }], enableCapsLockCheck: [{
                type: Input
            }], lengthPassword: [{
                type: Input
            }], placeholder: [{
                type: Input
            }], customClass: [{
                type: Input
            }], passwordChange: [{
                type: Output
            }], checkCapsLock: [{
                type: HostListener,
                args: ['window:keydown', ['$event']]
            }] } });

class PasswordInputModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: PasswordInputModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: PasswordInputModule, declarations: [PasswordInputComponent], imports: [NzInputModule,
            NzButtonModule,
            NzGridModule,
            FormsModule,
            NzIconModule,
            CommonModule], exports: [PasswordInputComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: PasswordInputModule, imports: [NzInputModule,
            NzButtonModule,
            NzGridModule,
            FormsModule,
            NzIconModule,
            CommonModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: PasswordInputModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        PasswordInputComponent
                    ],
                    imports: [
                        NzInputModule,
                        NzButtonModule,
                        NzGridModule,
                        FormsModule,
                        NzIconModule,
                        CommonModule
                    ],
                    exports: [
                        PasswordInputComponent
                    ]
                }]
        }] });

/*
 * Public API Surface of password-input
 */

/**
 * Generated bundle index. Do not edit.
 */

export { PasswordInputComponent, PasswordInputModule, PasswordInputService };
//# sourceMappingURL=password-input.mjs.map
