import { Component, ViewChild, ElementRef, AfterViewInit } from "@angular/core";

@Component({
    selector: "app-range-slider",
    templateUrl: "./range-slider.component.html",
    styleUrl: "./range-slider.component.scss",
})
export class RangeSliderComponent {
    sliderValue = 50;
    @ViewChild("rangeSlider", { static: true }) rangeSlider!: ElementRef<HTMLInputElement>;

    constructor() {}

    ngAfterViewInit() {
        this.updateSliderBackground();
    }

    onSliderInput(event: Event): void {
        this.sliderValue = +(event.target as HTMLInputElement).value;
        this.updateSliderBackground();
    }

    updateSliderBackground(): void {
        const slider = this.rangeSlider.nativeElement;
        const min = Number(slider.min);
        const max = Number(slider.max);
        const val = Number(slider.value);
        const percent = ((val - min) / (max - min)) * 100;

        slider.style.background = `linear-gradient(to right, #00f260 0%, #0575e6 ${percent}%, #ddd ${percent}%, #ddd 100%)`;
    }
}
