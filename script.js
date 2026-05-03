// Adding "use strict" to JS
"use strict";

$(function () {
    // Tracklist tab under "Inside Nurture"
    // setting constants that link to our song titles
    const trackTitle = document.querySelector("#song-title");
    const songs = document.querySelectorAll(".track-items");

    // will get our array of songs
    $.getJSON("tracks.json", function(songs){
        // this will empty the hard coded HTML track list
        $(".track-menu").empty();

        songs.forEach(function(track, index){
            $(".track-menu").append(
                '<div class="track-items" data-index="' + index + '">' +
                '<img src="images/info-icon.png" alt="green information icon" class="info-icon">' +
                '<div class="track-text">' +
                '<span class="track-title">' + track.title + '</span>' +
                '<span class="track-length">' + track.length + '</span>' +
                '</div>' +
                '</div>'
            );
            $(".track-items").last().click(function(){
                trackTitle.textContent = track.title;
                 $("#track-img").attr("src", track.image);
                 $("#song-title").text(track.title);
                 $("#track-description").text(track.description);
                 $("#author").text(track.author);
            });
        });
    });

    songs.forEach(song => {

        // when user clicks anywhere on track title/info it recognizes which song and order it's clicking from
        song.addEventListener("click", () => {
            const trackIndex = song.dataset.index;
            const title = song.querySelector(".track-title").textContent;

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