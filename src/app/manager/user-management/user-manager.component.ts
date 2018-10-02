import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-manager',
  template: `
      <div class="horizontal-padding">
        <router-outlet name="master"></router-outlet>
        <div style="min-height: 10px"></div>
        <router-outlet name="detail"></router-outlet>
      </div>
  `,
  styles: [],
})
export class UserManagerComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
