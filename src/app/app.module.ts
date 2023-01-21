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
import { CardsComponent } from './cards/cards.component';
import { ContactComponent } from './contact/contact.component';
import { CheckInComponent } from './check-in/check-in.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RewordComponent } from './reword/reword.component';
import { DialogInfoComponent } from './dialog-info/dialog-info.component';
import { ExpandablesComponent } from './expandables/expandables.component';
import { DuelsComponent } from './duels/duels.component';
import { ConvertTimePipe } from './convert-time.pipe';
import { TimedCardsComponent } from './timed-cards/timed-cards.component';
import { ChangelogComponent } from './changelog/changelog.component';
import { TeachersGuideComponent } from './teachers-guide/teachers-guide.component';
import { RoadmapComponent } from './roadmap/roadmap.component';
import { AbbreviationsComponent } from './abbreviations/abbreviations.component';
import { EscapeRoomComponent } from './escape-room/escape-room.component';
import { ContextComponent } from './context/context.component';
import { BoardGameComponent } from './board-game/board-game.component';
import { DialogBoardGameComponent } from './dialog-board-game/dialog-board-game.component';
import { RankingComponent } from './ranking/ranking.component';
import { StoryPuzzleComponent } from './story-puzzle/story-puzzle.component';
import { DictionariesComponent } from './dictionaries/dictionaries.component';
import { CorporaComponent } from './corpora/corpora.component';
import { MiscComponent } from './misc/misc.component';
import { SentenceViewComponent } from './story-puzzle/sentence-view/sentence-view.component';

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
