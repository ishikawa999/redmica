# RedMica - the future Redmine you can get today

RedMica is yet another distribution of [Redmine](https://www.redmine.org/), a great open source project management software.

The main aim of RedMica is to quickly deliver new Redmine features that have already been in the repository but have not yet been officially released. We, Far End Technologies Corporation, are using RedMica in our Redmine hosting service [My Redmine](https://hosting.redmine.jp/).


## RedMica Advantages

* Early access to new features of Redmine: Delivers very new features that have not yet been officially released in Redmine
* Compatible with Redmine: You can migrate from Redmine and vice versa
* Time-based release: Major updates are made every 6 months


## More details

RedMica is fully compatible with Redmine. You can check more details on the official website of Redmine: https://www.redmine.org/

* [Redmine guide](https://www.redmine.org/projects/redmine/wiki/Guide)
  * [Installation guide](https://www.redmine.org/projects/redmine/wiki/Installation_Guide)
  * [Administrator guide](https://www.redmine.org/projects/redmine/wiki/Administrator_Guide)
  * [User guide](https://www.redmine.org/projects/redmine/wiki/User_Guide)
  * [Developer guide](https://www.redmine.org/projects/redmine/wiki/Developer_Guide)
    * [Redmine API](https://www.redmine.org/projects/redmine/wiki/Rest_api)

## Quickly launch RedMica trial environment with Docker

You can use Docker to quickly set up a RedMica environment for a trial.

1. Uncompress the program archive
2. Build a Docker image by running:  
  `docker build -t redmica_trial .`
3. Launch RedMica in a new Docker container by running:  
  `docker run -p 3000:3000 -e RAILS_ENV=production redmica_trial`  
  Once RedMica has started, point your browser to http://localhost:3000/  
  You should now see the application welcome page.
4. Delete the container and image after have played with RedMica:  
  `docker container rm CONTAINER_ID`  
  `docker image rm redmica_trial`

## Maintainer

[Far End Technologies Corporation](https://www.farend.co.jp/)

RedMica is licensed under GNU General Public License v2.0 (GPLv2). Copyright (C) Jean-Philippe Lang, Far End Technologies Corporation, and contributors.
