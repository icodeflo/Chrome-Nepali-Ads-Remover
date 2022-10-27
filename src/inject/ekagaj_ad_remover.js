// 
// ekagaj.tv ad removal
// 

// Check for website loading status
document.addEventListener('DOMContentLoaded', fireContentLoadedEvent, false);


function fireContentLoadedEvent () {
    // Function to remove ad
    function adRemover(typeOfAd) {
        typeOfAd.forEach((eachItem) => {
            eachItem.style.display = 'none';
            eachItem.style.height = '0';
            eachItem.style.width = '0';
        })
    }
    // Alt value of ad is displayed none
    let imgSelect = document.querySelectorAll('[alt="ad"]');
    adRemover(imgSelect);
    // gif ads
    let gifAds = document.querySelectorAll('img[src*=".gif"]');
    adRemover(gifAds);
    let GIFAds = document.querySelectorAll('img[src*=".GIF"]');
    adRemover(GIFAds);
    // ads from data-src
    let dataSrcGifAds = document.querySelectorAll('img[data-src*=".gif"]');
    adRemover(dataSrcGifAds);
    // animatedAd
    let aniAd = document.querySelectorAll("aside .wrapper-box .box-area");
    adRemover(aniAd);
    let pictureAd = document.querySelectorAll('.pb-25');
    adRemover(pictureAd);
}