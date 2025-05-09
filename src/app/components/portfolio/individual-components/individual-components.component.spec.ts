import { ComponentFixture, TestBed } from "@angular/core/testing";

import { IndividualComponentsComponent } from "./individual-components.component";

describe("IndividualComponentsComponent", () => {
    let component: IndividualComponentsComponent;
    let fixture: ComponentFixture<IndividualComponentsComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [IndividualComponentsComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(IndividualComponentsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
