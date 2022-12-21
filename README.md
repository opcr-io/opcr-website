# OPCR Website

This is the source repo for the Open Policy Containers (OPCR) [landing page](https://opcr.io) and documentation site.

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

## Installation

```
$ yarn
```

## Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

## Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Deployment

The main branch is built and deployed with Netlify to https://openpolicyregistry.io.

## Contributions

To contribute a change, open a PR against the main branch. Once merged, it will automatically be deployed.

## Algolia search

`scripts/scrape.sh` contains a script that scrapes the doc site to an Algolia account. 

From the room directory of the project, run:

```
$ yarn scrape
```