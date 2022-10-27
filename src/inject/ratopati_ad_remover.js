// 
// ratopati.com ad removal
// 

// Check for website loading status
document.addEventListener('DOMContentLoaded', fireContentLoadedEvent, false);


function fireContentLoadedEvent () {
    // Function to remove ad
    function adRemover(typeOfAd) {
        typeOfAd.forEach((eachItem) => {
            eachItem.style.display = 'none';
        })
    }
    // Alt value of ad is displayed none
    let imgSelect = document.querySelectorAll('[alt="ad"]');
    adRemover(imgSelect);
    // Ncell ad
    let ncellAd = document.querySelectorAll('[alt="Ncell Homepage"]');
    adRemover(ncellAd);
    // gif ads
    let gifAds = document.querySelectorAll('img[src*=".gif"]');
    adRemover(gifAds);
    // ads from data-src
    let dataSrcGifAds = document.querySelectorAll('img[data-src*=".gif"]');
    adRemover(dataSrcGifAds);
    // Arya wellness ad
    let aryawellnessAd = document.querySelectorAll('img[data-src*="Arya"]');
    adRemover(aryawellnessAd);
    // Aside ad in news detail page
    let asideAd = document.querySelector('aside .row');
    asideAd.style.display = 'none';
}