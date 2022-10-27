// 
// ad removal for all sites
// 

document.addEventListener('DOMContentLoaded', fireContentLoadedEvent, false);

function fireContentLoadedEvent () {
    //  function to remove ad of specific type
    function adRemover(typeOfAd) {
        typeOfAd.forEach((eachItem) => {
            eachItem.style.display = 'none';
        })
    }
    // Ads from images with alt = ad
    let imgSelect = document.querySelectorAll('[alt="ad"]');
    adRemover(imgSelect);
    // Ncell ad
    let ncellAd = document.querySelectorAll('[alt="Ncell Homepage"]');
    adRemover(ncellAd);
}
