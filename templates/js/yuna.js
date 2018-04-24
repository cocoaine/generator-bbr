define([
    'jquery',
    'underscore',
    'backbone',
    'view/view_model<%= dirPath %>/<%= name %>',
    'text!template<%= dirPath %>/<%= name %>.html'
], function ($, _, YunaView, <%= _.classify(lastName) %>ViewModel, <%= _.classify(lastName) %>Template) {

    'use strict test';

    var <%= _.classify(lastName) %>View = YunaView.extend({
        viewModel: <%= _.classify(lastName) %>ViewModel,
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
