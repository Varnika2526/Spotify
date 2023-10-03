console.log("Welcome to Spotify");
let songIndex=0;
let audioElement = new Audio('song/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

//audioElement.play();
let song = [
    {songName:"Whatever it takes" , filePath : "song/1.mp3" , coverPath:"covers/poster1.jpg"},
    {songName:"Yeh Raatein " , filePath : "song/2.mp3" , coverPath:"covers/poster2.jpg"},
    {songName:"Mary On a Cross " , filePath : "song/3.mp3" , coverPath:"covers/poster3.jpg"},
    {songName:"Enemy " , filePath : "song/4.mp3" , coverPath:"covers/poster4.jpg"},
    {songName:"ye shaam mastani " , filePath : "song/5.mp3" , coverPath:"covers/poster5.jpg"},
    {songName:"zindagi ek safar " , filePath : "song/6.mp3" , coverPath:"covers/poster6.jpg"},
    {songName:"bade ache lagte hai " , filePath : "song/7.mp3" , coverPath:"covers/poster7.jpg"},
    {songName:"yaad kiya dil ne " , filePath : "song/8.mp3" , coverPath:"covers/poster8.jpg"},
    {songName:"dear zindagi" , filePath : "song/9.mp3" , coverPath:"covers/poster9.jpg"},
]
songItems.forEach((element,i)=>{
    element.getElementsByTagName("img")[0].src=song[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = song[i].songName;

})

//audioElement.play()
//handle play pause button
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity=1;

    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity=0;
    }

})



audioElement.addEventListener('timeupdate',()=>{
    
    //update seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    console.log(progress);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change' , ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');

    })
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllPlays();
        SongIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src=`song/${SongIndex}.mp3`;
        masterSongName.innerText=song[songIndex].songName;
        audioElement.currentTime=0;
        audioElement.play();
        gif.style.opacity=1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');

    })
})
document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=9){
        songIndex=0;
    }
    else{
        songIndex += 1;
    }
    audioElement.src=`song/${songIndex+1}.mp3`;
    masterSongName.innerText=song[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    gif.style.opacity=1;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})
document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex=0;
    }
    else{
        songIndex -= 1;
    }
    audioElement.src=`song/${songIndex+1}.mp3`;
    masterSongName.innerText=song[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    gif.style.opacity=1;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})
