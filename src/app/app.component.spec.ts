import { async, TestBed } from '@angular/core/testing';
import { ObservableMedia } from '@angular/flex-layout';
import { DomSanitizer } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {
  commonTestingModules,
  commonTestingProviders,
  DomSanitizerFake,
  ObservableMediaFake,
} from './common/common.testing';
import {
  NavigationMenuComponent,
} from './user/navigation-menu/navigation-menu.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: commonTestingModules,
      providers: commonTestingProviders.concat([
        { provide: ObservableMedia, useClass: ObservableMediaFake },
        // { provide: MatIconRegistry, useClass: MatIconRegistryFake },
        { provide: DomSanitizer, useClass: DomSanitizerFake },
      ]),
      declarations: [AppComponent, NavigationMenuComponent],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'lemon-mart'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('lemon-mart');
  }));
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('mat-toolbar .mat-h2').textContent).toContain(
      'LemonMart'
    );
  }));
});
