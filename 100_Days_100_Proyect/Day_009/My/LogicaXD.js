const conteiner = document.getElementsByClassName("conteiner");
var dropsBig = [];
var dropsMedium = [];
var dropsSmall = [];
// var dropsBigAfter = [];
// var dropsMediumAfter = [];
// var dropsSmallAfter = [];
// var dropsBigBefore = [];
// var dropsMediumBefore = [];
// var dropsSmallBefore = [];
window.onload = () => {
  for (let i = 1; i <= 11; i++) {
    let dropBig = `.g-${i}`;
    let dropMedium = `.m-${i}`;
    let dropSmall = `.p-${i}`;
    // let dropBigAfter = `.g-${i}::after`;
    // let dropMediumAfter = `.m-${i}::after`;
    // let dropSmallAfter = `.p-${i}::after`;
    // let dropBigBefore = `.g-${i}::before`;
    // let dropMediumBefore = `.m-${i}::before`;
    // let dropSmallBefore = `.p-${i}::before`;

    var drop1 = document.querySelector(dropBig);
    var drop2 = document.querySelector(dropMedium);
    var drop3 = document.querySelector(dropSmall);
    // var drop1After = document.querySelector(dropBigAfter);
    // var drop2After = document.querySelector(dropMediumAfter);
    // var drop3After = document.querySelector(dropSmallAfter);
    // var drop1Before = document.querySelector(dropBigBefore);
    // var drop2Before = document.querySelector(dropMediumBefore);
    // var drop3Before = document.querySelector(dropSmallBefore);
    if (drop1 && drop2 && drop3) {
      dropsBig.push(drop1);
      dropsMedium.push(drop2);
      dropsSmall.push(drop3);
      //   dropsBigAfter.push(drop1After);
      //   dropsMediumAfter.push(drop2After);
      //   dropsSmallAfter.push(drop3After);
      //   dropsBigBefore.push(drop1Before);
      //   dropsMediumBefore.push(drop2Before);
      //   dropsSmallBefore.push(drop3Before);
    }
    // dropBig = document.querySelector("g-${i}");
    // dropMedium = document.querySelector("m-${i}");
    // dropPequeñ = document.querySelector("g-${i}");
  }
  for (let i = 0; i < dropsBig.length; i++) {
    let durationRandom = Math.floor(Math.random() * 2 + 1) / 10;
    let delayRandom = Math.floor(Math.random() * 50 + 100) / 25;
    dropsBig[i].style.animationDuration = String(0.7 + durationRandom) + "s";
    // console.log(dropsBig[i].style.animationDuration);
    dropsMedium[i].style.animationDuration = String(1.3 + durationRandom) + "s";
    // console.log(dropsBig[i].style.animationDelay);
    dropsSmall[i].style.animationDuration = String(1.9 + durationRandom) + "s";
    // console.log(dropsBig[i].style.animationDelay);
    dropsBig[i].style.animationDelay = String(delayRandom) + "s";
    dropsMedium[i].style.animationDelay = String(delayRandom) + "s";
    dropsSmall[i].style.animationDelay = String(delayRandom) + "s";
    dropsBig[i].style.left = String(25 + 38 * i) + "px";
    dropsMedium[i].style.left = String(25 + 38 * i) + "px";
    dropsSmall[i].style.left = String(30 + 38 * i) + "px";
  }
  console.log(dropsBig);
  console.log(dropsMedium);
  console.log(dropsSmall);
};
