'use strict';
var React = require('react');
var ReactPropTypes = React.PropTypes;
var IngredientItem = require('./IngredientItem.react');

var MainSection = React.createClass({
  propTypes: {
    allIngredients: ReactPropTypes.object.isRequired
  },

  render: function () {
    if(Object.keys(this.props.allIngredients).length < 1){
      return null;
    }

    var allIngredients = this.props.allIngredients;
    var ingredients = [];

    for (var key in allIngredients){
      ingredients.push(<IngredientItem key={key} ingredient={allIngredients[key]} />);
    }
    return (
      <section id="main">
        <ul id="ingredient-list">{ingredients}</ul>
      </section>
    )
  }
});

module.exports = MainSection;
