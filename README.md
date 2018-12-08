# HcAngularAdvanced

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.8.

# Content projection with ng-content (folder: content-projection)

### TODO

- Implement simple-card.final.component.ts to reproduce the card structure of simple-card.component.ts using ng-content. Open demo.component.ts to get the structure
  
> You will get some css issues but it is OK. We will not focus on it. We should only be able to see the data and the element correctly positioned.

# Dynamic component (folder: dynamic-component)

### TODO

- Open the demo.component.ts and follow the comments.

# Render Props (folder: renderProps)

### TODO

- Create a render props to fetch Github API and render it
- Create a render props wrapper to HttpClient GET
- Rewrite GithubUser using HttpClientGet

# DataProvider Pattern (folder: data-provider-pattern)

### TODO

- Implement ```app-data-provider```
- Implement ```app-data-consumer```
- Implement ```DataProviderService```
- Make it working like below

```html
<app-data-provider key="theme" [data]="{ theme: 'dark' }">
  ...
    ...
      <app-data-consumer key="theme">
        <ng-template let-theme="theme">
          {{theme}} <-- 'dark'
        </ng-template>
      </app-data-consumer>
    ...
  ...
</app-data-provider>
```

Inspired by the repo of isaacplmann/ngx-data-provider

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
