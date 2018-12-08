import {Component} from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <h2>Exercices to start: </h2>
    <ul>
      <li>
        <h3><a routerLink="/content-projection">Content projection with ng-content</a></h3>
      </li>
      <li>
        <h3><a routerLink="/dynamic-component">Dynamic Component</a></h3>
      </li>
      <li>
        <h3><a routerLink="/render-props">Render Props</a></h3>
      </li>
      <li>
        <h3><a routerLink="/data-provider-pattern">Data Provider Pattern</a></h3>
      </li>
    </ul>
  `,
})
export class HomeComponent {
}
