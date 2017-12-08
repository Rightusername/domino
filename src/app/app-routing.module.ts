import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DominoComponent } from './domino/domino.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'domino', component: DominoComponent },
  { path: 'home', component: HomeComponent },
  { path: '**', redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
