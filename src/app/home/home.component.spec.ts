import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthService } from '../auth/auth.service';
import { AuthServiceFake } from '../auth/auth.service.fake';
import { commonTestingModules } from '../common/common.testing';
import { UiService } from '../common/ui.service';
import { LoginComponent } from '../login/login.component';
import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: commonTestingModules,
      declarations: [HomeComponent, LoginComponent],
      providers: [{ provide: AuthService, useClass: AuthServiceFake }, UiService],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
