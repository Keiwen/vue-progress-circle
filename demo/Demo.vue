<script setup>
import { ref } from 'vue'
import { ProgressCircle } from '../src/index'

const cpTotalSteps = ref(10)
const cpCompletedSteps = ref(6)
const cpStartColor = ref('#FF0000')
const cpStopColor = ref('#0000FF')
const cpCircleColor = ref('#000000')
const cpCircleWidth = ref(15)
const cpInnerDisplay = ref('slot')
const cpAnimationDuration = ref(1000)
const cpInnerColor = ref('transparent')
const cpPercentColor = ref('inherit')
const cpDiameter = ref(200)
const cpFromBottom = ref(false)

</script>

<template>
  <div class="container">

  <fieldset>
    <h1>Circle progress</h1>

    <div class="playWith">
      <h2>Play with it</h2>

      <progress-circle :diameter="cpDiameter"
                       :completed-steps="cpCompletedSteps"
                       :circle-color="cpCircleColor"
                       :start-color="cpStartColor"
                       :stop-color="cpStopColor"
                       :circle-width="cpCircleWidth"
                       :animation-duration="cpAnimationDuration"
                       :inner-color="cpInnerColor"
                       :total-steps="cpTotalSteps"
                       :inner-display="cpInnerDisplay"
                       :from-bottom="cpFromBottom"
                       :percent-color="cpPercentColor">
        <p>Total steps: {{ cpTotalSteps }}</p>
        <p>Completed steps: {{ cpCompletedSteps }}</p>
      </progress-circle>

      <hr/>

      <label for="cpTotalSteps">Total steps:</label>
      <input type="number" v-model="cpTotalSteps" id="cpTotalSteps"/>

      <label for="cpCompletedSteps">Completed:</label>
      <input type="number" v-model="cpCompletedSteps" id="cpCompletedSteps"/>

      <br/>

      <label for="cpCircleWidth">Circle width:</label>
      <input type="number" v-model="cpCircleWidth" id="cpCircleWidth"/>

      <label for="cpDiameter">Diameter:</label>
      <input type="number" v-model="cpDiameter" id="cpDiameter"/>

      <br/>

      <label for="cpStartColor">Start color:</label>
      <input type="text" v-model="cpStartColor" id="cpStartColor"/>

      <label for="cpStopColor">Stop color:</label>
      <input type="text" v-model="cpStopColor" id="cpStopColor"/>

      <br/>

      <label for="cpCircleColor">Circle color:</label>
      <input type="text" v-model="cpCircleColor" id="cpCircleColor"/>

      <label for="cpInnerColor">Inner color:</label>
      <input type="text" v-model="cpInnerColor" id="cpInnerColor"/>

      <br/>

      <label for="cpInnerDisplay">Inner display:</label>
      <select v-model="cpInnerDisplay" id="cpInnerDisplay">
        <option value="slot">Slot (default)</option>
        <option value="percent">Percent</option>
      </select>

      <label for="cpPercentColor">Percent color:</label>
      <input type="text" v-model="cpPercentColor" id="cpPercentColor"/>

      <br/>

      <label for="cpAnimationDuration">Animation duration:</label>
      <input type="number" v-model="cpAnimationDuration" id="cpAnimationDuration"/>

      <label for="cpFromBottom">From bottom:</label>
      <input type="checkbox" v-model="cpFromBottom" id="cpFromBottom"/>

    </div>

    <div class="gallery">
      <h2>Gallery</h2>

      <progress-circle :diameter="50" :completed-steps="7" :total-steps="10" :circle-width="5" ></progress-circle>
      <progress-circle :diameter="75" :circle-width="15" :completed-steps="3" :total-steps="10" start-color="#BBFF42" stop-color="#429321" circle-color="#323232"></progress-circle>
      <progress-circle class="sample1" :completed-steps="9" :total-steps="10" start-color="var(--my-color)" stop-color="var(--my-color)" circle-color="#AAA" inner-color="#222">
        <span style="color: white;">Progress</span>
      </progress-circle>
      <progress-circle class="sample2" :completed-steps="12" :total-steps="27" start-color="var(--my-color)" stop-color="var(--my-color)" circle-color="transparent" inner-color="#2C3E50" inner-display="percent" percent-color="white" :from-bottom="true"></progress-circle>
      <progress-circle :completed-steps="38" :total-steps="53" start-color="#2C3E50" stop-color="#BDC3C7" circle-color="#FFF" inner-display="percent" percent-color="#BDC3C7" :from-bottom="true"></progress-circle>

    </div>

  </fieldset>

</div>
</template>

<style>
h1 {
  margin-top: 0;
  margin-bottom: 0;
}

.container {
  margin-top: 20px;
}

.playWith {
  width: 70%;
  float: left;
}

.gallery {
  float: right;
  width: 20%;
}

.sample1 {
  --my-color: #C0392B;
}
.sample2 {
  --my-color: #3498DB;
}

.half {
  width: 50%;
  float: left;
}

</style>
