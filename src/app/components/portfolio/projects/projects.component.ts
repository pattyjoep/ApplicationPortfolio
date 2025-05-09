import { Component } from "@angular/core";
import { DataService } from "../../../services/data/data.service";
import { Project } from "../../../../models/project.model";
import { WindowService } from "../../../services/window/window.service";
@Component({
    selector: "app-projects",
    templateUrl: "./projects.component.html",
    styleUrl: "./projects.component.scss",
})
export class ProjectsComponent {
    projects: Project[] = [];
    selectedCardId = 0;

    constructor(
        private dataService: DataService,
        public windowService: WindowService,
    ) {
        // set projects object array from projects in dataService
        this.projects = this.dataService.projects;
    }

    flipCardBody(selectedProjectId: number): void {
        // check if the current card body clicked is already flipped
        if (this.selectedCardId === selectedProjectId) {
            // flip it back if it is
            this.selectedCardId = 0;
        } else {
            // otherwise flip it to see the back
            this.selectedCardId = selectedProjectId;
        }
    }
}
