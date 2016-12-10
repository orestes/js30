# 01 - drum kit

I switched things around:

- Instead of the drums, you get to play a marimba :)
- I don't write all the HTML, only the wiring of keyboard keys to samples.
- The content of the pads is generated on the fly
- I allocate all the pads and audios, beforehand
- I listen for multiple key press events, wired to their correspondent key and audio. This prevents the DOM lookup on every event.
- I listen for any transition changes to remove the class.

Time: 10min of js, 50min of CSS. I'm a terrible visual designer.git add

Sounds [CC BY](https://creativecommons.org/licenses/by/2.0/legalcode) by (Samulis)[https://www.freesound.org/people/Samulis] on [freesound.org](https://www.freesound.org)
