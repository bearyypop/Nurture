"use strict";

// Tracklist tab under "Inside Nurture"
// setting constants that link to our song titles
const trackTitle = document.querySelector("#song-title");
const tracks = document.querySelectorAll(".track-items");
tracks.forEach(track =>{

    // when user clicks anywhere on track title/info it recognizes which song and order it's clicking from
    track.addEventListener("click", () =>{
        const trackIndex = track.dataset.index;
        console.log(trackIndex);

        const title = track.querySelector(".track-title").textContent;
        console.log(title);

        trackTitle.textContent = title;
    });
});