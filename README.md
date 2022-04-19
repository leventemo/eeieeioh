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

- [ ] rename Header Component to Nav: <https://stackoverflow.com/questions/46411036/how-to-rename-a-component-in-angular-cli>

Hotel Check-in
- [x] install Faker-js: <https://fakerjs.dev/>
- [x] create check-in component
- [ ] set up routing for check-in: use id/slug
- [x] include it contents page
- [x] write out component template
- [x] write out component class



This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.2.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
