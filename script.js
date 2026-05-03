// Adding "use strict" to JS
"use strict";

$(function () {
    // Tracklist tab under "Inside Nurture"
    // setting constants that link to our song titles
    const trackTitle = document.querySelector("#song-title");
    const tracks = document.querySelectorAll(".track-items");
    tracks.forEach(track => {

        // when user clicks anywhere on track title/info it recognizes which song and order it's clicking from
        track.addEventListener("click", () => {
            const trackIndex = track.dataset.index;
            const title = track.querySelector(".track-title").textContent;

            trackTitle.textContent = title;

        });
    });
    // tabs for the track list
    $(".tab").click(function () {
        // will only highlight the tab that is currently active
        $(".tab").removeClass("active-tab");
        $(this).addClass("active-tab");

        //hides all tab content panels
        $(".tab-panel").removeClass("active");

        // will now show the correct content of the correctly selected tab
        const index = $(this).index();
        $(".tab-panel").eq(index).addClass("active");
    });
});