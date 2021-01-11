import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PacketGalleyComponent } from './packet-galley.component';

describe('PacketGalleyComponent', () => {
  let component: PacketGalleyComponent;
  let fixture: ComponentFixture<PacketGalleyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PacketGalleyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PacketGalleyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
