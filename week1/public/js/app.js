var http = new XMLHttpRequest();
var url = "https://api.giphy.com/v1/gifs/search?q=tree&api_key=JbB7Jd0sog3jHtYdb3woTkONWQYNSTfp&limit=50";


http.open("GET", url);
http.send();


http.onreadystatechange=function(){
    if(this.readyState==4 && this.status==200){
      // console.log(response);
      var data = JSON.parse(http.responseText);
      // console.log(data);

        var imgresults = document.querySelector('#imgresults');

        for (var i = 0; i < data.data.length; i++) {

        console.log(i);
        var image = document.createElement('img');
        image.setAttribute('src', 'https://media.giphy.com/media/'+ data.data[i].id + '/giphy.gif');
        imgresults.appendChild(image);



      // document.querySelector('#gif1').innerHTML = "<img src=\"https:\/\/media.giphy.com\/media\/" + data.data[0].id + "/giphy.gif\" alt=\"gif1\"/>";
      // document.querySelector('#gif2').innerHTML = "<img src=\"https:\/\/media.giphy.com\/media\/" + data.data[1].id + "/giphy.gif\" alt=\"gif2\"/>";
      // document.querySelector('#gif3').innerHTML = "<img src=\"https:\/\/media.giphy.com\/media\/" + data.data[2].id + "/giphy.gif\" alt=\"gif3\"/>";
      // document.querySelector('#gif4').innerHTML = "<img src=\"https:\/\/media.giphy.com\/media\/" + data.data[3].id + "/giphy.gif\" alt=\"gif4\"/>";
      // document.querySelector('#gif5').innerHTML = "<img src=\"https:\/\/media.giphy.com\/media\/" + data.data[4].id + "/giphy.gif\" alt=\"gif5\"/>";
    }
  }
}

search();

function search(){

  document.getElementById('submit').onclick = function() {

    var searchword = document.getElementById('searchword').value;
    url = "https://api.giphy.com/v1/gifs/search?q=" + searchword + "&api_key=JbB7Jd0sog3jHtYdb3woTkONWQYNSTfp&limit=50";

    search = new XMLHttpRequest();

    search.open("GET", url);
    search.send();

    search.onreadystatechange=function(){
        if(this.readyState==4 && this.status==200){
          // console.log(response);
          var searchdata = JSON.parse(search.responseText);
          // console.log(search.responseText);

          document.querySelector('#imgresults').innerHTML = "";

          for (var i = 0; i < searchdata.data.length; i++) {

          console.log(i);
          var image = document.createElement('img');
          image.setAttribute('src', 'https://media.giphy.com/media/'+ searchdata.data[i].id + '/giphy.gif');
          imgresults.appendChild(image);
      }

    }
  }
}

}
