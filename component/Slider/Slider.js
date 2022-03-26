const allRanges = document.querySelectorAll(".range-wrap");
allRanges.forEach(wrap => {
  const range = wrap.querySelector(".range");
  const bubble = wrap.querySelector(".bubble");

  range.addEventListener("input", () => {
    setBubble(range, bubble);
  });
  setBubble(range, bubble);
});

function setBubble(range, bubble) {
  const val = range.value;
  const min = range.min ? range.min : 0;
  const max = range.max ? range.max : 100;
  const newVal = Number(((val - min) * 100) / (max - min));
  bubble.innerHTML = val;

  // Sorta magic numbers based on size of the native UI thumb
  bubble.style.left = `calc(${newVal}% + (${8 - newVal * 0.15}px))`;
}

// const getrange = document.querySelector(".range");
// document.querySelector(".bubble").innerHTML = getrange.value;
// getrange.addEventListener("change",(event)=>{
//    console.log(event.target.value)
//   document.querySelector(".bubble").innerHTML = event.target.value; // not changing values
//   const newVal = Number(((event.target.value - event.target.min) * 100) / (event.target.max - event.target.min));
//   document.querySelector(".bubble").style.left =  `calc(${newVal}% + (${8 - newVal * 0.15}px))`
// })

