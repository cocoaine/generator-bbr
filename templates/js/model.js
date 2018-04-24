define([
    'underscore',
    'backbone'
], function(_, Backbone) {

    'use strict';

    var <%= _.classify(lastName) %>Model = Backbone.Model.extend({
        defaults: {}
    });

    return <%= _.classify(lastName) %>Model;
});
