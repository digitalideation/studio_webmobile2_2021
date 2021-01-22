# Übung
Briefing: Gestalte eine zyklische Animation ausgehend ausgehend von einem Werk aus der Op-Art. Überlege, welche Art der Bewegung im Werk optisch bereits angelegt ist und interpretiere diese. <br/> 
[Auf dieser Seite findest du ein paar Namen und Werke als Beispiele. ](https://github.com/digitalideation/studio_webmobile2_2021/wiki/Op-Art/)
<br/>
In unserem Zusammenhang ist Op-Art interessant. Zum einen, weil die Werke oft sehr parametrisch aufgebaut sind. <br/>
Zum anderen, weil sie eine Bewegung implizieren – man hat das Gefühl, etwas bewegt sich, könnte sich bewegen – oder 'sieht' eine Bewegung, die aber nicht da ist. <br/><br/>
Sich dieser gemeinten Bewegung bewusst zu werden und sie umzusetzen, ist eure Aufgabe. <br/>
Dabei geht es um eine **Interpretation**, nicht um eine **Ausführung**. Interpretation meint, ihr könnt von einem charakteristischen Element – wie zum Beispiel dem Kipp Effekt von Vordergrund-Hintergrund in Bridget Rileys Arbeit ausgehen und diesen umsetzten. Ihr müsst aber nicht zwingend auch die Streifen und die Form der Raute übernehmen.<br/><br/>



Benutze dazu CSS Transform und / oder Keyframe Animationen. Arbeite mit den Blend Modes, Transition Timing, SVG - Animationen.  <br/>
Falls du die Konzepte vorgängig nochmals repetieren möchtest, findest du unten eine Anzahl von Links, Ressourcen und Inputs, die du durcharbeiten kannst. 

***
## CSS Animations Tutorials, Referenzen
* Übersicht Transform: https://www.w3schools.com/css/css3_2dtransforms.asp
* Übersicht Keyframe Animationen: https://www.w3schools.com/css/css3_animations.asp
* Übersicht Transition: https://www.w3schools.com/css/css3_transitions.asp
* Tutorial Transform: https://www.youtube.com/watch?v=PH35-BDak0M
* Tutorial Transition: https://www.youtube.com/watch?v=oYlJR4Le228
* Tutorial Keyframes: https://www.youtube.com/watch?v=PjR97QzOrJM
* Tutorial Animation Fill Mode: https://www.youtube.com/watch?v=irJXZnA3g5U
## CSS Layered Animations
* https://tobiasahlin.com/blog/curved-path-animations-in-css/

## CSS Custom Bezier Curves
* https://developer.mozilla.org/en-US/docs/Web/CSS/easing-function#Timing_functions

## Mix blend mode
* https://developer.mozilla.org/de/docs/Web/CSS/mix-blend-mode

## CSS Animation vorwärts und rückwärts abspielen <br/>
`animation-direction: normal|reverse|alternate|alternate-reverse|initial|inherit;`<br/>
https://www.w3schools.com/cssref/css3_pr_animation-direction.asp<br/>
d.h. `animation-direction: normal` für vorwärts und `animation-direction: reverse` für rückwärts

## SVG Filter
https://tympanus.net/codrops/2019/02/19/svg-filter-effects-creating-texture-with-feturbulence/

***
### Übung1
Platziere eine Form in der Mitte des Screens und animiere über transform einzelne Eigenschaften der Form. <br/>
Beispiel:<br/>
`transform: rotate(20deg);`<br/>
Weise die Transformation über einen Hover zu und benutze Transition, um die Länge der Animation zu steuern.<br/>
`transition: all 2s;`<br/>
Beispiel auf Codepen: https://codepen.io/braican/pen/kyHFc <br/>
Übersicht aller Eigenschaften, die animiert werden können: <br/>
https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_animated_properties
### Übung2
Lies nochmals die Animation Properties: https://www.w3schools.com/css/css3_animations.asp <br/>
Erstelle eine Animation mit Keyframes und weise die Animation deiner Form zu. <br/>
Beispiel auf Codepen: https://codepen.io/tutsplus/pen/dXkppB

### Übung3
Lies den Artikel über Timing Functions: https://tympanus.net/codrops/css_reference/timing-function_value/<br/>
Probiere verschiedene `transition-timing-function` aus. <br/>
Generier eine eigene Cubic-Bezier Kurve mit diesem Tool: https://cubic-bezier.com/

### Übung4

Lies den Beitrag von Tobias Ahlin: https://tobiasahlin.com/blog/curved-path-animations-in-css/<br/>
Mache eine komplexere Animation über verschiedene Layers. <br/>
Falls ihr svg Elemente per CSS je um ihr eigenes Zentrum drehen (oder skalieren) wollt:<br/>
`transform-box: fill-box;`<br/>
`transform-origin: center;`<br/>
auf das Element setzen<br/>

### Übung5
Probiere verschiedene Blend-Modes aus und weise sie deiner Form zu. <br/>
https://developer.mozilla.org/de/docs/Web/CSS/mix-blend-mode <br/>
Beispiel: https://codepen.io/hzuellig/pen/gOpmpwZ <br/>
Beziehe dich auf die Vordergrund/Hintergrund Themen der Op-Art.<br/>

### Übung6
Triggere die Animation über ein Event. (Pure Javascript, JQuery). <br/>
https://css-tricks.com/controlling-css-animations-transitions-javascript/

### Übung7
Beispiel: [SVG Clipping](files/mask1.zip) <br/>
Studiere das Beispiel -- ein SVG Pfad wird hier als Maskierung benutzt. Zusätzlich wird er animiert. <br/>
Mehr Info zu SVG Clipping Path<br/>
https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Clipping_and_masking<br/>
Baue ein eigenes Beispiel, in dem eine Form als Maskierung benutzt wird. <br/> 
Beziehe dich auf die Vordergrund/Hintergrund Themen der Op-Art.<br/>


