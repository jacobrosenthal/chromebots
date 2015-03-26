'use strict';

const React = require('react');
const ActionBar = require('./action');

function appbar(app, opts, done){
  app.view('appbar', function(el, cb){

    var Component = (
      <ActionBar/>
    );

    React.render(Component, el, cb);
  });

  return done();
}

module.exports = appbar;
