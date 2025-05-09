import { Component } from "@angular/core";
import { WindowService } from "../../services/window/window.service";

@Component({
    selector: "app-navbar",
    templateUrl: "./navbar.component.html",
    styleUrl: "./navbar.component.scss",
})
export class NavbarComponent {
    constructor(public windowService: WindowService) {}
}
