# Rails寺子屋
[![Build Status](https://travis-ci.org/terakoya/rails.terakoya.io.png?branch=master)](https://travis-ci.org/terakoya/rails.terakoya.io)

[rails.terakoya.io](http://rails.terakoya.io)

## Setup

``` sh
$ git clone git@github.com:terakoya/rails.terakoya.io.git
$ cd rails.terakoya.io
$ bundle install
```

## Boot

``` sh
$ bundle exec middleman server
```

## Manual build and publish

``` sh
$ git pull --rebase origin master
$ bundle exec middleman build
$ bubdle exec middleman deploy
```
