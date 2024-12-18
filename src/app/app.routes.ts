import { Routes } from '@angular/router';
import { CollectionsHomeComponent } from './collections/collections-home/collections-home.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
    { path: 'elements', loadChildren: () => import('./elements/elements.module').then((m) => m.ElementsModule)},
    { path: 'collections', loadChildren: () => import('./collections/collections.module').then((m) => m.CollectionsModule)},
    { path: 'views', loadChildren: () => import('./views/views.module').then((m) => m.ViewsModule)},
    { path: '', component: HomeComponent },
    { path: '**', component: NotFoundComponent }
];
