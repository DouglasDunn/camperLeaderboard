var React = require("react");
var request = require("request");
var CamperOptions = require("CamperOptions");
var CamperTable = require("CamperTable");

var Camper = React.createClass({
  handleStateChange: function(urlOption) {

    if (!urlOption) {
      urlOption = "recent"
    }

    var that = this;
    var camperLeaderboardRequest = request.makeRequest(urlOption);

    camperLeaderboardRequest.onreadystatechange = function() {

      if (camperLeaderboardRequest.readyState === 4) {

        if (camperLeaderboardRequest.status === 200) {

          var camperLeaderboardResponse = JSON.parse(camperLeaderboardRequest.responseText);

          that.setState({
            camperLeaderboardResponse: camperLeaderboardResponse
          });
        } else {
          throw new Error(camperLeaderboardRequest.statusText);
        }
      }
    }

    return "loading...";
  },
  getInitialState() {
    return {
      camperLeaderboardResponse: this.handleStateChange()
    };
  },
  render: function() {
    var camperLeaderboardResponse = this.state.camperLeaderboardResponse;

    if (typeof camperLeaderboardResponse === "string") {
      return (
        <div>
          <p id="loading" className="text-center">loading...</p>
        </div>
      );
    } else {
      return (
        <div>
          <h1 className="text-center">Camper Leaderboard</h1>
          <CamperOptions handleClick={this.handleStateChange}/>
          <CamperTable camperLeaderboardResponse={camperLeaderboardResponse}/>
        </div>
      );
    }
  }
});

module.exports = Camper;
