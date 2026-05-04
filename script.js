// Adding "use strict" to JS
"use strict";

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
    
$(function () {
// carousel images
const carouselImages = [
    "images/porter-robinson-landscape.jpg",
    "images/header-img.png",
    "images/Porter-Robinson-Nurture-Live.jpg",
    "images/porter-dark-logo.png",
    "images/nurture-poster.jpg",
    "images/porter-nurture-post.png",
    "images/porter-robinson.jpg",
    "images/porter-second-sky.jpg"
];
// keeps track of which image is currently shown
 let currentImage = 0;

// "next" carousel button
$(".carousel-next-btn").click(function(){
    // this will iterate up through the images in the array
    currentImage++;

    // this if statement will loop the carousel back to the first image upon reaching the end of the array
    if(currentImage >= carouselImages.length){
        currentImage = 0;
    }
    // changes the image to the next image
    $("#carousel-img").attr("src", carouselImages[currentImage]);
});

// "previous" carousel button
$(".carousel-prev-btn").click(function(){
// this will iterate down through the images in the array
    currentImage--;

    // this if-statement says it will jump to the last image if we click the previous button on the first image in the array
    if(currentImage < 0){
        currentImage = carouselImages.length -1;
    }
    // changes the image with the previous image
    $("#carousel-img").attr("src", carouselImages[currentImage]);
});




    // Tracklist tab under "Inside Nurture"
    // setting constants that link to our song titles
    const trackTitle = document.querySelector("#song-title");
    // will get our array of songs
    $.getJSON("tracks.json", function(songs){
        // this will empty the hard coded HTML track list
        $(".track-menu").empty();

        // this will go through each song from the created JSON file
        songs.forEach(function(track, index){
            // creating a track item on the left side for each song
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
                // this will update the right side with the corresponding track title and description
                trackTitle.textContent = track.title;
                 $("#track-img").attr("src", track.image);
                 $("#song-title").text(track.title);
                 $("#track-description").text(track.description);
                 $("#author").text(track.author);
            });
        });
    });
    
});