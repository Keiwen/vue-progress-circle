<script setup>
import { ref, computed, watch, onMounted, defineProps } from 'vue'

const props = defineProps({
  diameter: { type: Number, default: 100 },
  totalSteps: { type: Number, required: true, default: 10 },
  completedSteps: { type: Number, required: true, default: 0 },
  startColor: { type: String, default: '#FF0000' },
  stopColor: { type: String, default: '#0000FF' },
  circleWidth: { type: Number, default: 10 },
  animationDuration: { type: Number, default: 1000 },
  circleColor: { type: String, default: '#000000' },
  innerDisplay: { type: String, default: 'slot' },
  percentColor: { type: String, default: 'inherit' },
  innerColor: { type: String, default: 'transparent' },
  circleOrigin: { type: String, default: 'top' },
  reverseRotation: { type: Boolean, default: false },
  afterMountDelay: { type: Number, default: 0 }
})

const gradient = ref({
  fx: 1,
  fy: 0.5,
  cx: 0.5,
  cy: 0.5,
  r: 0.65
})
const gradientAnimation = ref(null)
const currentAngle = ref(0)
const strokeDashoffset = ref(0)
const animationIncrements = ref(1000 / 60)
const generatedUid = ref('')

// computed
const radius = computed(() => { return props.diameter / 2 })
const innerCircleDiameter = computed(() => { return props.diameter - (props.circleWidth * 2) })
const circumference = computed(() => { return Math.PI * innerCircleDiameter.value })
const finishedPercentage = computed(() => { return stepSize.value * props.completedSteps })
const finishedPercentageRounded = computed(() => { return Math.round(finishedPercentage.value) })
const circleSlice = computed(() => { return (2 * Math.PI / props.totalSteps) })
const totalPoints = computed(() => { return (props.animationDuration / animationIncrements.value) })
const animateSlice = computed(() => { return circleSlice.value / totalPoints.value })
const innerCircleRadius = computed(() => { return innerCircleDiameter.value / 2 })
const startCircleWithAngle = computed(() => {
  switch (props.circleOrigin) {
    case 'bottom': return 90
    case 'right': return 0
    case 'left': return 180
  }
  return 270
})
const stepSize = computed(() => {
  if (props.totalSteps === 0) {
    return 0
  }
  return 100 / props.totalSteps
})
const containerStyle = computed(() => {
  return {
    height: `${props.diameter}px`,
    width: `${props.diameter}px`
  }
})
const progressStyle = computed(() => {
  return {
    height: `${props.diameter}px`,
    width: `${props.diameter}px`,
    strokeWidth: `${props.circleWidth}px`,
    strokeDashoffset: strokeDashoffset.value,
    transition: `stroke-dashoffset ${props.animationDuration}ms linear`
  }
})
const strokeStyle = computed(() => {
  return {
    height: `${props.diameter}px`,
    width: `${props.diameter}px`,
    strokeWidth: `${props.circleWidth}px`
  }
})
const percentStyle = computed(() => {
  return {
    fontSize: `${props.diameter / 2}px`,
    color: `${props.percentColor}`,
    display: 'block'
  }
})
const innerCircleStyle = computed(() => {
  return {
    width: `${innerCircleDiameter.value}px`
  }
})

// methods
const getPointOfCircle = (angle) => {
  const radius = 0.5
  const x = radius + (radius * Math.cos(angle))
  const y = radius + (radius * Math.sin(angle))
  return { x, y }
}
const gotoPoint = () => {
  const point = getPointOfCircle(currentAngle.value)
  gradient.value.fx = point.x
  gradient.value.fy = point.y
}
const gotoNextStep = () => {
  currentAngle.value = props.completedSteps * circleSlice.value
  gotoPoint()
}
const changeProgress = (isAnimate = true) => {
  strokeDashoffset.value = ((100 - finishedPercentage.value) / 100) * circumference.value
  if (props.reverseRotation) strokeDashoffset.value = -strokeDashoffset.value
  if (gradientAnimation.value) {
    clearInterval(gradientAnimation.value)
  }
  if (!isAnimate) {
    gotoNextStep()
    return
  }
  const angleOffset = (props.completedSteps - 1) * circleSlice.value
  let i = (currentAngle.value - angleOffset) / animateSlice.value
  const incrementer = Math.abs(i - totalPoints.value) / totalPoints.value
  const isMoveForward = i < totalPoints.value

  gradientAnimation.value = setInterval(() => {
    if ((isMoveForward && i >= totalPoints.value) ||
        (!isMoveForward && i < totalPoints.value)) {
      clearInterval(gradientAnimation.value)
      return
    }

    currentAngle.value = angleOffset + (animateSlice.value * i)
    gotoPoint()

    i += isMoveForward ? incrementer : -incrementer
  }, animationIncrements.value)
}

watch(() => props.totalSteps, (newValue, oldValue) => {
  changeProgress(true)
})
watch(() => props.completedSteps, (newValue, oldValue) => {
  changeProgress(true)
})
watch(() => props.diameter, (newValue, oldValue) => {
  changeProgress(true)
})
watch(() => props.circleWidth, (newValue, oldValue) => {
  changeProgress(true)
})
watch(() => props.reverseRotation, (newValue, oldValue) => {
  changeProgress(false)
})

onMounted(() => {
  generatedUid.value = 'progresscircle_' + Math.random().toString(36).substring(2, 9)
  if (props.afterMountDelay) {
    strokeDashoffset.value = circumference.value
    if (props.reverseRotation) strokeDashoffset.value = -strokeDashoffset.value
    setTimeout(() => {
      changeProgress(false)
    }, props.afterMountDelay)
  } else {
    changeProgress(false)
  }
})

</script>

<template>
  <div class="progress-circle-container" :style="containerStyle">
    <div class="progress-circle-inner" :style="innerCircleStyle">
      <span v-if="innerDisplay === 'percent'" :style="percentStyle">{{ finishedPercentageRounded }}</span>
      <slot v-else></slot>
    </div>
    <svg class="progress-circle-bar"
         :width="diameter"
         :height="diameter"
         version="1.1"
         xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient :id="'radial-gradient' + generatedUid"
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
      <circle :transform="'rotate(' + startCircleWithAngle + ', ' + radius + ',' + radius + ')'"
              :r="innerCircleRadius"
              :cx="radius"
              :cy="radius"
              :fill="innerColor"
              :stroke="'url(#radial-gradient' + generatedUid + ')'"
              :stroke-dasharray="circumference"
              :stroke-dashoffset="circumference"
              stroke-linecap="round"
              :style="progressStyle"></circle>
    </svg>
  </div>
</template>

<style>

</style>
