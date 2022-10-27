// 
// ad removal
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
    // imagekhabar
    let staticAd = document.querySelectorAll(".uk-first-column .widget a img");
    adRemover(staticAd);
    // butwalonline
    let boAd = document.querySelectorAll(".adds");
    adRemover(boAd);
}