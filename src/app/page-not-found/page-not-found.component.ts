import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  template: `
    <p>
      This page doesn't exist. Go back to <a routerLink="/home"></a>
    </p>
  `,
  styleUrls: ['./page-not-found.component.css'],
})
export class PageNotFoundComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
