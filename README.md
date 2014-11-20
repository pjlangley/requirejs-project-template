# RequireJS project template

This is a pseudo AMD JavaScript application, using RequireJS as the modular dependency manager. 
This template was built as a demonstrative example, in order to establish the capabilities of 
RequireJS.

I've also included a production build version of the JavaScript through the RequireJS optimizer + 
almond.js, in order to eliminate the AMD overhead that was no longer required.

## Setup Instructions

This uses node.js for the web server, so you'll need node.js installed on your machine. It also 
uses GruntJS to build the production ready JavaScript - so make sure GruntJS is also installed on
 your machine. Once you've got these dependencies, follow the simple instructions:

1. `cd` into this directory and `npm install`
2. run `node app.js`
3. `cd` into `grunt` and `npm install`
4. go to `http://localhost:3000` in the browser

### Run a Grunt JS build

If you want to run a production build of the JavaScript modules:

1. `cd` into `grunt`
2. run `grunt requirejs`
3. Ensure you uncomment the production JS file inside of `view/index.jade` (`script
(src="/assets/js/prod/prod-almond.js")`)
