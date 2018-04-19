define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates<%= dirPath %>/<%= name %>.html'
], function ($, _, Backbone, <%= _.classify(name) %>template) {

    var <%= _.classify(name) %>View = Backbone.View.extend({
        template: _.template(<%= _.classify(name) %>Template),
        events: {},
        initialize: function () {
        },
        render: function () {
            this.$el.html(this.template());
            return this;
        }
    });

    return <%= _.classify(name) %>View;

});
