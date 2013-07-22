# Rails寺子屋

[rails.terakoya.io](http://rails.terakoya.io)

## Setup

``` sh
$ git clone git@github.com/terakoya/rails.terakoya.io.git
$ cd rails.terakoya.io
$ bundle install
```

## Boot

``` sh
$ bundle exec middleman server
```

## Manual build and publish

``` sh
$ rake build # bundle exec middleman build
$ rake publish # git commit && git push origin gh-pages
```
