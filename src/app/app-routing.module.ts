import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';


import {ClientComponent} from './client/client.component';


const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'clients', component: ClientComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
