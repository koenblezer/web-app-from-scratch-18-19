var xhr = $.get("http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=JbB7Jd0sog3jHtYdb3woTkONWQYNSTfp&limit=5");

xhr.done(function(data) {
  console.log("success got data", data);
});
