import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadnikPocetnaComponent } from './radnik-pocetna.component';

describe('RadnikPocetnaComponent', () => {
  let component: RadnikPocetnaComponent;
  let fixture: ComponentFixture<RadnikPocetnaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RadnikPocetnaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RadnikPocetnaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
