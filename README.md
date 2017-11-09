# ViewProviderDemo

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.5.0.

This example demonstrates the use of viewProviders array in Angular

the following hierarchy is built:

```ts
<tab-container>
  <tab><log></log></tab>
  <tab><log></log></tab>
  <tab><log></log></tab>
</tab-container>
```

`TabComponentContainer` overrides the provider for TabContainerService but ONLY for components in its template. This means, that if TabContainer or it's children require TabContainerService, they still get the original one.

`LogComponent` is used to demonstrate. Imagine we use LogComponent inside `<tab>` as seen in the example above. `LogComponent` is now dependent on the providers of `TabComponent`. Since `TabComponentContainer` used `viewProviders`, only the first `LogComponent` gets the specific provider.

```html
log: specific
log: default
log: default
log: default
```


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
