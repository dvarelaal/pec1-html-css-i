//Importo la dependencia de gsap
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(SplitText);


//Hacer que gire el elemento con clase '.js-circular'

/*
gsap.to('.js-circular', {
  rotation: 360,
  transformOrigin: "50% 50%",
  duration: 5,
  ease: "none",
  repeat: -1
})
*/

//hacer que ".js-display" salga con una animacion wavy con color al cargar la página
const split = SplitText.create(".js-display", { type: "chars" });

gsap.from(split.chars, {
  y: 40, color: "#F27979", opacity: 0,
  stagger: { each: 0.04, from: "start" },
  duration: 0.6, ease: "sine.out"
});

//hacer que las hojas y limones se muevan al azar un poco en index.html
gsap.to(".js-img-float", {
  y: "random(-20, 20)",
  x: "random(-10, 10)",
  rotation: "random(-15, 15)",
  duration: "random(2, 4)",
  ease: "sine.inOut",
  yoyo: true, repeat: -1
});




