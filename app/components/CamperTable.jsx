var React = require("react");

var CamperTable = React.createClass({
  render: function() {
    var camperLeaderboardResponse = this.props.camperLeaderboardResponse;
    var count = 0;

    var campers = camperLeaderboardResponse.map(function(camper) {
      return (
        <tr key={camper.username}>
          <td>{++count}</td>
          <td><a href={"http://www.freecodecamp.com/" + camper.username} target="_blank"><img src={camper.img}/>{camper.username}</a></td>
          <td>{camper.recent}</td>
          <td>{camper.alltime}</td>
        </tr>
      );
    });

    return (
      <div id="table">
        <table className='table table-bordered'>
          <thead>
            <tr>
              <th>Rank</th>
              <th>User</th>
              <th>Points in the last 30 Days</th>
              <th>All Time Points</th>
            </tr>
          </thead>
          <tbody>
            {campers}
          </tbody>
        </table>
      </div>
    );
  }
});

module.exports = CamperTable;
