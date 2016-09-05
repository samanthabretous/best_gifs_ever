function loadGifs(response){
    var gifs = document.querySelector('.gifs');

    //create element to place random gif
    var imageDiv = document.createElement('div');
    var image = document.createElement('img');

    //set the image src to the ajax response
    var imageUrl = response.data.fixed_width_downsampled_url;
    image.setAttribute('src', imageUrl)

    //append image to page
    imageDiv.appendChild(image)
    gifs.appendChild(imageDiv)

}


//AJAX REQUEST 
function ajaxCall(){
  var ajaxUrl = 'http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=american+psycho';
  var request = new XMLHttpRequest();
  request.open('GET', ajaxUrl, true);

  request.onload = function() {
    if (request.status >= 200 && request.status < 400) {
      // Success!
      var resp = JSON.parse(request.responseText);
      console.log(resp)
      loadGifs(resp)
    } else {
      // We reached our target server, but it returned an error
      console.log(err)
    }
  };
  request.send();
}

//load images
for (var i = 0; i < 5; i++) ajaxCall()







