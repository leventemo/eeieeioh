import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ChangelogComponent } from './changelog/changelog.component';
import { HomeComponent } from './home/home.component';
import { ContentsComponent } from './contents/contents.component';
import { CardsComponent } from './cards/cards.component';
import { ContactComponent } from './contact/contact.component';
import { NewsletterSignupComponent } from './newsletter-signup/newsletter-signup.component';
import { CheckInComponent } from './check-in/check-in.component';
import { DuelsComponent } from './duels/duels.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RewordComponent } from './reword/reword.component';
import { ExpandablesComponent } from './expandables/expandables.component';
import { TimedCardsComponent } from './timed-cards/timed-cards.component';
import { TeachersGuideComponent } from './teachers-guide/teachers-guide.component';
import { RoadmapComponent } from './roadmap/roadmap.component';
import { AbbreviationsComponent } from './abbreviations/abbreviations.component';
import { EscapeRoomComponent } from './escape-room/escape-room.component';
import { ContextComponent } from './context/context.component';
import { BoardGameComponent } from './board-game/board-game.component';
import { RankingComponent } from './ranking/ranking.component';
import { StoryPuzzleComponent } from './story-puzzle/story-puzzle.component';
import { DictionariesComponent } from './dictionaries/dictionaries.component';
import { CorporaComponent } from './corpora/corpora.component';
import { MiscComponent } from './misc/misc.component';
import { TextComponent } from './text/text.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'changelog', component: ChangelogComponent },
  { path: 'teachers-guide', component: TeachersGuideComponent },
  { path: 'roadmap', component: RoadmapComponent },
  { path: 'abbreviations', component: AbbreviationsComponent },
  { path: 'dictionaries', component: DictionariesComponent },
  { path: 'corpora', component: CorporaComponent },
  { path: 'misc', component: MiscComponent },
  { path: 'text', component: TextComponent },
  { path: 'contents', component: ContentsComponent },
  { path: 'cards/:id', component: CardsComponent },
  { path: 'reword/:id', component: RewordComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'newsletter', component: NewsletterSignupComponent },
  { path: 'check-in', component: CheckInComponent },
  { path: 'duels/:id', component: DuelsComponent },
  { path: 'board-game/:id', component: BoardGameComponent },
  { path: 'expandables/:id', component: ExpandablesComponent },
  { path: 'timed-cards/:id', component: TimedCardsComponent },
  { path: 'escape-room/:id', component: EscapeRoomComponent },
  { path: 'ranking/:id', component: RankingComponent },
  { path: 'context/:id', component: ContextComponent },
  { path: 'story-puzzle/:id', component: StoryPuzzleComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled',
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
