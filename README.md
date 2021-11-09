# DataStream Reader Emulator with Angular version 12.2.11 + NGRX + Angular Material

This project is to showcase how to consume and interact with a data-stream endpoint using Angular and NGRX to create a state Management solution.

Important: The "real-data stream service" is an emulation build-in on this project. It consists of a service that performs GET petitions by time intervals. 

## Demo

You can find a live demo here:
https://jogaj.github.io/angularDataStreamReader/

## Tech Stack

- Angular
- RGRX
- Angular Material

## Features

An Angular application to stream real time posts.

- Built-in service to emulate the real-data stream.
- Analytics statistics such as: Posts per second, total of post processed, total of likes process, oldest and newest post.
- Ability to filter data.
- Scroll panel with the list of post per request with Virtual Scroll (Angular CDK)

The application automatically will retrieve data from the API and also start collecting the statistics. When a filter is applied, the statistics are reset to collect the new information based on the filter.

## How to Run project locally
Download the code.
Open project and execute the command: 'npm install' or 'yarn install'
Additionally, execute command: 'ng serve'
Finally, open your browser in url: https://localhost:4200

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
