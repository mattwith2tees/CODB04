
// call of duty external URL
var requestURL = 'https://my.callofduty.com/api/papi-client/crm/cod/v2/title/bo4/platform/xbl/gamer/LicensedV1P3R/profile/type/mp';
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
  populateWeeklyStats(returnData);
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


function populateModeStats(jsonObj) {

}

function populateWeeklyStats(jsonObj) {

/////////////// vv DEPRECATED vv ////////////////////
  // create dictionary to store weekly data
  // var weeklyData = {};
  // weeklyData['TotalXP'] = weeklyStats['totalXp'];
  // weeklyData['TimePlayed'] = weeklyStats['timePlayed'];
  // weeklyData['Wins'] = weeklyStats['wins'];
  // weeklyData['Losses'] = weeklyStats['losses'];
  // weeklyData['Kills'] = weeklyStats['kills'];
  // weeklyData['Deaths'] = weeklyStats['deaths'];
  // weeklyData['KDRatio'] = weeklyStats['kdRatio'];
  // weeklyData['EKIA/DeathRatio'] = weeklyStats['ekiadRatio'];
  // weeklyData['EKIA'] = weeklyStats['ekia'];
///////////////  ^^ DEPRECATED ^^ ////////////////////


  // access object for weekly stats
  var weeklyStats = jsonObj['data']['mp']['weekly']['all'];


  var TotalXP = weeklyStats['totalXp'] + 'xp';
  var TimePlayed = weeklyStats['timePlayed'] + 'm';
  var Wins = weeklyStats['wins'];
  var Losses = weeklyStats['losses'];
  var Kills = weeklyStats['kills'];
  var Deaths = weeklyStats['deaths'];
  var KDRatio = weeklyStats['kdRatio'];
  var EKIA_DeathRatio = weeklyStats['ekiadRatio'];
  var EKIA = weeklyStats['ekia'];

  document.getElementById('totalXp').innerHTML = TotalXP;
  document.getElementById('timePlayed').innerHTML = TimePlayed;
  document.getElementById('wins').innerHTML = Wins;
  document.getElementById('losses').innerHTML = Losses;
  document.getElementById('kills').innerHTML = Kills;
  document.getElementById('deaths').innerHTML = Deaths;
  document.getElementById('kdRatio').innerHTML = KDRatio;
  document.getElementById('ekiadRatio').innerHTML = EKIA_DeathRatio;
  document.getElementById('ekia').innerHTML = EKIA;
}