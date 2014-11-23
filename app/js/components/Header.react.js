'use strict';
var React = require('react');
var IngredientActions = require('../actions/IngredientActions');
var IngredientTextInput = require('./IngredientTextInput.react');

var Header = React.createClass({
  render: function () {
    return (
      <header id="header">
        <h1>ingredients</h1>
        <IngredientTextInput
          id="add-ingredient"
          placeholder="Skriv inn ingrediens"
          onSave={this._onSave}
        />
      </header>
    )
  },

  _onSave: function (ingredientName) {
    if (ingredientName.trim()) {
      IngredientActions.add({id: new Date(), name: ingredientName})
    }
  }
});

module.exports = Header;
