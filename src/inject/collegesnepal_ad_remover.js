// 
// news24nepal.tv ad removal
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
    let adv = document.querySelectorAll('img[src*="advertisement"]');
    adRemover(adv);
    let GIFAds = document.querySelectorAll('img[src*=".GIF"]');
    adRemover(GIFAds);
    // ads from data-src
    let dataSrcGifAds = document.querySelectorAll('img[data-src*=".gif"]');
    adRemover(dataSrcGifAds);
    // sideAd
    let sideAd = document.querySelectorAll('.right-home-sidebar');
    adRemover(sideAd);
    // sideAd
    let lblock = document.querySelectorAll('.lblock');
    adRemover(lblock);
    // edusanjal
    let bfs = document.querySelectorAll('.bfs-wrapper');
    adRemover(bfs);
    // etajakhabar.com
    let etajaAd = document.querySelectorAll('.container .mb-3 .col-md-12 .widget');
    adRemover(etajaAd);
    // secWidget
    let sectionAd = document.querySelectorAll('section.widget');
    adRemover(sectionAd);
    // goalNepal
    let goalNepalAd = document.querySelectorAll('#four-bigs');
    adRemover(goalNepalAd);
    let rightBoxAd = document.querySelectorAll(".right-box");
    adRemover(rightBoxAd);
    let boundaryBoxAd = document.querySelectorAll(".boundary-box");
    adRemover(boundaryBoxAd);
    let html = document.getElementsByTagName("html");
    html.classList.remove("uk-modal-page");

}