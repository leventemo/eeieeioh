# eeieeioh

## todos
Project-level
- [x] set up Angular
- [x] set up Angular Material: custom theme
- [x] create material module
- [x] set up favicon using `logo.svg`: too small
- [x] set up branding using `logo.svg` + size it with CSS
- [ ] register `logo.svg` as `<mat-icon>`
* <https://material.angular.io/components/icon/overview/>
* <https://www.positronx.io/angular-material-8-icons-tutorial-with-real-world-examples/>
- [x] colour palette: primary, accent, warn
- [ ] colour palette: background, etc.
- [ ] colour palette: more palettes? – <https://stackoverflow.com/questions/52373852/angular-theme-with-more-than-3-colors>
- [x] create header & footer components
- [x] make footer icon a link to Home
- [x] make header icon a link to Home
- [ ] set up nav: <https://code-maze.com/angular-material-navigation/>
- [x] lottie: <https://stackoverflow.com/questions/56825421/install-lottie-player-to-angular>
* <https://lottiefiles.com/>
- [ ] customize typography: <https://material.angular.io/guide/typography>
- [ ] animation on active links in nav
- [ ] try global styles with CSS variables in `styles.css`
* primary color
* typography: `<h1`>, `<h2`>, `<a>` etc.
- [x] try serving illustrations locally, rather than from assets links
Angular maintainance: <https://javascript.plainenglish.io/creating-a-new-angular-project-here-is-what-you-need-to-do-71ba08587b1d>
- [ ] CSS resets
- [ ] polifills
- [ ] noscript
- [ ] testing
- [ ] page transition/router animations: <https://www.youtube.com/watch?v=7JA90VI9fAI>
- [ ] check accessibility concerns for lottie files:
<https://github.com/airbnb/lottie-web/issues/1935>

test favicon on desktop browsers
- [x] Firefox tab
- [ ] Firefox bookmark
- [x] Chrome tab
- [x] Chrome bookmark
- [x] Opera tab
- [x] Opera bookmark
- [ ] Edge tab
- [ ] Edge bookmark

- [ ] repleace logo in nav & footer with cropped version of svg & resize-reposition

Header Component

Footer Component redo:
  eeieeioh
  - [x] about
  - [x] abbreviations
  - [x] guide to activities
  - [x] changelog
  - [x] roadmap

  social
  - [ ] contact
  - [ ] twitter eeieeioh
  - [x] app development & content by @leventemo
  - [x] logo design by József Balogh
  - [ ] patreon
  - [ ] buy me a coffee

  fave links
  - [ ] dictionaries: html done
  - [ ] corpus: html done
  - [ ] video

  copyright + logo: full-width col

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
- [ ] get rid of duplicate mat-card css in `contact.component.css` & `cards.component.css`
- [ ] get rid of duplicate h1 css in `contact.component.css` & `about.component.css`
- [x] typography in form: set it to custom typogr.
- [ ] redo responsive layout & styling a la Cards, which has changed
- [ ] snackbar: your message has been sent message
- [ ] lazy loading?
- [ ] sanitazion?
- [x] automatic scroll to top on click of "Contact" btn (important on mobile screens)
- [ ] how to email with vercel+gmail <https://drew.tech/posts/how-to-send-email-with-vercel-domain-through-gsuite>
- [ ] check out <httpmailerlite.com>

REDO
- [ ] create components folder?
- [ ] rename Header Component to Nav: <https://stackoverflow.com/questions/46411036/how-to-rename-a-component-in-angular-cli>
- [ ] rename Contents Components to Activities (routing reasons)

Nav Component
- [ ] rename to Nav

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

Cards component
- [x] first btn "Start"
- [x] load data from json in assets folder
- [x] routing params
- [x] info modal
- [ ] card prompts in an array so multiple lines can be rendered in template
- [x] add "Done" Pablita illustration to Cards

Pelmalism Component
* see notes in eeieeioh/Pelmalism.md

Timed-Cards Component
* FOR:
- [x]Yes-No Game
- [x] Exam Qns
- [ ] Talking about ...
- [ ] Just a minute
- [ ] Vocab Race activities, eg. Prep of Movement, etc – see EF

Duel component


Reword Component
- [ ] refactor counter with active & disabled classes
- [ ] make only one counter active at a time (use currentPLayer variable)
- [ ] add `hasClueBeenClicked` flag to restrict scoring: if so, you can only give 1 point of the 2 max
- [ ] add "Done" Pablita illustration

Not Found Component
- [x] create component
- [x] set up routing
- [x] find Pablita animated illustration

Contents Component
- [ ] filter doesn't pick up the inserted word "new!" as it is bc `this.dataSource.filter` filters `dataSource`, not the rendered table

Changelog Component
- [ ] set up sort on init

Escape Room Component
- [x] set up routing
- [x] set up dialog
- [x] set up data
- [x] set up CSS
- [ ] clean CSS
- [x] set up form & avg time
- [x] RxJS
- [ ] unsubscribe?


