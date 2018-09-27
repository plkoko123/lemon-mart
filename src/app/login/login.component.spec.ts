import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { commonTestingModules, commonTestingProviders } from '../common/common.testing';
import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: commonTestingModules,
      declarations: [LoginComponent],
      providers: commonTestingProviders,
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
