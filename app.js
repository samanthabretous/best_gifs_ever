function loadGifs(response){
  console.log(response)
  var image = document.querySelector('.test')
  image.setAttribute('src', 'www.reddit.com')
  console.log(image)
}


//AJAX REQUEST 
var ajaxUrl = 'http://api.giphy.com/v1//random?api_key=dc6zaTOxFJmzC&tag=american+psycho';
var request = new XMLHttpRequest();
request.open('GET', ajaxUrl, true);

request.onload = function() {
  if (request.status >= 200 && request.status < 400) {
    // Success!
    var resp = request.responseText;
    loadGifs(resp)
  } else {
    // We reached our target server, but it returned an error
    console.log(err)
  }
};

request.send();