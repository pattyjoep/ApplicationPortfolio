import { Injectable } from "@angular/core";
import { Project } from "../../../models/project.model";
import { IndividualComponent } from "../../../models/individual-component.model";

@Injectable({
    providedIn: "root",
})
export class DataService {
    // my data
    email = "patrick_petro@icloud.com";
    url_github = "https://github.com/pattyjoep";
    url_linkedin = "https://www.linkedin.com/in/patrickjpetro";
    url_resume = "assets/documents/Patrick_Petro_Resume.pdf";

    // project data
    projects: Project[] = [
        {
            id: 1,
            title: "Task Manager",
            thumbnail: "taskManager",
            description:
                "Organize and plan your workday with this intuitive task manager app. Easily add, track, and manage tasks, with everything stored locally in your browser for seamless access. Completed tasks stay saved, preserving your history unless you choose to delete them.",
            url_repo: "https://github.com/pattyjoep/DayPlanner",
            url_production: "https://pattyjoep.github.io/DayPlanner",
        },
        {
            id: 2,
            title: "Password Generator",
            thumbnail: "passwordGenerator",
            description:
                "Need a password but can't think of one? Just select your specifications using the checkboxes, then generate a strong, random password with a single click. Use the copy-to-clipboard function to make using your new password a breeze.",
            url_repo: "https://github.com/pattyjoep/PasswordGenerator",
            url_production: "https://pattyjoep.github.io/PasswordGenerator",
        },
        {
            id: 3,
            title: "Resource Tracker",
            thumbnail: "diplomacy",
            description:
                "Built for fans of Diplomacy, this site makes it easy to track and trade resources during gameplay. Progress is automatically saved to your browser's local storage and remains until the game is reset. This site is still in development — stay tuned for more features!",
            url_repo: "https://github.com/pattyjoep/Diplomacy",
            url_production: "https://pattyjoep.github.io/Diplomacy",
        },
        {
            id: 4,
            title: "Weather Dashboard",
            thumbnail: "weatherDashboard",
            description:
                "Look up real-time weather conditions for any city with this streamlined weather dashboard. Recent searches are saved, making frequent lookups quick and easy to access.",
            url_repo: "https://github.com/pattyjoep/WeatherDash",
            url_production: "https://pattyjoep.github.io/WeatherDash",
        },
    ];

    // individual component data
    individualComponents: IndividualComponent[] = [
        {
            title: "Toggle Switch",
            selector: "toggleSwitch",
        },
        {
            title: "Nav Menu",
            selector: "navMenu",
        },
        {
            title: "Range Slider",
            selector: "rangeSlider",
        },
        {
            title: "Load Indicator",
            selector: "loadIndicator",
        },
    ];

    constructor() {}
}
