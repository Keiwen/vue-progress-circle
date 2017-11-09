<template>
    <div class="container">

        <fieldset>
            <h1>Circle progress</h1>

            <div class="playWith">
                <h2>Play with it</h2>

                <progress-circle :diameter="cp_diameter"
                                 :completed-steps="cp_completedSteps"
                                 :circle-color="cp_circleColor"
                                 :start-color="cp_startColor"
                                 :stop-color="cp_stopColor"
                                 :circle-width="cp_circleWidth"
                                 :animation-duration="cp_animationDuration"
                                 :inner-color="cp_innerColor"
                                 :total-steps="cp_totalSteps"
                                 :inner-display="cp_innerDisplay"
                                 :percent-color="cp_percentColor">
                   <p>Total steps: {{ cp_totalSteps }}</p>
                   <p>Completed steps: {{ cp_completedSteps }}</p>
                </progress-circle>

                <hr/>

                <label for="cp_totalSteps">Total steps:</label>
                <input type="number" v-model="cp_totalSteps" id="cp_totalSteps"/>

                <label for="cp_completedSteps">Completed:</label>
                <input type="number" v-model="cp_completedSteps" id="cp_completedSteps"/>

                <br/>

                <label for="cp_circleWidth">Circle width:</label>
                <input type="number" v-model="cp_circleWidth" id="cp_circleWidth"/>

                <label for="cp_diameter">Diameter:</label>
                <input type="number" v-model="cp_diameter" id="cp_diameter"/>

                <br/>

                <label for="cp_startColor">Start color:</label>
                <input type="text" v-model="cp_startColor" id="cp_startColor"/>

                <label for="cp_stopColor">Stop color:</label>
                <input type="text" v-model="cp_stopColor" id="cp_stopColor"/>

                <br/>

                <label for="cp_circleColor">Circle color:</label>
                <input type="text" v-model="cp_circleColor" id="cp_circleColor"/>

                <label for="cp_innerColor">Inner color:</label>
                <input type="text" v-model="cp_innerColor" id="cp_innerColor"/>

                <br/>

                <label for="cp_innerDisplay">Inner display:</label>
                </select>
                <select v-model="cp_innerDisplay" id="cp_innerDisplay">
                  <option value="slot">Slot (default)</option>
                  <option value="percent">Percent</option>
                </select>

                <label for="cp_percentColor">Percent color:</label>
                <input type="text" v-model="cp_percentColor" id="cp_percentColor"/>

                <br/>

                <label for="cp_animationDuration">Animation duration:</label>
                <input type="number" v-model="cp_animationDuration" id="cp_animationDuration"/>

            </div>

            <div class="gallery">
              <h2>Gallery</h2>

              <progress-circle diameter="50" completed-steps="7" total-steps="10" circle-width="5" ></progress-circle>
              <progress-circle diameter="75" circle-width="15" completed-steps="3" total-steps="10" start-color="#bbff42" stop-color="#429321" circle-color="#323232"></progress-circle>
              <progress-circle completed-steps="9" total-steps="10" start-color="#C0392B" stop-color="#C0392B" circle-color="#AAA" inner-color="#222">
                <span style="color: white;">Progress</span>
              </progress-circle>
              <progress-circle completed-steps="12" total-steps="27" start-color="#3498DB" stop-color="#3498DB" circle-color="transparent" inner-color="#2C3E50" inner-display="percent" percent-color="white"></progress-circle>
              <progress-circle completed-steps="38" total-steps="53" start-color="#2C3E50" stop-color="#BDC3C7" circle-color="#FFF" inner-display="percent" percent-color="#BDC3C7"></progress-circle>

            </div>

        </fieldset>

    </div>
</template>


<script>
  import { ProgressCircle } from '../../src/main'

  export default {
    components: { ProgressCircle },
    data () {
      return {
        cp_totalSteps: 10,
        cp_completedSteps: 6,
        cp_startColor: '#FF0000',
        cp_stopColor: '#0000FF',
        cp_circleColor: '#000000',
        cp_circleWidth: 15,
        cp_innerDisplay: 'slot',
        cp_animationDuration: 1000,
        cp_innerColor: 'transparent',
        cp_percentColor: 'inherit',
        cp_diameter: 200
      }
    }
  }
</script>


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

    .half {
        width: 50%;
        float: left;
    }


</style>
