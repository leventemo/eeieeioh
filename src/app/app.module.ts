import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { ContentsComponent } from './contents/contents.component';
import { HomeComponent } from './home/home.component';
import { CardsComponent } from './activities/cards/cards.component';
import { ContactComponent } from './contact/contact.component';
import { CheckInComponent } from './check-in/check-in.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RewordComponent } from './activities/reword/reword.component';
import { DialogInfoComponent } from './activities/dialog-info/dialog-info.component';
import { ExpandablesComponent } from './activities/expandables/expandables.component';
import { DuelsComponent } from './activities/duels/duels.component';
import { ConvertTimePipe } from './convert-time.pipe';
import { TimedCardsComponent } from './activities/timed-cards/timed-cards.component';
import { ChangelogComponent } from './changelog/changelog.component';
import { TeachersGuideComponent } from './teachers-guide/teachers-guide.component';
import { RoadmapComponent } from './roadmap/roadmap.component';
import { AbbreviationsComponent } from './abbreviations/abbreviations.component';
import { EscapeRoomComponent } from './activities/escape-room/escape-room.component';
import { ContextComponent } from './activities/context/context.component';
import { BoardGameComponent } from './activities/board-game/board-game.component';
import { DialogBoardGameComponent } from './activities/dialog-board-game/dialog-board-game.component';
import { RankingComponent } from './activities/ranking/ranking.component';
import { StoryPuzzleComponent } from './activities/story-puzzle/story-puzzle.component';
import { DictionariesComponent } from './dictionaries/dictionaries.component';
import { CorporaComponent } from './corpora/corpora.component';
import { MiscComponent } from './misc/misc.component';
import { SentenceViewComponent } from './activities/story-puzzle/sentence-view/sentence-view.component';
import { NewsletterSignupComponent } from './newsletter-signup/newsletter-signup.component';
import { TextComponent } from './text/text.component';
import { VideoComponent } from './video/video.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    AboutComponent,
    ContentsComponent,
    HomeComponent,
    CardsComponent,
    ContactComponent,
    CheckInComponent,
    NotFoundComponent,
    RewordComponent,
    DialogInfoComponent,
    ExpandablesComponent,
    DuelsComponent,
    ConvertTimePipe,
    TimedCardsComponent,
    ChangelogComponent,
    RoadmapComponent,
    AbbreviationsComponent,
    EscapeRoomComponent,
    ContextComponent,
    BoardGameComponent,
    DialogBoardGameComponent,
    RankingComponent,
    TeachersGuideComponent,
    StoryPuzzleComponent,
    DictionariesComponent,
    CorporaComponent,
    MiscComponent,
    SentenceViewComponent,
    NewsletterSignupComponent,
    TextComponent,
    VideoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule { }
