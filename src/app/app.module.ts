import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { InfoComponent } from "./components/info/info.component";
import { ProjectsComponent } from "./components/portfolio/projects/projects.component";
import { IndividualComponentsComponent } from "./components/portfolio/individual-components/individual-components.component";
import { PortfolioComponent } from "./components/portfolio/portfolio.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { ToggleSwitchComponent } from "./components/portfolio/individual-components/toggle-switch/toggle-switch.component";
import { NavigationMenuComponent } from "./components/portfolio/individual-components/navigation-menu/navigation-menu.component";
import { ContactFormComponent } from "./components/contact-form/contact-form.component";
import { ReactiveFormsModule } from "@angular/forms";
import { RangeSliderComponent } from "./components/portfolio/individual-components/range-slider/range-slider.component";
import { LoadingIndicatorComponent } from "./components/portfolio/individual-components/loading-indicator/loading-indicator.component";

@NgModule({
    declarations: [
        AppComponent,
        InfoComponent,
        ProjectsComponent,
        IndividualComponentsComponent,
        PortfolioComponent,
        NavbarComponent,
        ToggleSwitchComponent,
        NavigationMenuComponent,
        ContactFormComponent,
        RangeSliderComponent,
        LoadingIndicatorComponent,
    ],
    imports: [BrowserModule, BrowserAnimationsModule, AppRoutingModule, ReactiveFormsModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
