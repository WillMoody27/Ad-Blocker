const adVideoYt = document.querySelector(".html5-main-video");

const ytFInterval = setInterval(() => {
  const checkoutOffer = document.getElementById("watch-checkout-offers");
  const sparklesAd = document.getElementById("sparkles-container");
  const skipBtn = document.getElementsByClassName("ytp-ad-skip-button");
  const companionClickAd = document.getElementById("companion");
  const noSkipBtn = document.querySelector(".ytp-ad-preview-text");
  const paidPromo = document.querySelector(".ytp-paid-content-overlay");

  skipButtonPresent(skipBtn);
  noSkipButtonPresent(noSkipBtn, adVideoYt);
  staticAdRemove(checkoutOffer, sparklesAd, companionClickAd, paidPromo);
}, 3);

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

const title = document.querySelector("#description");

btn.addEventListener("click", () => {
  mutedVideo();
});
