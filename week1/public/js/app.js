var http = new XMLHttpRequest();
var url = "http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=JbB7Jd0sog3jHtYdb3woTkONWQYNSTfp&limit=1";

http.open("GET", url);
http.send();

http.onreadystatechange=function(){
    if(this.readyState==4 && this.status==200){
      var response = http.responseText;
      console.log(response);
      var data = JSON.parse(response);
      console.log(data);
      document.querySelector('.gif').innerHTML = "<img src=" + data.data[0].embed_url + "\" alt=\"gif\">/";
  }
}
