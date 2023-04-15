import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './footer-dir/about/about.component';
import { ChangelogComponent } from './footer-dir/changelog/changelog.component';
import { HomeComponent } from './home/home.component';
import { ContentsComponent } from './contents/contents.component';
import { CardsComponent } from './activities/cards/cards.component';
import { ContactComponent } from './contact/contact.component';
import { NewsletterSignupComponent } from './footer-dir/newsletter-signup/newsletter-signup.component';
import { CheckInComponent } from './check-in/check-in.component';
import { DuelsComponent } from './activities/duels/duels.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RewordComponent } from './activities/reword/reword.component';
import { ExpandablesComponent } from './activities/expandables/expandables.component';
import { TimedCardsComponent } from './activities/timed-cards/timed-cards.component';
import { TeachersGuideComponent } from './footer-dir/teachers-guide/teachers-guide.component';
import { RoadmapComponent } from './footer-dir/roadmap/roadmap.component';
import { AbbreviationsComponent } from './footer-dir/abbreviations/abbreviations.component';
import { EscapeRoomComponent } from './activities/escape-room/escape-room.component';
import { ContextComponent } from './activities/context/context.component';
import { BoardGameComponent } from './activities/board-game/board-game.component';
import { RankingComponent } from './activities/ranking/ranking.component';
import { StoryPuzzleComponent } from './activities/story-puzzle/story-puzzle.component';
import { DictionariesComponent } from './footer-dir/dictionaries/dictionaries.component';
import { CorporaComponent } from './footer-dir/corpora/corpora.component';
import { MiscComponent } from './footer-dir/misc/misc.component';
import { TextComponent } from './footer-dir/text/text.component';
import { VideoComponent } from './footer-dir/video/video.component';
import { PodcastsComponent } from './footer-dir/podcasts/podcasts.component';

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
  { path: 'video', component: VideoComponent },
  { path: 'podcasts', component: PodcastsComponent },
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
