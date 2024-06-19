import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KupacPocetnaComponent } from './kupac-pocetna.component';

describe('KupacPocetnaComponent', () => {
  let component: KupacPocetnaComponent;
  let fixture: ComponentFixture<KupacPocetnaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KupacPocetnaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KupacPocetnaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
