import { Injectable } from "@angular/core";
import { DataService } from "../data/data.service";

@Injectable({
    providedIn: "root",
})
export class WindowService {
    constructor(private dataService: DataService) {}

    openTab(url: string): void {
        window.open(url);
    }

    openUrl(url: string): void {
        document.location = url;
    }

    openEmail(): void {
        window.location.href = `mailto:${this.dataService.email}?subject=Your Expertise Is Needed!`;
    }

    openGithub(): void {
        this.openTab(this.dataService.url_github);
    }

    openLinkedIn(): void {
        this.openTab(this.dataService.url_linkedin);
    }

    downloadResume(): void {
        this.openTab(this.dataService.url_resume);
    }
}
