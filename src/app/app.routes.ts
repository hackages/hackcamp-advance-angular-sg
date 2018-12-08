import {HomeComponent} from './home.component';

export const App_ROUTES = [
  {
    path: 'content-projection',
    loadChildren:
      './content-projection/content-projection.module#ContentProjectionModule',
    pathMatch: 'full'
  },
  {
    path: 'dynamic-component',
    loadChildren:
      './dynamic-component/dynamic-component.module#DynamicComponentModule',
    pathMatch: 'full'
  },
  {
    path: 'render-props',
    loadChildren: './render-props/render-props.module#RenderPropsModule',
    pathMatch: 'full'
  },
  {
    path: 'data-provider-pattern',
    loadChildren: './data-provider-pattern/data-provider-pattern.module#DataProviderPatternModule',
    pathMatch: 'full'
  },
  { path: '', component: HomeComponent, pathMatch: 'full' },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];
