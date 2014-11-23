'use strict';
var AppDispatcher = require('../dispatcher/AppDispatcher');
var IngredientConstants = require('../constants/IngredientConstants');

var IngredientActions = {
  add: function(ingredient){
    AppDispatcher.handleViewAction({
      actionType: IngredientConstants.INGREDIENT_ADD,
      ingredient: ingredient
    });
  },

  remove: function(id){
    AppDispatcher.handleViewAction({
      actionType: IngredientConstants.INGREDIENT_REMOVE,
      id: id
    });
  }
};

module.exports = IngredientActions;
