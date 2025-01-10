// Component imports
import ProgressCircle from './components/ProgressCircle.vue'
import './styles/common.scss'

// Default export for global usage
const install = (app) => {
  app.component('progress-circle', ProgressCircle)
}
export default install

// Named export for specific usage
export { install, ProgressCircle }
