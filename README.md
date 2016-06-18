# AngularJS-AirBooking
Simple AngularJS Web application which uses AngularJS-Boilerplate to kick start new project with SASS support and Gulp watch/build tasks

## Clone and run a demo
```bash
git clone https://github.com/pmvcaqr/airBooking.git
```

```bash
npm install && bower install
```
- install all npm and bower dependencies

```bash
gulp
```
- Run project on local machine.

```bash
gulp build
```
- Bundle project for delivery (minify sources).

## Features
- Angular-UIBoostrap.
- TemplateCache.
- Gulp modules for prepare sources, compile, minify. 

**Note:** If `npm install` fails during dependency installation it will be likely caused by `gulp-imagemin`. In that case remove `gulp-imagemin` dependency from `package.json`, run `npm install` again and then install `gulp-imagemin` separately with following command: `npm install gulp-imagemin --save-dev`
