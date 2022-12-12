const adVideoYt = document.querySelector(".html5-main-video");

const ytFInterval = setInterval(() => {
  const checkoutOffer = document.getElementById("watch-checkout-offers");
  const sparklesAd = document.getElementById("sparkles-container");
  const skipBtn = document.querySelector(".ytp-ad-skip-button");
  const companionClickAd = document.getElementById("companion");
  const noSkipBtn = document.querySelector(".ytp-ad-preview-text");
  const paidPromo = document.querySelector(".ytp-paid-content-overlay");

  // // Block Modals GG Website
  // // const modalBlockGeek = document.getElementById("displayModal");
  // const rightBar = document.querySelector(".rightBar");
  // const modalGeekConsent = document.getElementsByClassName(
  //   "cookie-consent hide-consent show-consent"
  // );
  // const shellGeek = document.querySelector(".shell");
  // const widgetRight = document.querySelector(".widget-area");
  // const framesG_1 = document.getElementById(
  //   "GFG_AD_Desktop_LeftSideBar_Docked_160x600"
  // );
  // const framesG_2 = document.getElementById("GFG_AD_gfg_outstream_incontent");
  // const framesG_3 = document.getElementById(
  //   "google_ads_iframe_/27823234/GFG_Desktop_PostContent_336x280_0__container__"
  // );
  // const fancyBarG = document.querySelector("._bsa_fancybar");

  // // GG
  // if (rightBar != undefined && shellGeek != undefined) {
  //   shellGeek.remove();
  //   rightBar.remove();
  // }

  // if (framesG_1 != undefined) {
  //   framesG_1.remove();
  // }
  // if (framesG_2 != undefined) {
  //   framesG_2.remove();
  // }
  // if (fancyBarG != undefined) {
  //   fancyBarG.remove();
  // }
  // if (modalBlockGeek != undefined) {
  //   console.log("removed");
  //   modalBlockGeek.remove();
  //   clearInterval(ytFInterval);
  // }

  // if (widgetRight != undefined) {
  //   console.log("removed-Widget Right");
  //   widgetRight.remove();
  // }

  // if (modalGeekConsent != undefined) {
  //   modalGeekConsent[0].remove();
  // }
  // // End of GG

  skipButtonPresent(skipBtn);
  noSkipButtonPresent(noSkipBtn, adVideoYt);
  staticAdRemove(checkoutOffer, sparklesAd, companionClickAd, paidPromo);
}, 2);

const stopInterval = () => {
  clearInterval(ytFInterval);
};
const mutedVideo = () => {
  adVideoYt.muted = true;
};
const skipButtonPresent = (skip) => {
  if (skip != undefined && skip.length > 0) {
    mutedVideo();
    skip[0].click();
  }
};
const noSkipButtonPresent = (noSkip, adVideo) => {
  if (noSkip != undefined) {
    mutedVideo();
    adVideo.currentTime = adVideo.duration;
  }
};

const staticAdRemove = (chkOff, sparkAd, compClickAd, pPromo) => {
  if (chkOff != undefined) {
    chkOff.remove();
  }
  if (sparkAd != undefined) {
    sparkAd.remove();
  }
  if (compClickAd != undefined) {
    compClickAd.remove();
  }
  if (pPromo != undefined) {
    pPromo.remove();
  }
};
