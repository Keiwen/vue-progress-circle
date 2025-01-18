# vue-progress-circle
[![npm version](https://img.shields.io/npm/v/vue-progress-circle?logo=npm)](https://www.npmjs.com/package/vue-progress-circle)
[![npm downloads](https://img.shields.io/npm/dt/vue-progress-circle?logo=npm&color=CB3837)](https://www.npmjs.com/package/vue-progress-circle)
[![npm downloads](https://img.shields.io/npm/unpacked-size/vue-progress-circle?logo=npm&color=CB3837)](https://www.npmjs.com/package/vue-progress-circle)

![vue version](https://img.shields.io/badge/vue.js-3.x-4FC08D?logo=vue.js)
![main language](https://img.shields.io/badge/language-Javascript-yellow)
![github stars](https://img.shields.io/github/stars/keiwen/vue-progress-circle)

Circle progress bar component for vue3. See versions 1.X for vue2 component.

[Live demo here](https://keiwen.github.io/vue-progress-circle/)

## Global use
- npm install in console
```
npm install --save vue-progress-circle
```
- import component in your code
```
import { ProgressCircle } from 'vue-progress-circle'
```
you may also import it globally in your app
```
import { createApp } from "vue";
import vueProgressCircle from "vue-progress-circle";
createApp(App).use(vueProgressCircle);
```
- Use components as described below

## Components
### Progress circle
```
<progress-circle completed-steps="5" total-steps="10"></progress-circle>
```
```
<progress-circle :diameter="cpDiameter"
                 :completed-steps="cpCompletedSteps"
                 :circle-color="cpCircleColor"
                 :start-color="cpStartColor"
                 :stop-color="cpStopColor"
                 :circle-width="cpCircleWidth"
                 :animation-duration="cpAnimationDuration"
                 :inner-color="cpInnerColor"
                 :inner-display="cpInnerDisplay"
                 :percent-color="cpPercentColor"
                 :circle-origin="cpCircleOrigin"
                 :reverse-rotation="cpReverseRotation"
                 :after-mount-delay="cpAfterMountDelay"
                 :total-steps="cpTotalSteps">
   <p>Total steps: {{ cpTotalSteps }}</p>
   <p>Completed steps: {{ cpCompletedSteps }}</p>
</progress-circle>
```


| Prop                 | Type      |                                                                                                                                             Note |
|:---------------------|:----------|-------------------------------------------------------------------------------------------------------------------------------------------------:|
| `completed-steps`    | `number`  |                                                                                                          **REQUIRED**: number of completed steps |
| `total-steps`        | `number`  |                                                                                                              **REQUIRED**: number of total steps |
| `diameter`           | `number`  |                                                                                                  (px) diameter of circle component (default 100) |
| `circle-color`       | `String`  |                                                                                             inner circle color (when no progress, default black) |
| `start-color`        | `String`  |                                                                                                     leading color for progress bar (default red) |
| `stop-color`         | `String`  |                                                                                                   trailing color for progress bar (default blue) |
| `inner-color`        | `String`  |                                                                                                    Color inside the circle (default transparent) |
| `circle-width`       | `number`  |                                                                                                                   (px) circle width (default 10) |
| `animation-duration` | `number`  |                                                                                   (ms) duration of animation when progress change (default 1000) |
| `inner-display`      | `String`  | Change inner circle filling. By default or 'slot', it will use provided slot (or nothing). 'Percent' will display progress percent rounded value |
| `percent-color`      | `String`  |                                                               Change color of progress percent if displayed (see inner-display, default inherit) |
| `circle-origin`      | `String`  |                                               Change circle starting point. Accepted values are 'top', 'right', 'bottom', 'left' (default 'top') |
| `reverse-rotation`   | `Boolean` |                                                                                          Change progress to clockwise rotation (default 'false') |
| `after-mount-delay`  | `number`  |                                                                              (ms) duration to wait before displaying circle progress (default 0) |

By default, this component provide a slot where you can insert any html code
to be displayed inside the circle

You may use CSS variables for colors,
and potentially override it easily using a class on the component.
Declare component usage like
```
<progress-circle class="sample1"
    :completed-steps="5" :total-steps="10"
    start-color="var(--my-color)"
    stop-color="var(--my-color)">
</progress-circle>
<progress-circle class="sample2"
    :completed-steps="5" :total-steps="10"
    start-color="var(--my-color)"
    stop-color="var(--my-color)">
</progress-circle>
```
And then define CSS variables for each class
```
.sample1 {
  --my-color: fuchsia;
}
.sample2 {
  --my-color: green;
}
```
Each component will have it's own color!

## Contribution
This library is managed with vue-CLI
- Fork the repository
- Run `npm install`
- You can run `npm run serve`, the script will start the mini demo application
- Do your stuff
- When you're done, run `npm run build` command and commit your work for a pull request.
