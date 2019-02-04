var Http = new XMLHttpRequest();
var url = "http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=JbB7Jd0sog3jHtYdb3woTkONWQYNSTfp&limit=5";

Http.open("GET", url);
Http.send();

Http.onreadystatechange=function(){
    if(this.readyState==4 && this.status==200){
      var response = Http.responseText;
      console.log(response);
      gif.innerHTML
  }
}
