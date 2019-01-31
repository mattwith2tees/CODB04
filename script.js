var header = document.querySelector('header');
var section = document.querySelector('section');

var requestURL = 'https://my.callofduty.com/api/papi-client/crm/cod/v2/title/bo4/platform/xbl/gamer/LicensedV1P3R/profile/type/mp';
var request = new XMLHttpRequest();

request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function() {
  var superHeroes = request.response;
  populateHeader(superHeroes);
  // showHeroes(superHeroes);
}



function populateHeader(jsonObj) {
  // create dictionary to store key data from external URL, allows for easier access to objects later on
  var keyData = {};
  // access object for all-time stats
  var allStats = jsonObj['data']['mp']['lifetime']['all'];

  // lifetime stats through all game modes
  keyData['Username'] = jsonObj['data']['username'];
  keyData['CareerScore'] = allStats['careerScore'];
  keyData['EKIA'] = allStats['ekia']; 
  keyData['Kills'] = allStats['kills'];
  keyData['Deaths'] = allStats['deaths'];
  keyData['EKIA/Game'] = allStats['ekiaPerGame'];
  keyData['EKIA/DeathRatio'] = allStats['ekiadRatio'];
  keyData['KDRatio'] = allStats['kdRatio'];
  keyData['Accuracy'] = allStats['accuracy'];
  keyData['Wins'] = allStats['wins'];
  keyData['Losses'] = allStats['losses'];

// new dictionary that stores gamemode data i.e. safeguard, tdm, domination, kill confirmed, etc
  var modeData = {};
// access object that stores each mode
  var modeStats = jsonObj['data']['mp']['lifetime']['mode'];
  
  // safeguard mode stats
  var safeguard = modeStats['escort']
  modeData['totalTimePlayed'] = safeguard['timePlayedTotal'];
  modeData['Score'] = safeguard['objectiveScore'];
  modeData['Wins'] = safeguard['wins'];
  modeData['Losses'] = safeguard['losses'];
  modeData['W/L'] = safeguard['wlratio'];
  modeData['Kills'] = safeguard['kills'];
  modeData['Deaths'] = safeguard['deaths'];
  modeData['K/D'] = safeguard['kdratio'];



  


  var myH1 = document.createElement('h1');
  myH1.textContent = 'Safeguard wins = ' + modeData['wins'] + '!';
  header.appendChild(myH1);

}
