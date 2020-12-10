import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AuthComponent } from './auth/auth.component';
import { CharacterViewComponent } from './characters/character-view/character-view.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'auth', component: AuthComponent },
  { path: 'character-view', component: CharacterViewComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
