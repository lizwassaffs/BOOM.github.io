// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: '390',
    width: '500',
    videoId: '-T9hQ7eaeU4',
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  });
}
function onPlayerStateChange(){

}

function setTitle(){
  var data = player.getVideoData();
  var videoTitle = data.title;
  document.getElementById('title').innerHTML = videoTitle;
}
function onPlayerReady(event){
  event.target.playVideo();
  setTitle();
}
