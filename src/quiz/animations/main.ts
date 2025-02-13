const aliceTumbling1: Keyframe[] = [
  { transform: 'rotate(0) scale(1)' },
  { transform: 'rotate(360deg) scale(0)' }
];

const aliceTiming1: KeyframeEffectOptions = {
  duration: 2000,
  iterations: 1,
  fill: 'forwards'
};

const alice10 = document.querySelector<HTMLElement>("#alice1");
const alice20 = document.querySelector<HTMLElement>("#alice2");
const alice30 = document.querySelector<HTMLElement>("#alice3");

// if(alice10 && alice20 && alice30) {
//   // Promise chain  
//   alice10.animate(aliceTumbling1, aliceTiming1).finished  
//     .then(() => {
//         return alice20
//                 .animate(aliceTumbling1, aliceTiming1)
//                 .finished;     
//     })
//     .then(() => {
//       return alice30
//               .animate(aliceTumbling1, aliceTiming1)
//               .finished;
//     })
//     .catch((err) => alert(`Error when promising ... ${err.message}`));
// }
// else{
//   console.warn("#alice not found");
// }

async function animateAlice10() : Promise<Animation> {
  if (alice10) {
    console.log("animate 10");
    return alice10.animate(aliceTumbling1, aliceTiming1).finished;
  } else {
    throw("potnetially null");
  }
}

async function animateAlice20() : Promise<Animation> {
  if (alice20) {
    await animateAlice10();
    console.log("animate 20");
    return alice20.animate(aliceTumbling1, aliceTiming1).finished;
  } else {
    throw("potnetially null");
  }
}

async function animateAlice30() : Promise<Animation> {
  if (alice30) {
    await animateAlice20();
    console.log("animate 30");
    return alice30.animate(aliceTumbling1, aliceTiming1).finished;
  } else {
    throw("potnetially null");
  }
}

animateAlice30();

// alice10
//     .animate(aliceTumbling1, aliceTiming1)
//     .finished
//     .then((res) => {
//         console.log(res);
//         alice20
//             .animate(aliceTumbling1, aliceTiming1)
//             .finished
//             .then((res) => {
//                 console.log(res);
//                 alice30.animate(aliceTumbling1, aliceTiming1);
//             })
//     });
console.log("end of program");