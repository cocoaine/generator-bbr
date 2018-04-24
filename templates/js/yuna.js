define([
    'jquery',
    'underscore',
    'view/yuna',
    'view/view_model<%= dirPath %>/<%= name %>',
    'text!template<%= dirPath %>/<%= name %>.html'
], function ($, _, YunaView, <%= _.classify(lastName) %>ViewModel, <%= _.classify(lastName) %>Template) {

    'use strict';

    var <%= _.classify(lastName) %>View = YunaView.extend({
        viewModel: <%= _.classify(lastName) %>ViewModel,
        template: _.template(<%= _.classify(lastName) %>Template),
        events: {},
        init: function () {
        },
        render: function () {
            this.$el.html(this.template());
            return this;
        }
    });

    return <%= _.classify(lastName) %>View;

});
