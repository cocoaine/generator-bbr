define([
    'jquery',
    'underscore',
    'backbone',
    'text!template<%= dirPath %>/<%= name %>.html'
], function ($, _, Backbone, <%= _.classify(lastName) %>Template) {

    var <%= _.classify(lastName) %>View = Backbone.View.extend({
        template: _.template(<%= _.classify(lastName) %>Template),
        events: {},
        initialize: function () {
        },
        render: function () {
            this.$el.html(this.template());
            return this;
        }
    });

    return <%= _.classify(lastName) %>View;

});
