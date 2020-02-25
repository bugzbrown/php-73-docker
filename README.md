# PHP 73 DOCKER

This is a starter repository for a simple docker compose that creates a LAMP Stack for local development.

> **THIS IS CURRENTLY UNDER DEVELOPMENT AND WILL NOT WORK**
>
> you are free to contribute/clone and modify this to suit your needs

It is based on this repository: https://github.com/sprintcube/docker-compose-lamp.git and adjusted to suit my workflow and organization for local projects.

## REQUIREMENTS

    - nodejs 10+
    - docker


## Docs

### Introduction

The idea behind this is to quickly get up and running with a local environment. It simplifies commands for setting up, running and shutting down the docker based environment.

### getting started

- Clone the repository
- cd into the directory and run:

```bash
yarn install
```

or if you use NPM

```bash
npm install
```

Then run the setup command:

```bash
yarn setup
```


```bash
npm run setup
```

Answer the prompts and be happy.

### exposed commands

For brevity I will only use yarn commands here in the docs, but if you prefer to work with NPM, you can simply replace `yarn` for `npm run` in the examples below.

#### setup

This is the initial setup - it asks you details you need to configure
in your environment and sets up a `.env` file for you. This file is
required by the docker environment to setup you containers.

```bash
yarn setup
```

#### boot

Boot up the instance. This will bootup the docker images.

```bash
yarn boot
```

#### boot:watch

Boot up the instance withou setting it to background mode. This way you can look at outputs directly on your stdout.

```bash
yarn boot
```

#### reboot

Reboot the instance. Because sometimes, you just gotta reboot.

```bash
yarn reboot
```

#### rebuild

Build the images for your container. Should only be run once, but everytime you make structural changes, you need to run this.

```bash
yarn rebuild
```


> shell.web
> shell.db
> shell.redis
> shutdown

