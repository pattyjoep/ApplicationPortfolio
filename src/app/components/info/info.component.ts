import { Component } from "@angular/core";
import { WindowService } from "../../services/window/window.service";

@Component({
    selector: "app-info",
    templateUrl: "./info.component.html",
    styleUrl: "./info.component.scss",
})
export class InfoComponent {
    constructor(public windowService: WindowService) {}
}
