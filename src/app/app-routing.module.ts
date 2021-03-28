import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DirtyGuard } from './core/guards/dirty-guard';
import { EditComponent } from './features/edit/edit.component';
import { HomeComponent } from './features/home/home.component';
import { RouteNotFoundComponent } from './features/route-not-found/route-not-found.component';

const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: '',
        pathMatch: 'full',
        redirectTo: '/home'
    },
    {
        path: 'edit',
        component: EditComponent,
        canDeactivate: [DirtyGuard]
    },
    {
        // Route for all routes not found
        path: '**',
        component: RouteNotFoundComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
