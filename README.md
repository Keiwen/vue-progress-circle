# vue-progress-circle
[![npm](https://img.shields.io/npm/v/vue-progress-circle.svg)](https://www.npmjs.com/package/vue-progress-circle)
[![npm](https://img.shields.io/npm/dt/vue-progress-circle.svg)](https://www.npmjs.com/package/vue-progress-circle)

Circle progress bar component

[Live demo here](https://keiwen.github.io/vue-progress-circle/)

## Global use
- npm install
```
npm install --save vue-progress-circle
```
- import components
```
import { ProgressCircle } from 'vue-progress-circle'
```
- declare use or imported components in your vue script
```
export default {
    components: { ProgressCircle },
    methods: ...
}
```
- Use components as described below

## Components
### Progress circle
```
<progress-circle completed-steps="5" total-steps="10"></progress-circle>
```
```
<progress-circle :diameter="cp_diameter"
                 :completed-steps="cp_completedSteps"
                 :circle-color="cp_circleColor"
                 :start-color="cp_startColor"
                 :stop-color="cp_stopColor"
                 :circle-width="cp_circleWidth"
                 :animation-duration="cp_animationDuration"
                 :inner-color="cp_innerColor"
                 :inner-display="cp_innerDisplay"
                 :percent-color="cp_percentColor"
                 :total-steps="cp_totalSteps">
   <p>Total steps: {{ cp_totalSteps }}</p>
   <p>Completed steps: {{ cp_completedSteps }}</p>
</progress-circle>
```


| Prop | Type | Note
| :--- | :--- | ---: |
| `completed-steps` | `number` | **REQUIRED**: number of completed steps |
| `total-steps` | `number` | **REQUIRED**: number of total steps |
| `diameter` | `number` | (px) diameter of circle component (default 100) |
| `circle-color` | `String` | inner circle color (when no progress, default black) |
| `start-color` | `String` | leading color for progress bar (default red) |
| `stop-color` | `String` | trailing color for progress bar (default blue) |
| `inner-color` | `String` | Color inside the circle (default transparent) |
| `circle-width` | `number` | (px) circle width (default 10) |
| `animation-duration` | `number` | (ms) duration of animation when progress change (default 1000) |
| `inner-display` | `String` | Change inner circle filling. By default or 'slot', it will use provided slot (or nothing). 'Percent' will display progress percent rounded value |
| `percent-color` | `String` | Change color of progress percent if displayed (see inner-display, default inherit) |

BY default, this component provide a slot where you can insert any html code
to be displayed inside the circle

## Contribution
- Fork the repository
- Run `npm install`
- You can run `npm run dev`, site is at http://localhost:8081.
- Do your stuff
- When you're done, run `npm run build` command and commit your work for a pull request.
