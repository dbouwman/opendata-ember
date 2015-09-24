# opendata-ember
A sample application demonstrating how an open data site might be built against the Open Data API using ember-cli.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM)
* [Bower](http://bower.io/)
* [Ember CLI](http://www.ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Installation

* `git clone git@github.com:mjuniper/opendata-ember.git` this repository
* `cd opendata-ember`
* `npm install`
* `bower install`

## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying to gh-pages

To deploy to the gh-pages branch of your origin:

`./deploy.sh`

### Deploy to S3

Create a aws.json file in the root (this is .gitignor-ed), with this structure

```
{
  "s3": {
    "key": "YOUR_KEY",
    "secret": "YOUR_SECRET",
    "bucket": "YOUR_BUCKET_NAME"
  }
}

```

Then...

`ember deploy:s3 `
