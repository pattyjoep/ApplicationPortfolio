import { Component } from "@angular/core";

import { FormControl, FormGroup } from "@angular/forms";

@Component({
    selector: "app-toggle-switch",
    templateUrl: "./toggle-switch.component.html",
    styleUrls: ["./toggle-switch.component.scss"],
})
export class ToggleSwitchComponent {
    effectForm = new FormGroup({
        rollEnabled: new FormControl<boolean>(false),
    });

    evaluateForm(effect: string): void {
        if (effect === "roll") {
            if (this.effectForm.controls.rollEnabled.value === false) {
                this.effectForm.controls.rollEnabled.setValue(true);
            } else {
                this.effectForm.controls.rollEnabled.setValue(false);
            }
        }
    }
}
