'use strict';

var AppDispatcher = require('../dispatcher/AppDispatcher');
var _ = require('lodash');
var EventEmitter = require('events').EventEmitter;
var IngredientConstants = require('../constants/IngredientConstants');

var CHANGE_EVENT = 'change';

var _ingredients = {};

function add(ingredient) {
  _ingredients[ingredient.id] = {
    id: ingredient.id,
    name: ingredient.name
  };
}

function remove(id) {
  delete _ingredients[id];
}

var IngredientStore = _.extend({}, EventEmitter.prototype, {

  getAll: function (){
    return _ingredients;
  },

  emitChange: function (){
    this.emit(CHANGE_EVENT);
  },

  addChangeListener: function (callback){
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener: function(callback){
    this.remoteListener(CHANGE_EVENT, callback);
  },

  dispatcherIndex: AppDispatcher.register(function(payload){
    var action = payload.action;

    switch(action.actionType) {
      case IngredientConstants.INGREDIENT_ADD:
        add(action.ingredient);
        IngredientStore.emitChange();
        break;
      case IngredientConstants.INGREDIENT_REMOVE:
        remove(action.id);
        IngredientStore.emitChange();
        break;
    }
    return true;
  })
});

module.exports = IngredientStore;
