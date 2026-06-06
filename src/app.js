
// Importo tipografías con fontsource
import '@fontsource-variable/syne/wght.css';
// Supports weights 100-900
import '@fontsource-variable/roboto/wght.css';

//Importo la dependencia de gsap
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(SplitText);



//hacer que ".js-display" salga con una animacion wavy con color al cargar la página

gsap.set(".js-display", { visibility: "visible"});
const split = SplitText.create(".js-display", { type: "chars" });

gsap.from(split.chars, {
  y: 40, 
  color: "#F27979", 
  opacity: 0,
  stagger: { each: 0.04, from: "start" },
  duration: 0.6, 
  ease: "sine.out"
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


