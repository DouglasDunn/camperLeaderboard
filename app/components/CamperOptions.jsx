var React = require("react");

var CamperOptions = React.createClass({
  onButtonClick: function(e) {
    this.props.handleClick(e.target.id);

    document.getElementsByClassName("selected")[0].className = "";
    e.target.className = "selected";
  },
  render: function() {
    return (
      <div className="text-center">
        <button id="recent" className="selected" onClick={this.onButtonClick}>Most Points in 30 Days</button>
        <button id="alltime" onClick={this.onButtonClick}>All Time Points</button>
      </div>
    );
  }
});

module.exports = CamperOptions;
