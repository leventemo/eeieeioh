import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ContentsComponent } from './contents/contents.component';
import { CardsComponent } from './cards/cards.component';
import { ContactComponent } from './contact/contact.component';
import { CheckInComponent } from './check-in/check-in.component';
import { DuelComponent } from './duel/duel.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RewordComponent } from './reword/reword.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contents', component: ContentsComponent },
  { path: 'cards/:id', component: CardsComponent },
  { path: 'reword/:id', component: RewordComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'check-in', component: CheckInComponent },
  { path: 'duel', component: DuelComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled',
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
