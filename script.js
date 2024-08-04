let progress = document.getElementById("progress");
let song = document.getElementById("song");
let ctrlIcon = document.getElementById("ctrlIcon");

song.onloadmetadata = function(){
 progress.max = song.duration;
  progress.value = song.currentTime;
   progress.max = song.duration;
}

function playpuss(){


}