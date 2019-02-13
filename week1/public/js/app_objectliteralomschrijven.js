// object literal



// router

function routeOverview() {
  var route = '/';
  getData('overview');
  parseData();
  storeData();
  renderOverview();
}
console.log(route); // error

function routeDetail(id) {
  var route = '/#' + id;
  getData('detail', id);
}

var router = {
  router: '/';
  overview: function(){

  },

  detail: function(id){

  };

};

// api

var arr = [1,2,3];

var api = {
  // one:1, two:2, three:3, four:function(){};
  get: function(route){
    // stap 3
    // fetch data form api

    this.parse(response); // this == api
    this.store();
    this.overview();
  },
  parse: function(response) {
    // stap 4
    // response omzetten naar data
    this.store(data);
  },
  store: function(){

  },
  filter: function(){

  }

};

function getData(route) {

}

function parseData() {

}

function filterData() {

}

function storeData() {

}

// render

var render = {
  overview: function(){},
  detail:function(){}
};

function renderOverview() {

}

function renderDetail() {

}

function toggle() {

}


"use strict";

var http = new XMLHttpRequest();
var url = "https://api.giphy.com/v1/gifs/search?q=tree&api_key=JbB7Jd0sog3jHtYdb3woTkONWQYNSTfp&limit=50";


http.open("GET", url);
http.send();


http.onreadystatechange = function() {
  if (http.readyState == 4 && http.status == 200) {
    var data = JSON.parse(http.responseText);

    var imgresults = document.querySelector('#imgresults');

    for (var i = 0; i < data.data.length; i++) {

      var image = document.createElement('img');
      image.setAttribute('src', 'https://media.giphy.com/media/' + data.data[i].id + '/giphy.gif');
      imgresults.appendChild(image);



      // document.querySelector('#gif1').innerHTML = "<img src=\"https:\/\/media.giphy.com\/media\/" + data.data[0].id + "/giphy.gif\" alt=\"gif1\"/>";
      // document.querySelector('#gif2').innerHTML = "<img src=\"https:\/\/media.giphy.com\/media\/" + data.data[1].id + "/giphy.gif\" alt=\"gif2\"/>";
      // document.querySelector('#gif3').innerHTML = "<img src=\"https:\/\/media.giphy.com\/media\/" + data.data[2].id + "/giphy.gif\" alt=\"gif3\"/>";
      // document.querySelector('#gif4').innerHTML = "<img src=\"https:\/\/media.giphy.com\/media\/" + data.data[3].id + "/giphy.gif\" alt=\"gif4\"/>";
      // document.querySelector('#gif5').innerHTML = "<img src=\"https:\/\/media.giphy.com\/media\/" + data.data[4].id + "/giphy.gif\" alt=\"gif5\"/>";
    }
  }
}

document.addEventListener('submit', function(e){

  e.preventDefault();

});

(async function () {

  document.getElementById('submit').onclick = function() {

    console.log('PROOP');

    var searchword = document.getElementById('searchword').value;
    url = "https://api.giphy.com/v1/gifs/search?q=" + searchword + "&api_key=JbB7Jd0sog3jHtYdb3woTkONWQYNSTfp&limit=50";

    var search = new XMLHttpRequest();

    search.open("GET", url);
    search.send();

    search.onreadystatechange = function() {
      if (search.readyState == 4 && search.status == 200) {
        var searchdata = JSON.parse(search.responseText);

        document.querySelector('#imgresults').innerHTML = "";

        for (var i = 0; i < searchdata.data.length; i++) {

          console.log(i);
          var image = document.createElement('img');
          image.setAttribute('src', 'https://media.giphy.com/media/' + searchdata.data[i].id + '/giphy.gif');
          imgresults.appendChild(image);
        }

      }
    }
  }
})();
