import { Component } from "@angular/core";

interface NavigationMenuOption {
    key: string;
    label: string;
    icon?: string;
}

@Component({
    selector: "app-navigation-menu",
    templateUrl: "./navigation-menu.component.html",
    styleUrls: ["./navigation-menu.component.scss"],
})
export class NavigationMenuComponent {
    menuOpen = false;

    navigationMenuOptions: NavigationMenuOption[] = [
        {
            key: "home",
            label: "home",
            icon: "house",
        },
        {
            key: "user",
            label: "user",
            icon: "user",
        },
        {
            key: "settings",
            label: "settings",
            icon: "gear",
        },
        {
            key: "share",
            label: "share",
            icon: "share",
        },
        {
            key: "search",
            label: "search",
            icon: "magnifying-glass",
        },
    ];

    toggleMenu(): void {
        if (this.menuOpen) {
            this.menuOpen = false;
        } else {
            this.menuOpen = true;
        }
    }
}
