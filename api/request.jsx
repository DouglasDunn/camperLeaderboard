const URL = "https://fcctop100.herokuapp.com/api/fccusers/top/";

module.exports = {
  makeRequest: function(urlOption) {
    var camperLeaderboardRequest = new XMLHttpRequest();

    if (urlOption === "recent") {
      camperLeaderboardRequest.open("GET", URL + "recent");
    } else {
      camperLeaderboardRequest.open("GET", URL + "alltime");
    }

    camperLeaderboardRequest.send();
    return camperLeaderboardRequest;
  }
}
