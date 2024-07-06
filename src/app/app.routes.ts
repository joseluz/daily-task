import {Route} from '@angular/router';
import {DairyActivityPage} from './ui/pages/dairy-activity/dairy-activity.page';

export interface AppRoute extends Route {
  path?: RoutePath;
  children?: Array<AppRoute>;
}

export enum RoutePath {
  DairyActivity = ''
}

export const routes: Array<AppRoute> = [
  {
    path: RoutePath.DairyActivity,
    component: DairyActivityPage
  }
];
