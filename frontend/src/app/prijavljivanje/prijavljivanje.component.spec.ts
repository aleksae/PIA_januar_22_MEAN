import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrijavljivanjeComponent } from './prijavljivanje.component';

describe('PrijavljivanjeComponent', () => {
  let component: PrijavljivanjeComponent;
  let fixture: ComponentFixture<PrijavljivanjeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrijavljivanjeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrijavljivanjeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
