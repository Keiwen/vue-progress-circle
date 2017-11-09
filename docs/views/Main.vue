<template>
    <div class="container">

        <fieldset>
            <h1>Circle progress</h1>

            <div>
                <h2>Play with it</h2>

                <progress-circle :diameter="cp_diameter"
                                 :completed-steps="cp_completedSteps"
                                 :circle-color="cp_circleColor"
                                 :start-color="cp_startColor"
                                 :stop-color="cp_stopColor"
                                 :circle-width="cp_circleWidth"
                                 :animation-duration="cp_animationDuration"
                                 :inner-color="cp_innerColor"
                                 :total-steps="cp_totalSteps">
                   <p>Total steps: {{ cp_totalSteps }}</p>
                   <p>Completed steps: {{ cp_completedSteps }}</p>
                </progress-circle>

                <br/>
                Model: {{ completedSteps }}

                <hr/>

                <label for="cp_totalSteps">Total steps:</label>
                <input type="number" v-model="cp_totalSteps" id="cp_totalSteps"/>

                <label for="cp_completedSteps">Completed:</label>
                <input type="number" v-model="cp_completedSteps" id="cp_completedSteps"/>

                <label for="cp_circleWidth">Circle width:</label>
                <input type="number" v-model="cp_circleWidth" id="cp_circleWidth"/>

                <label for="cp_diameter">Diameter:</label>
                <input type="number" v-model="cp_diameter" id="cp_diameter"/>

                <br/>

                <label for="cp_circleColor">Circle color:</label>
                <input type="text" v-model="cp_circleColor" id="cp_circleColor"/>

                <label for="cp_startColor">Start color:</label>
                <input type="text" v-model="cp_startColor" id="cp_startColor"/>

                <label for="cp_stopColor">Stop color:</label>
                <input type="text" v-model="cp_stopColor" id="cp_stopColor"/>

                <label for="cp_innerColor">Inner color:</label>
                <input type="text" v-model="cp_innerColor" id="cp_innerColor"/>

                <br/>

                <label for="cp_animationDuration">Animation duration:</label>
                <input type="number" v-model="cp_animationDuration" id="cp_animationDuration"/>

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
        cp_animationDuration: 1000,
        cp_innerColor: 'transparent',
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
