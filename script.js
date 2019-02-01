
// call of duty external URL
var requestURL = 'https://my.callofduty.com/api/papi-client/crm/cod/v2/title/bo4/platform/xbl/gamer/jsteavens/profile/type/mp';
var request = new XMLHttpRequest();


// // new dictionary that stores gamemode data i.e. safeguard, tdm, domination, kill confirmed, etc
// var modeData = {};
// // access object that stores each mode
// var modeStats = jsonObj['data']['mp']['lifetime']['mode'];

// // safeguard mode stats
// var safeguard = modeStats['escort'];
// modeData['totalTimePlayed'] = safeguard['timePlayedTotal'];
// modeData['Score'] = safeguard['objectiveScore'];
// modeData['Wins'] = safeguard['wins'];
// modeData['Losses'] = safeguard['losses'];
// modeData['W/L'] = safeguard['wlratio'];
// modeData['Kills'] = safeguard['kills'];
// modeData['Deaths'] = safeguard['deaths'];
// modeData['K/D'] = safeguard['kdratio'];

// // team deathmatch mode stats
// var tdm = modeStats['tdm'];
// modeData['totalTimePlayed'] = tdm['timePlayedTotal'];
// modeData['Score'] = tdm['objectiveScore'];
// modeData['Wins'] = tdm['wins'];
// modeData['Losses'] = tdm['losses'];
// modeData['W/L'] = tdm['wlratio'];
// modeData['Kills'] = tdm['kills'];
// modeData['Deaths'] = tdm['deaths'];
// modeData['K/D'] = tdm['kdratio'];


request.open('GET', requestURL);
request.responseType = 'json';
request.send();


request.onload = function() {
  var returnData = request.response;
  populateHeader(returnData);
  populateAllTimeStats(returnData);
}



function populateHeader(jsonObj) {
  // rank / level of player
  var level = jsonObj['data']['mp']['level'];

  // prestige level
  var prestige = jsonObj['data']['mp']['prestige'];

  // get username
  var username = jsonObj['data']['username'];

  document.getElementById("intro").innerHTML = 'Lvl: ' + level + "<br>" + 'Prstg: ' + prestige;

  document.getElementById('gamertag').innerHTML = username;
}


function populateAllTimeStats(jsonObj) {

/////////////// vv DEPRECATED vv //////////////////// 
  // create dictionary to store key data from external URL, allows for easier access to objects later on
  // var keyData = {};
  // access object for all-time stats
  // // lifetime stats through all game modes
  // keyData['CareerScore'] = allStats['careerScore'];
  // keyData['EKIA'] = allStats['ekia']; 
  // keyData['Kills'] = allStats['kills'];
  // keyData['Deaths'] = allStats['deaths'];
  // keyData['EKIA/Game'] = allStats['ekiaPerGame'];
  // keyData['EKIA/DeathRatio'] = allStats['ekiadRatio'];
  // keyData['KDRatio'] = allStats['kdRatio'];
  // keyData['Accuracy'] = allStats['accuracy'];
  // keyData['Wins'] = allStats['wins'];
  // keyData['Losses'] = allStats['losses'];
/////////////// ^^ DEPRECATED ^^ ////////////////////

  var allStats = jsonObj['data']['mp']['lifetime']['all'];

  var careerScore = allStats['careerScore'] + 'xp';
  var ekia = allStats['ekia']; 
  var kills = allStats['kills'];
  var deaths = allStats['deaths'];
  var ekiagame = allStats['ekiaPerGame'];
  var ekiadratio = allStats['ekiadRatio'];
  var kdratio = allStats['kdRatio'];
  var accuracy = allStats['accuracy'];
  var wins = allStats['wins'];
  var losses = allStats['losses'];

  document.getElementById('careerScore').innerHTML = careerScore;
  document.getElementById('all_ekia').innerHTML = ekia ;
  document.getElementById('all_kills').innerHTML = kills;
  document.getElementById('all_deaths').innerHTML = deaths;
  document.getElementById('all_ekiaPerGame').innerHTML = ekiagame;
  document.getElementById('all_ekiadRatio').innerHTML = ekiadratio;
  document.getElementById('all_kdRatio').innerHTML = kdratio;
  document.getElementById('all_accuracy').innerHTML = accuracy;
  document.getElementById('all_wins').innerHTML = wins;
  document.getElementById('all_losses').innerHTML = losses;  

}

function populateModeStats(jsonObj) {

}

