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
      var myH1 = document.createElement('h1');
      myH1.textContent = 'Game: ' + jsonObj['data']['title'] + ' / username: ' + jsonObj['data']['username'] + ' / EKIA: ' + 
      jsonObj['data']['mp']['lifetime']['all']['ekia'] ;
      header.appendChild(myH1);
      // var myPara = document.createElement('p');
      // myPara.textContent = 'Hometown: ' + jsonObj['homeTown'] + ' // Formed: ' + jsonObj['formed'];
      // header.appendChild(myPara);
    }
    // function showHeroes(jsonObj) {
    //   var heroes = jsonObj['members'];
    //   for(var i = 0; i < heroes.length; i++) {
    //     var myArticle = document.createElement('article');
    //     var myH2 = document.createElement('h2');
    //     var myPara1 = document.createElement('p');
    //     var myPara2 = document.createElement('p');
    //     var myPara3 = document.createElement('p');
    //     var myList = document.createElement('ul');
    //     myH2.textContent = heroes[i].name;
    //     myPara1.textContent = 'Secret identity: ' + heroes[i].secretIdentity;
    //     myPara2.textContent = 'Age: ' + heroes[i].age;
    //     myPara3.textContent = 'Superpowers:';
    //     var superPowers = heroes[i].powers;
    //     for(var j = 0; j < superPowers.length; j++) {
    //       var listItem = document.createElement('li');
    //       listItem.textContent = superPowers[j];
    //       myList.appendChild(listItem);
    //     }
    //     myArticle.appendChild(myH2);
    //     myArticle.appendChild(myPara1);
    //     myArticle.appendChild(myPara2);
    //     myArticle.appendChild(myPara3);
    //     myArticle.appendChild(myList);
    //     section.appendChild(myArticle);
    //   }
    // }
