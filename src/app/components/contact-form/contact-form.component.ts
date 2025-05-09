import { Component } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { trigger, transition, style, animate } from "@angular/animations";

@Component({
    selector: "app-contact-form",
    templateUrl: "./contact-form.component.html",
    styleUrl: "./contact-form.component.scss",
    animations: [
        trigger("fadeInOut", [
            transition(":enter", [
                // plays when element is added
                style({ opacity: 0 }),
                animate(".5s ease-in-out", style({ opacity: 1 })),
            ]),
            transition(":leave", [
                // plays when element is removed
                animate(".5s ease-in-out", style({ opacity: 0 })),
            ]),
        ]),
    ],
})
export class ContactFormComponent {
    form = new FormGroup({
        name_first: new FormControl<string | null>(null, [Validators.required, Validators.minLength(2), Validators.maxLength(50)]),
        name_last: new FormControl<string | null>(null, [Validators.required, Validators.minLength(2), Validators.maxLength(50)]),
        phone: new FormControl<string | null>(null, [
            Validators.required,
            Validators.pattern("^[0-9]{10}$"),
            Validators.minLength(10),
            Validators.maxLength(10),
        ]),
        email: new FormControl<string | null>(null, [Validators.required, Validators.email]),
        message: new FormControl<string | null>(null, [Validators.required, Validators.maxLength(1000)]),
    });
    formSubmissionURL = "https://formspree.io/f/myzwwvor";

    constructor() {}
}
