<template>
  <div class="circle-progress-container" :style="containerStyle">
    <div class="circle-progress-inner" :style="innerCircleStyle">
      <slot></slot>
    </div>
    <svg class="circle-progress-bar"
         :width="diameter"
         :height="diameter"
         version="1.1"
         xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient :id="'radial-gradient' + _uid"
                        :fx="gradient.fx"
                        :fy="gradient.fy"
                        :cx="gradient.cx"
                        :cy="gradient.cy"
                        :r="gradient.r">
          <stop offset="50%" :stop-color="startColor"/>
          <stop offset="100%" :stop-color="stopColor"/>
        </radialGradient>
      </defs>
      <circle :r="innerCircleRadius"
              :cx="radius"
              :cy="radius"
              :fill="innerColor"
              :stroke="circleColor"
              :stroke-dasharray="circumference"
              stroke-dashoffset="0"
              stroke-linecap="round"
              :style="strokeStyle"></circle>
      <circle :transform="'rotate(270, ' + radius + ',' + radius + ')'"
              :r="innerCircleRadius"
              :cx="radius"
              :cy="radius"
              :fill="innerColor"
              :stroke="'url(#radial-gradient' + _uid + ')'"
              :stroke-dasharray="circumference"
              :stroke-dashoffset="circumference"
              stroke-linecap="round"
              :style="progressStyle"></circle>
    </svg>
  </div>
</template>

<script>
export default {
  props: {
    diameter: {
      type: Number,
      required: false,
      default: 200
    },
    totalSteps: {
      type: Number,
      required: true,
      default: 10
    },
    completedSteps: {
      type: Number,
      required: true,
      default: 0
    },
    startColor: {
      type: String,
      required: false,
      default: '#bbff42'
    },
    stopColor: {
      type: String,
      required: false,
      default: '#429321'
    },
    circleWidth: {
      type: Number,
      required: false,
      default: 10
    },
    animationDuration: {
      type: Number,
      required: false,
      default: 1000
    },
    circleColor: {
      type: String,
      required: false,
      default: '#323232'
    },
    innerColor: {
      type: String,
      required: false,
      default: 'transparent'
    }
  },

  data () {
    return {
      gradient: {
        fx: 1,
        fy: 0.5,
        cx: 0.5,
        cy: 0.5,
        r: 0.65
      },
      gradientAnimation: null,
      currentAngle: 0,
      strokeDashoffset: 0
    }
  },

  computed: {
    radius () {
      return this.diameter / 2
    },

    circumference () {
      return Math.PI * this.innerCircleDiameter
    },

    stepSize () {
      if (this.totalSteps === 0) {
        return 0
      }

      return 100 / this.totalSteps
    },

    finishedPercentage () {
      return this.stepSize * this.completedSteps
    },

    circleSlice () {
      return 2 * Math.PI / this.totalSteps
    },

    animateSlice () {
      return this.circleSlice / this.totalPoints
    },

    innerCircleDiameter () {
      return this.diameter - (this.circleWidth * 2)
    },

    innerCircleRadius () {
      return this.innerCircleDiameter / 2
    },

    totalPoints () {
      return this.animationDuration / this.animationIncrements
    },

    animationIncrements () {
      return 1000 / 60
    },

    hasGradient () {
      return this.startColor !== this.stopColor
    },

    containerStyle () {
      return {
        height: `${this.diameter}px`,
        width: `${this.diameter}px`
      }
    },

    progressStyle () {
      return {
        height: `${this.diameter}px`,
        width: `${this.diameter}px`,
        strokeWidth: `${this.circleWidth}px`,
        strokeDashoffset: this.strokeDashoffset,
        transition: `stroke-dashoffset ${this.animationDuration}ms linear`
      }
    },

    strokeStyle () {
      return {
        height: `${this.diameter}px`,
        width: `${this.diameter}px`,
        strokeWidth: `${this.circleWidth}px`
      }
    },

    innerCircleStyle () {
      return {
        width: `${this.innerCircleDiameter}px`
      }
    }
  },

  methods: {
    getStopPointsOfCircle (steps) {
      const points = []

      for (let i = 0; i < steps; i++) {
        const angle = this.circleSlice * i
        points.push(this.getPointOfCircle(angle))
      }

      return points
    },

    getPointOfCircle (angle) {
      const radius = 0.5

      const x = radius + (radius * Math.cos(angle))
      const y = radius + (radius * Math.sin(angle))

      return { x, y }
    },

    gotoPoint () {
      const point = this.getPointOfCircle(this.currentAngle)

      this.gradient.fx = point.x
      this.gradient.fy = point.y
    },

    changeProgress ({ isAnimate = true }) {
      this.strokeDashoffset = ((100 - this.finishedPercentage) / 100) * this.circumference

      if (this.gradientAnimation) {
        clearInterval(this.gradientAnimation)
      }

      if (!isAnimate) {
        this.gotoNextStep()
        return
      }

      const angleOffset = (this.completedSteps - 1) * this.circleSlice
      let i = (this.currentAngle - angleOffset) / this.animateSlice
      const incrementer = Math.abs(i - this.totalPoints) / this.totalPoints
      const isMoveForward = i < this.totalPoints

      this.gradientAnimation = setInterval(() => {
        if (isMoveForward && i >= this.totalPoints ||
            !isMoveForward && i < this.totalPoints) {
          clearInterval(this.gradientAnimation)
          return
        }

        this.currentAngle = angleOffset + (this.animateSlice * i)
        this.gotoPoint()

        i += isMoveForward ? incrementer : -incrementer
      }, this.animationIncrements)
    },

    gotoNextStep () {
      this.currentAngle = this.completedSteps * this.circleSlice
      this.gotoPoint()
    }
  },

  watch: {
    totalSteps () {
      this.changeProgress({ isAnimate: true })
    },

    completedSteps () {
      this.changeProgress({ isAnimate: true })
    },

    diameter () {
      this.changeProgress({ isAnimate: true })
    },

    circleWidth () {
      this.changeProgress({ isAnimate: true })
    }
  },

  created () {
    this.changeProgress({ isAnimate: false })
  }
}
</script>

<style>
.circle-progress-container {
  position: relative;
}

.circle-progress-inner {
  position: absolute;
  top: 0; right: 0; bottom: 0; left: 0;
  border-radius: 50%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
