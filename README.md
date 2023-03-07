# eeieeioh

## about

__eeieeioh.com__ is an app for teaching English
* it's in active development, it's a single frontend build right now, built in Angular
* by devising a range of "mini-apps", eg. __Context__, __Escape Room__, __Timed Cards__, __etc.__, I'm trying to explore how different classroom activities can be enhanced by interactivity, immediate feedback and gamification
* by making TEFL material available online it eliminates the teacher's need for continuous reproduction on paper

## todos

### footer

video
* Film crew
* whodunit
* what else?

articles
* separate from quizzes

quizzes
* separate from articles

### project-level todos

service-fed data:
- [x] Cards
- [ ] Timed Cards
- [x] Context
- [ ] Escape Room
- [ ] Expandables – Duels
- [ ] Ranking
- [ ] Story Puzzle
- [ ] Board Game
- [ ] Reword

better theming:
- [ ] register `logo.svg` as `<mat-icon>`
* <https://material.angular.io/components/icon/overview/>
* <https://www.positronx.io/angular-material-8-icons-tutorial-with-real-world-examples/>
- [ ] redefine & refine colour palette: <https://stackoverflow.com/questions/52373852/angular-theme-with-more-than-3-colors>
- [ ] customize typography: <https://material.angular.io/guide/typography>

other:
- [ ] fix rando util fn so it doesn't give 2 more often than 1
- [ ] set up sidenav when needed: <https://code-maze.com/angular-material-navigation/>
- [ ] animation on active links in nav
- [ ] testing
- [ ] page transition/router animations: <https://www.youtube.com/watch?v=7JA90VI9fAI>
- [ ] check accessibility concerns for lottie files: <https://github.com/airbnb/lottie-web/issues/1935>
- [ ] replace logo in nav & footer with cropped version of svg & resize-reposition

### component-level todos:
Footer:
  social
  - [ ] hook up contact form
  - [x] newsletter
  - [x] twitter eeieeioh
  - [ ] discord: <https://discord.com/community?utm_source=discord&utm_medium=discord&utm_campaign=2022-06_co-update&utm_term=log&utm_content=--t%3Aco>
  - [x] app development & content
  - [x] logo design

  redo links:
  - [x] dictionaries: link to page: html done
  - [x] corpus and friends: link to  page: html done
  - [ ] video: link to  page
  * <https://www.angularjswiki.com/angular/how-to-embed-youtube-videos-in-angular-apps/>
  - [ ] audio: link to  page
  - [x] misc: link to  page

Contact page
- [x] create component
- [x] set up routing
- [x] import `MatFormFieldModule` and `MatInputModule` in `material.module.ts`
- [x] create template
- [x] import `FormsModule` in `app.module.ts`
- [x] bind the input values to actual variables
- [x] submitForm()
- [x] validation: material & plain Angular
- [ ] validation: separate email validation into required + email, with 2 diff messages
- [x] validation: make send btn disabled until validation is done
- [x] clear inputs after submit: reloading?
- [x] routerLink in footer
- [x] typography in form: set it to custom typogr.
- [ ] snackbar: "your message has been sent" msg
- [ ] lazy loading?
- [ ] sanitazion?
- [x] automatic scroll to top on click of "Contact" btn (important on mobile screens)
- [ ] how to email with vercel+gmail <https://drew.tech/posts/how-to-send-email-with-vercel-domain-through-gsuite>
- [ ] check out <httpmailerlite.com>

REDO
- [ ] create components folder?

Hotel Check-in -> turn it into a Roleplay Component with A/B players getting their matching roles
- [x] install Faker-js: <https://fakerjs.dev/>
- [x] create check-in component
- [ ] set up routing: different to the other components!
- [x] include it contents page
- [x] write out component template
- [x] write out component class
- [ ] fix next btn -> reload
- [ ] redo responsive layout & styling a la Cards, which has changed
- [ ] lazy loading to avoid a full reload when Next btn is pressed?

Changelog Component
- [ ] when Changelog is open, links col in footer doesn't respond to click: is it the cat svg that covers it?

Cards component
- [ ] card prompts in an array so multiple lines can be rendered in template

Pelmalism Component
* see notes in eeieeioh/Pelmalism.md

Timed-Cards Component
- [ ] review
- [x] Yes-No Game
- [x] Exam Qns
- [ ] Talking about ...
- [ ] Just a minute
- [ ] Vocab Race activities, eg. Prep of Movement, etc – see EF
- [x] What's the right question?: DB > ELTGames.com > elem-pre-int CONV

Duels Component
- [ ] merge with Expandables: first Expandable, then Duels
- [ ] review
- [ ] better animation in options

Reword Component
- [ ] adjust FB card top margin (too high on mobile to see the Contents btn)
- [ ] review

Contents Component
- [ ] make "NEW!" label searchable: filter doesn't pick it up as it is bc `this.dataSource.filter` filters `dataSource`, not the rendered table
- [ ] refactor: feed array from all diff activity-arrays and delete `contentsarray.json` (duplicate data!)
- [ ] duplicate code when getting data in each component > `onInit()`: into a class

Escape Room Component
- [ ] clean CSS
- [ ] unsubscribe?

Context Component
- [ ] use this in template, rather than the 2 hardcoded btns
  ```html
  <button *ngFor="let option of currentCard.options" class="option" id="btn-A"
    (click)="onClick(currentCard.options[0])" [disabled]="!hasItStarted">{{option}}
  </button>
  ```
- adjust checking & calculation of answers/results
- [ ] review

Story Puzzle Component
- [ ] finish review

rewrite Random Questions C1 (Timed Cards)

set up a preview in Instructions Modals
- [x] Timed Cards
- [x] Cards
- [ ] Escape Room
- [x] Board Game
- [ ] Reword
