define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/<%= this.dirPath %>/<%=this.name%>.html'
], function ($, _, Backbone, <%= _.classify(name) %>template) {

    var <%= _.classify(name) %>View = Backbone.View.extend({
        template: _.template(<%= _.classify(name) %>template),
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
