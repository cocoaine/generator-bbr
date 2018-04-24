define([
    'underscore',
    'backbone',
    'model/temp_model'
], function(_, Backbone, TempModel) {

    'use strict';

    var <%= _.classify(lastName) %>Collection = Backbone.Collection.extend({
        model: TempModel
    });

    return <%= _.classify(lastName) %>Collection;
});
