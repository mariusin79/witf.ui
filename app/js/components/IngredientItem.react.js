'use strict';
var React = require('react');
var ReactPropTypes = React.PropTypes;
var IngredientActions = require('../actions/IngredientActions');

var IngredientItem = React.createClass({
  propTypes: {
    ingredient: ReactPropTypes.object.isRequired
  },

  render: function () {
    var ingredient = this.props.ingredient;

    return (
      <li key={ingredient.id}>
        <div>{ingredient.name}</div>
        <button className="remove" onClick={this._onRemoveClick} />
      </li>
    );
  },

  _onRemoveClick: function () {
    IngredientActions.remove(this.props.ingredient.id);
  }
});

module.exports = IngredientItem;
