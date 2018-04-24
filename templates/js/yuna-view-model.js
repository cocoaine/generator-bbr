define([
    'underscore',
    'backbone'
], function(_, Backbone) {

    'use strict';

    var <%= _.classify(lastName) %>ViewModel = Backbone.Model.extend({
        defaults: {}
    });

    return <%= _.classify(lastName) %>ViewModel;
});
