'use strict';
var React = require('react');
var Header = require('./Header.react');
var MainSection = require('./MainSection.react');
var IngredientStore = require('../stores/IngredientStore');

function getIngredientState() {
  return {
    allIngredients: IngredientStore.getAll()
  };
}
var PingPongApp = React.createClass({
  getInitialState: function () {
    return getIngredientState();
  },

  componentDidMount: function () {
    IngredientStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function () {
    IngredientStore.removeChangeListener(this._onChange);
  },

  render: function () {
    return (
      <div>
        <Header />
        <MainSection allIngredients={this.state.allIngredients} />
      </div>
    )
  },

  _onChange: function (){
    this.setState(getIngredientState());
  }
});

module.exports = PingPongApp;
