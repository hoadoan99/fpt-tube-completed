import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingApiComponent } from './setting-api.component';

describe('SettingApiComponent', () => {
  let component: SettingApiComponent;
  let fixture: ComponentFixture<SettingApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SettingApiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
