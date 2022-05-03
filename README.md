# Proto

## todos

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
- [ ] make header icon a link to Home
- [ ] generate contents table from data object rather than hard-code in template file?
- [ ] set up nav: <https://code-maze.com/angular-material-navigation/>
– [x] create About Component
– [x] create Home Component
- [x] create Contents Component
- [x] lottie: <https://stackoverflow.com/questions/56825421/install-lottie-player-to-angular>
* <https://lottiefiles.com/>
- [ ] customize typography: <https://material.angular.io/guide/typography>
- [ ] animation on active links in nav
- [ ] try global styles with CSS variables in `styles.css`
* primary color
* typography: `<h1`>, `<h2`>, `<a>` etc.

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
- [ ] snackbar: your message has been sent message
- [ ] lazy loading?
- [ ] sanitazion?

REDO
- [ ] create components folder?
- [ ] rename Header Component to Nav: <https://stackoverflow.com/questions/46411036/how-to-rename-a-component-in-angular-cli>
- [ ] rename Duel Component to Duels
- [ ] rename Contents Components to Activities (routing reasons)

Nav Component
- [ ] active link animated <https://codepen.io/cathydutton/pen/QWWajKX>

Hotel Check-in
- [x] install Faker-js: <https://fakerjs.dev/>
- [x] create check-in component
- [ ] set up routing: different to the other components!
- [x] include it contents page
- [x] write out component template
- [x] write out component class
- [ ] fix next btn -> reload
- [ ] rewrite vertical alignment of card elements with flexbox a lá card component?
- [ ] lazy loading to avoid a full reload when Next btn is pressed?

Cards component
- [x] first btn "Start"
- [x] load data from json in assets folder
- [x] routing params
- [ ] refactor so it works with routing params in `ngOnInit()`
- [x]  last btn "Finish" or "Again"
- [ ] progbar?
- [ ] info modal
- [ ] card prompts in an array so multiple lines can be rendered in template

Duel component
- [x] create component
- [x] routing
- [x] write out template
- [ ] write out class
- [ ] timer <https://codepen.io/cathydutton/pen/xxpOOw>
- [ ] deactivate text btns before "Start" is pressed
- [ ] manipulate RXJS subs with setTimeout():
<https://stackoverflow.com/questions/65193678/rxjs-using-first-with-timer>
<https://benlesh.medium.com/rxjs-dont-unsubscribe-6753ed4fda87>
- [ ] extra points for speed:
| Seconds | Points |
|:-------:|:------:|
|1        | 10 |
|2        | 9 |
|3        | 8 |
|4        | 7 |
|5        | 6 |
|6        | 5 |
|7        | 4 |
|8        | 3 |
|9        | 2 |
|10       | 1 |

Not Found Component
- [x] create component
- [x] set up routing
- [ ] find Pablita animated illustration

Contents Component
- [ ] set up routing with params
<https://www.youtube.com/watch?v=Np3ULAMqwNo> Fireship
<https://www.youtube.com/watch?v=qh5nHv-4aw0> Codevolution
<https://www.youtube.com/watch?v=DZrWzoW4_4M> Brian Lagunas
- [ ] routing params: <https://angular.io/guide/router>

pass data between components:
<https://www.youtube.com/watch?v=I317BhehZKM> Fireship
