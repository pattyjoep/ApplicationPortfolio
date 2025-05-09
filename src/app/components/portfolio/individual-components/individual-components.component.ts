import { Component } from "@angular/core";
import { DataService } from "../../../services/data/data.service";
import { IndividualComponent } from "../../../../models/individual-component.model";
@Component({
    selector: "app-individual-components",
    templateUrl: "./individual-components.component.html",
    styleUrl: "./individual-components.component.scss",
})
export class IndividualComponentsComponent {
    individualComponents: IndividualComponent[] = [];

    constructor(private dataService: DataService) {
        // set individualComponents object array from individualComponents in dataService
        this.individualComponents = this.dataService.individualComponents;
    }
}
