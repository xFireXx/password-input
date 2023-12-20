import { Component, EventEmitter, HostListener, Input, Output } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "ng-zorro-antd/input";
import * as i2 from "ng-zorro-antd/core/transition-patch";
import * as i3 from "@angular/forms";
import * as i4 from "ng-zorro-antd/icon";
import * as i5 from "@angular/common";
export class PasswordInputComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFzc3dvcmQtaW5wdXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvcGFzc3dvcmQtaW5wdXQvc3JjL2xpYi9wYXNzd29yZC1pbnB1dC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7QUFtRHJGLE1BQU0sT0FBTyxzQkFBc0I7SUFqRG5DO1FBa0RXLFVBQUssR0FBRyxVQUFVLENBQUM7UUFDbkIsd0JBQW1CLEdBQUcsS0FBSyxDQUFDO1FBRTVCLGdCQUFXLEdBQUcsYUFBYSxDQUFDO1FBQzVCLGdCQUFXLEdBQUcsWUFBWSxDQUFDO1FBQzFCLG1CQUFjLEdBQUcsSUFBSSxZQUFZLEVBQVUsQ0FBQztRQUU5QyxjQUFTLEdBQVcsRUFBRSxDQUFDO1FBWS9CLGVBQVUsR0FBRyxLQUFLLENBQUM7UUFDbkIsY0FBUyxHQUF3QixVQUFVLENBQUM7UUFDNUMsa0JBQWEsR0FBa0IsSUFBSSxDQUFDO0tBaUNyQztJQTVDQyxJQUFJLFFBQVE7UUFDVixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDeEIsQ0FBQztJQUVELElBQUksUUFBUSxDQUFDLEtBQWE7UUFDeEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7UUFDdkIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDbEMsQ0FBQztJQU9ELGFBQWEsQ0FBQyxLQUFvQjtRQUNoQyxJQUFJLElBQUksQ0FBQyxtQkFBbUIsRUFBRTtZQUM1QixJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQyxnQkFBZ0IsSUFBSSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsVUFBVSxDQUFDLENBQUM7U0FDaEY7SUFDSCxDQUFDO0lBRUQsZ0JBQWdCO1FBQ2QsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRTtZQUM1QyxNQUFNLGNBQWMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQztZQUM1QyxJQUFJLGNBQWMsR0FBRyxJQUFJLENBQUMsY0FBYyxFQUFFO2dCQUN4QyxJQUFJLENBQUMsYUFBYSxHQUFHLGtDQUFrQyxJQUFJLENBQUMsY0FBYyxTQUFTLENBQUM7YUFDckY7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLGFBQWEsR0FBRyxFQUFFLENBQUM7YUFDekI7U0FDRjtJQUNILENBQUM7SUFFRCxhQUFhO1FBQ1gsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7SUFDckIsQ0FBQztJQUVELHdCQUF3QjtRQUN0QixJQUFJLENBQUMsZUFBZSxHQUFHLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQztRQUU3QyxJQUFJLElBQUksQ0FBQyxlQUFlLEVBQUU7WUFDeEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUM7U0FDekI7YUFBTTtZQUNMLElBQUksQ0FBQyxTQUFTLEdBQUcsVUFBVSxDQUFDO1NBQzdCO0lBQ0gsQ0FBQzsrR0F0RFUsc0JBQXNCO21HQUF0QixzQkFBc0IsK1VBL0N2Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQStCVDs7NEZBZ0JVLHNCQUFzQjtrQkFqRGxDLFNBQVM7K0JBQ0Usb0JBQW9CLFlBQ3BCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBK0JUOzhCQWlCUSxLQUFLO3NCQUFiLEtBQUs7Z0JBQ0csbUJBQW1CO3NCQUEzQixLQUFLO2dCQUNHLGNBQWM7c0JBQXRCLEtBQUs7Z0JBQ0csV0FBVztzQkFBbkIsS0FBSztnQkFDRyxXQUFXO3NCQUFuQixLQUFLO2dCQUNJLGNBQWM7c0JBQXZCLE1BQU07Z0JBbUJQLGFBQWE7c0JBRFosWUFBWTt1QkFBQyxnQkFBZ0IsRUFBRSxDQUFDLFFBQVEsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBIb3N0TGlzdGVuZXIsIElucHV0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLXBhc3N3b3JkLWlucHV0JyxcbiAgdGVtcGxhdGU6IGBcbiAgPGRpdj5cbiAgICA8bGFiZWw+XG4gICAgICB7eyBsYWJlbCB9fVxuICAgICAgPG56LWlucHV0LWdyb3VwIFtuelN1ZmZpeF09XCJzdWZmaXhUZW1wbGF0ZVwiPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICBbdHlwZV09XCJpbnB1dFR5cGVcIlxuICAgICAgICAgIFsobmdNb2RlbCldPVwicGFzc3dvcmRcIlxuICAgICAgICAgIG56LWlucHV0XG4gICAgICAgICAgKGtleWRvd24pPVwidmFsaWRhdGVQYXNzd29yZCgpXCJcbiAgICAgICAgICBbcGxhY2Vob2xkZXJdPVwicGxhY2Vob2xkZXJcIlxuICAgICAgICAgIFsobmdNb2RlbCldPVwicGFzc3dvcmRcIlxuICAgICAgICAgIFtuZ0NsYXNzXT1cImN1c3RvbUNsYXNzXCJcbiAgICAgICAgLz5cbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImNsZWFyQnV0dG9uXCIgKGNsaWNrKT1cImNsZWFyUGFzc3dvcmQoKVwiPlg8L2J1dHRvbj5cbiAgICAgIDwvbnotaW5wdXQtZ3JvdXA+XG4gICAgICA8bmctdGVtcGxhdGUgI3N1ZmZpeFRlbXBsYXRlPlxuICAgICAgICA8c3BhblxuICAgICAgICAgIG56LWljb25cbiAgICAgICAgICBbbnpUeXBlXT1cInBhc3N3b3JkVmlzaWJsZSA/ICdleWUtaW52aXNpYmxlJyA6ICdleWUnXCJcbiAgICAgICAgICAoY2xpY2spPVwidG9nZ2xlUGFzc3dvcmRWaXNpYmlsaXR5KClcIlxuICAgICAgICA+PC9zcGFuPlxuICAgICAgICBcbiAgICAgIDwvbmctdGVtcGxhdGU+XG4gICAgICA8ZGl2IGNsYXNzPVwiZXJyb3JDYXBzbG9ja1wiICpuZ0lmPVwiY2Fwc0xvY2tPblwiPlxuICAgICAgICBNYXN6IHfFgsSFY3pvbmVnbyBjYXBzbG9ja2FcbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImVycm9yc1wiICpuZ0lmPVwicGFzc3dvcmRFcnJvclwiPnt7IHBhc3N3b3JkRXJyb3IgfX08L2Rpdj5cbiAgICA8L2xhYmVsPlxuICAgIDxkaXYgY2xhc3M9XCJlcnJvcnNcIj48L2Rpdj5cbiAgPC9kaXY+XG4gIGAsIFxuICBzdHlsZXM6IFtcbiAgICBgXG4gICAgLmVycm9yQ2Fwc2xvY2sge1xuICAgICAgY29sb3I6IHJlZDtcbiAgfVxuICBcbiAgLmNsZWFyQnV0dG9uIHtcbiAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgYm9yZGVyOiAwO1xuICB9XG4gIC5pbnB1dC1mb3JtIHtcbiAgICBoZWlnaHQ6IDUwcHg7XG59YFxuICBdXG59KVxuZXhwb3J0IGNsYXNzIFBhc3N3b3JkSW5wdXRDb21wb25lbnQge1xuICBASW5wdXQoKSBsYWJlbCA9ICdQYXNzd29yZCc7XG4gIEBJbnB1dCgpIGVuYWJsZUNhcHNMb2NrQ2hlY2sgPSBmYWxzZTtcbiAgQElucHV0KCkgbGVuZ3RoUGFzc3dvcmQ/OiBudW1iZXI7XG4gIEBJbnB1dCgpIHBsYWNlaG9sZGVyID0gJ1dwaXN6IGhhc8WCbyc7XG4gIEBJbnB1dCgpIGN1c3RvbUNsYXNzID0gJ2lucHV0LWZvcm0nO1xuICBAT3V0cHV0KCkgcGFzc3dvcmRDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcblxuICBwcml2YXRlIF9wYXNzd29yZDogc3RyaW5nID0gJyc7XG4gIHBhc3N3b3JkVmlzaWJsZTogYm9vbGVhbiB8IHVuZGVmaW5lZDtcblxuICBnZXQgcGFzc3dvcmQoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fcGFzc3dvcmQ7XG4gIH1cblxuICBzZXQgcGFzc3dvcmQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3Bhc3N3b3JkID0gdmFsdWU7XG4gICAgdGhpcy5wYXNzd29yZENoYW5nZS5lbWl0KHZhbHVlKTtcbiAgfVxuXG4gIGNhcHNMb2NrT24gPSBmYWxzZTtcbiAgaW5wdXRUeXBlOiAncGFzc3dvcmQnIHwgJ3RleHQnID0gJ3Bhc3N3b3JkJztcbiAgcGFzc3dvcmRFcnJvcjogc3RyaW5nIHwgbnVsbCA9IG51bGw7XG5cbiAgQEhvc3RMaXN0ZW5lcignd2luZG93OmtleWRvd24nLCBbJyRldmVudCddKVxuICBjaGVja0NhcHNMb2NrKGV2ZW50OiBLZXlib2FyZEV2ZW50KTogdm9pZCB7XG4gICAgaWYgKHRoaXMuZW5hYmxlQ2Fwc0xvY2tDaGVjaykge1xuICAgICAgdGhpcy5jYXBzTG9ja09uID0gZXZlbnQuZ2V0TW9kaWZpZXJTdGF0ZSAmJiBldmVudC5nZXRNb2RpZmllclN0YXRlKCdDYXBzTG9jaycpO1xuICAgIH1cbiAgfVxuXG4gIHZhbGlkYXRlUGFzc3dvcmQoKSB7XG4gICAgaWYgKCEhdGhpcy5wYXNzd29yZCAmJiAhIXRoaXMubGVuZ3RoUGFzc3dvcmQpIHtcbiAgICAgIGNvbnN0IHBhc3N3b3JkTGVuZ3RoID0gdGhpcy5wYXNzd29yZC5sZW5ndGg7XG4gICAgICBpZiAocGFzc3dvcmRMZW5ndGggPiB0aGlzLmxlbmd0aFBhc3N3b3JkKSB7XG4gICAgICAgIHRoaXMucGFzc3dvcmRFcnJvciA9IGBIYXPFgm8gbmllIG1vxbxlIGJ5xIcgZMWCdcW8c3plIG5pxbwgJHt0aGlzLmxlbmd0aFBhc3N3b3JkfSB6bmFrw7N3YDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMucGFzc3dvcmRFcnJvciA9IFwiXCI7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgY2xlYXJQYXNzd29yZCgpIHtcbiAgICB0aGlzLnBhc3N3b3JkID0gJyc7XG4gIH1cblxuICB0b2dnbGVQYXNzd29yZFZpc2liaWxpdHkoKSB7XG4gICAgdGhpcy5wYXNzd29yZFZpc2libGUgPSAhdGhpcy5wYXNzd29yZFZpc2libGU7XG4gIFxuICAgIGlmICh0aGlzLnBhc3N3b3JkVmlzaWJsZSkge1xuICAgICAgdGhpcy5pbnB1dFR5cGUgPSAndGV4dCc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaW5wdXRUeXBlID0gJ3Bhc3N3b3JkJztcbiAgICB9XG4gIH1cbn1cbiJdfQ==