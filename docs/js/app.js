/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./demo/main.js":
/*!**********************!*\
  !*** ./demo/main.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm-bundler.js\");\n/* harmony import */ var _Demo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Demo */ \"./demo/Demo.vue\");\n\n\n(0,vue__WEBPACK_IMPORTED_MODULE_0__.createApp)(_Demo__WEBPACK_IMPORTED_MODULE_1__[\"default\"]).mount('#app');\n\n//# sourceURL=webpack://vue-progress-circle/./demo/main.js?");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./demo/Demo.vue?vue&type=script&setup=true&lang=js":
/*!***************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./demo/Demo.vue?vue&type=script&setup=true&lang=js ***!
  \***************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm-bundler.js\");\n/* harmony import */ var _src_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/index */ \"./src/index.js\");\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  __name: 'Demo',\n  setup(__props, {\n    expose: __expose\n  }) {\n    __expose();\n    const cpTotalSteps = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(10);\n    const cpCompletedSteps = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(6);\n    const cpStartColor = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)('#FF0000');\n    const cpStopColor = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)('#0000FF');\n    const cpCircleColor = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)('#000000');\n    const cpCircleWidth = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(15);\n    const cpInnerDisplay = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)('slot');\n    const cpAnimationDuration = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(1000);\n    const cpInnerColor = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)('transparent');\n    const cpPercentColor = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)('inherit');\n    const cpDiameter = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(200);\n    const cpCircleOrigin = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)('top');\n    const cpReverseRotation = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(false);\n    const __returned__ = {\n      cpTotalSteps,\n      cpCompletedSteps,\n      cpStartColor,\n      cpStopColor,\n      cpCircleColor,\n      cpCircleWidth,\n      cpInnerDisplay,\n      cpAnimationDuration,\n      cpInnerColor,\n      cpPercentColor,\n      cpDiameter,\n      cpCircleOrigin,\n      cpReverseRotation,\n      ref: vue__WEBPACK_IMPORTED_MODULE_0__.ref,\n      get ProgressCircle() {\n        return _src_index__WEBPACK_IMPORTED_MODULE_1__.ProgressCircle;\n      }\n    };\n    Object.defineProperty(__returned__, '__isScriptSetup', {\n      enumerable: false,\n      value: true\n    });\n    return __returned__;\n  }\n});\n\n//# sourceURL=webpack://vue-progress-circle/./demo/Demo.vue?./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use%5B0%5D!./node_modules/vue-loader/dist/index.js??ruleSet%5B0%5D.use%5B0%5D");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/ProgressCircle.vue?vue&type=script&setup=true&lang=js":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/ProgressCircle.vue?vue&type=script&setup=true&lang=js ***!
  \***********************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm-bundler.js\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  __name: 'ProgressCircle',\n  props: {\n    diameter: {\n      type: Number,\n      default: 100\n    },\n    totalSteps: {\n      type: Number,\n      required: true,\n      default: 10\n    },\n    completedSteps: {\n      type: Number,\n      required: true,\n      default: 0\n    },\n    startColor: {\n      type: String,\n      default: '#FF0000'\n    },\n    stopColor: {\n      type: String,\n      default: '#0000FF'\n    },\n    circleWidth: {\n      type: Number,\n      default: 10\n    },\n    animationDuration: {\n      type: Number,\n      default: 1000\n    },\n    circleColor: {\n      type: String,\n      default: '#000000'\n    },\n    innerDisplay: {\n      type: String,\n      default: 'slot'\n    },\n    percentColor: {\n      type: String,\n      default: 'inherit'\n    },\n    innerColor: {\n      type: String,\n      default: 'transparent'\n    },\n    circleOrigin: {\n      type: String,\n      default: 'top'\n    },\n    reverseRotation: {\n      type: Boolean,\n      default: false\n    },\n    afterMountDelay: {\n      type: Number,\n      default: 0\n    }\n  },\n  setup(__props, {\n    expose: __expose\n  }) {\n    __expose();\n    const props = __props;\n    const gradient = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)({\n      fx: 1,\n      fy: 0.5,\n      cx: 0.5,\n      cy: 0.5,\n      r: 0.65\n    });\n    const gradientAnimation = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null);\n    const currentAngle = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(0);\n    const strokeDashoffset = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(0);\n    const animationIncrements = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(1000 / 60);\n    const generatedUid = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)('');\n\n    // computed\n    const radius = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {\n      return props.diameter / 2;\n    });\n    const innerCircleDiameter = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {\n      return props.diameter - props.circleWidth * 2;\n    });\n    const circumference = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {\n      return Math.PI * innerCircleDiameter.value;\n    });\n    const finishedPercentage = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {\n      return stepSize.value * props.completedSteps;\n    });\n    const finishedPercentageRounded = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {\n      return Math.round(finishedPercentage.value);\n    });\n    const circleSlice = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {\n      return 2 * Math.PI / props.totalSteps;\n    });\n    const totalPoints = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {\n      return props.animationDuration / animationIncrements.value;\n    });\n    const animateSlice = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {\n      return circleSlice.value / totalPoints.value;\n    });\n    const innerCircleRadius = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {\n      return innerCircleDiameter.value / 2;\n    });\n    const startCircleWithAngle = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {\n      switch (props.circleOrigin) {\n        case 'bottom':\n          return 90;\n        case 'right':\n          return 0;\n        case 'left':\n          return 180;\n      }\n      return 270;\n    });\n    const stepSize = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {\n      if (props.totalSteps === 0) {\n        return 0;\n      }\n      return 100 / props.totalSteps;\n    });\n    const containerStyle = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {\n      return {\n        height: `${props.diameter}px`,\n        width: `${props.diameter}px`\n      };\n    });\n    const progressStyle = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {\n      return {\n        height: `${props.diameter}px`,\n        width: `${props.diameter}px`,\n        strokeWidth: `${props.circleWidth}px`,\n        strokeDashoffset: strokeDashoffset.value,\n        transition: `stroke-dashoffset ${props.animationDuration}ms linear`\n      };\n    });\n    const strokeStyle = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {\n      return {\n        height: `${props.diameter}px`,\n        width: `${props.diameter}px`,\n        strokeWidth: `${props.circleWidth}px`\n      };\n    });\n    const percentStyle = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {\n      return {\n        fontSize: `${props.diameter / 2}px`,\n        color: `${props.percentColor}`,\n        display: 'block'\n      };\n    });\n    const innerCircleStyle = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {\n      return {\n        width: `${innerCircleDiameter.value}px`\n      };\n    });\n\n    // methods\n    const getPointOfCircle = angle => {\n      const radius = 0.5;\n      const x = radius + radius * Math.cos(angle);\n      const y = radius + radius * Math.sin(angle);\n      return {\n        x,\n        y\n      };\n    };\n    const gotoPoint = () => {\n      const point = getPointOfCircle(currentAngle.value);\n      gradient.value.fx = point.x;\n      gradient.value.fy = point.y;\n    };\n    const gotoNextStep = () => {\n      currentAngle.value = props.completedSteps * circleSlice.value;\n      gotoPoint();\n    };\n    const changeProgress = (isAnimate = true) => {\n      strokeDashoffset.value = (100 - finishedPercentage.value) / 100 * circumference.value;\n      if (props.reverseRotation) strokeDashoffset.value = -strokeDashoffset.value;\n      if (gradientAnimation.value) {\n        clearInterval(gradientAnimation.value);\n      }\n      if (!isAnimate) {\n        gotoNextStep();\n        return;\n      }\n      const angleOffset = (props.completedSteps - 1) * circleSlice.value;\n      let i = (currentAngle.value - angleOffset) / animateSlice.value;\n      const incrementer = Math.abs(i - totalPoints.value) / totalPoints.value;\n      const isMoveForward = i < totalPoints.value;\n      gradientAnimation.value = setInterval(() => {\n        if (isMoveForward && i >= totalPoints.value || !isMoveForward && i < totalPoints.value) {\n          clearInterval(gradientAnimation.value);\n          return;\n        }\n        currentAngle.value = angleOffset + animateSlice.value * i;\n        gotoPoint();\n        i += isMoveForward ? incrementer : -incrementer;\n      }, animationIncrements.value);\n    };\n    (0,vue__WEBPACK_IMPORTED_MODULE_0__.watch)(() => props.totalSteps, (newValue, oldValue) => {\n      changeProgress(true);\n    });\n    (0,vue__WEBPACK_IMPORTED_MODULE_0__.watch)(() => props.completedSteps, (newValue, oldValue) => {\n      changeProgress(true);\n    });\n    (0,vue__WEBPACK_IMPORTED_MODULE_0__.watch)(() => props.diameter, (newValue, oldValue) => {\n      changeProgress(true);\n    });\n    (0,vue__WEBPACK_IMPORTED_MODULE_0__.watch)(() => props.circleWidth, (newValue, oldValue) => {\n      changeProgress(true);\n    });\n    (0,vue__WEBPACK_IMPORTED_MODULE_0__.watch)(() => props.reverseRotation, (newValue, oldValue) => {\n      changeProgress(false);\n    });\n    (0,vue__WEBPACK_IMPORTED_MODULE_0__.onMounted)(() => {\n      generatedUid.value = 'progresscircle_' + Math.random().toString(36).substring(2, 9);\n      if (props.afterMountDelay) {\n        strokeDashoffset.value = circumference.value;\n        if (props.reverseRotation) strokeDashoffset.value = -strokeDashoffset.value;\n        setTimeout(() => {\n          changeProgress(false);\n        }, props.afterMountDelay);\n      } else {\n        changeProgress(false);\n      }\n    });\n    const __returned__ = {\n      props,\n      gradient,\n      gradientAnimation,\n      currentAngle,\n      strokeDashoffset,\n      animationIncrements,\n      generatedUid,\n      radius,\n      innerCircleDiameter,\n      circumference,\n      finishedPercentage,\n      finishedPercentageRounded,\n      circleSlice,\n      totalPoints,\n      animateSlice,\n      innerCircleRadius,\n      startCircleWithAngle,\n      stepSize,\n      containerStyle,\n      progressStyle,\n      strokeStyle,\n      percentStyle,\n      innerCircleStyle,\n      getPointOfCircle,\n      gotoPoint,\n      gotoNextStep,\n      changeProgress,\n      ref: vue__WEBPACK_IMPORTED_MODULE_0__.ref,\n      computed: vue__WEBPACK_IMPORTED_MODULE_0__.computed,\n      watch: vue__WEBPACK_IMPORTED_MODULE_0__.watch,\n      onMounted: vue__WEBPACK_IMPORTED_MODULE_0__.onMounted\n    };\n    Object.defineProperty(__returned__, '__isScriptSetup', {\n      enumerable: false,\n      value: true\n    });\n    return __returned__;\n  }\n});\n\n//# sourceURL=webpack://vue-progress-circle/./src/components/ProgressCircle.vue?./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use%5B0%5D!./node_modules/vue-loader/dist/index.js??ruleSet%5B0%5D.use%5B0%5D");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./demo/Demo.vue?vue&type=template&id=4e98d191":
/*!********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./demo/Demo.vue?vue&type=template&id=4e98d191 ***!
  \********************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   render: function() { return /* binding */ render; }\n/* harmony export */ });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm-bundler.js\");\n\nconst _hoisted_1 = {\n  class: \"container\"\n};\nconst _hoisted_2 = {\n  class: \"playWith\"\n};\nconst _hoisted_3 = {\n  class: \"gallery\"\n};\nfunction render(_ctx, _cache, $props, $setup, $data, $options) {\n  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"div\", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"fieldset\", null, [_cache[38] || (_cache[38] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"h1\", null, \"Circle progress\", -1 /* HOISTED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_2, [_cache[15] || (_cache[15] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"h2\", null, \"Play with it\", -1 /* HOISTED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup[\"ProgressCircle\"], {\n    diameter: $setup.cpDiameter,\n    \"completed-steps\": $setup.cpCompletedSteps,\n    \"circle-color\": $setup.cpCircleColor,\n    \"start-color\": $setup.cpStartColor,\n    \"stop-color\": $setup.cpStopColor,\n    \"circle-width\": $setup.cpCircleWidth,\n    \"animation-duration\": $setup.cpAnimationDuration,\n    \"inner-color\": $setup.cpInnerColor,\n    \"total-steps\": $setup.cpTotalSteps,\n    \"inner-display\": $setup.cpInnerDisplay,\n    \"circle-origin\": $setup.cpCircleOrigin,\n    \"reverse-rotation\": $setup.cpReverseRotation,\n    \"percent-color\": $setup.cpPercentColor\n  }, {\n    default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"p\", null, \"Total steps: \" + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.cpTotalSteps), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"p\", null, \"Completed steps: \" + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.cpCompletedSteps), 1 /* TEXT */)]),\n    _: 1 /* STABLE */\n  }, 8 /* PROPS */, [\"diameter\", \"completed-steps\", \"circle-color\", \"start-color\", \"stop-color\", \"circle-width\", \"animation-duration\", \"inner-color\", \"total-steps\", \"inner-display\", \"circle-origin\", \"reverse-rotation\", \"percent-color\"]), _cache[16] || (_cache[16] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"hr\", null, null, -1 /* HOISTED */)), _cache[17] || (_cache[17] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"label\", {\n    for: \"cpTotalSteps\"\n  }, \"Total steps:\", -1 /* HOISTED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"input\", {\n    type: \"number\",\n    \"onUpdate:modelValue\": _cache[0] || (_cache[0] = $event => $setup.cpTotalSteps = $event),\n    id: \"cpTotalSteps\"\n  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.cpTotalSteps]]), _cache[18] || (_cache[18] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"label\", {\n    for: \"cpCompletedSteps\"\n  }, \"Completed:\", -1 /* HOISTED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"input\", {\n    type: \"number\",\n    \"onUpdate:modelValue\": _cache[1] || (_cache[1] = $event => $setup.cpCompletedSteps = $event),\n    id: \"cpCompletedSteps\"\n  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.cpCompletedSteps]]), _cache[19] || (_cache[19] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"br\", null, null, -1 /* HOISTED */)), _cache[20] || (_cache[20] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"label\", {\n    for: \"cpCircleWidth\"\n  }, \"Circle width:\", -1 /* HOISTED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"input\", {\n    type: \"number\",\n    \"onUpdate:modelValue\": _cache[2] || (_cache[2] = $event => $setup.cpCircleWidth = $event),\n    id: \"cpCircleWidth\"\n  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.cpCircleWidth]]), _cache[21] || (_cache[21] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"label\", {\n    for: \"cpDiameter\"\n  }, \"Diameter:\", -1 /* HOISTED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"input\", {\n    type: \"number\",\n    \"onUpdate:modelValue\": _cache[3] || (_cache[3] = $event => $setup.cpDiameter = $event),\n    id: \"cpDiameter\"\n  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.cpDiameter]]), _cache[22] || (_cache[22] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"br\", null, null, -1 /* HOISTED */)), _cache[23] || (_cache[23] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"label\", {\n    for: \"cpStartColor\"\n  }, \"Start color:\", -1 /* HOISTED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"input\", {\n    type: \"text\",\n    \"onUpdate:modelValue\": _cache[4] || (_cache[4] = $event => $setup.cpStartColor = $event),\n    id: \"cpStartColor\"\n  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.cpStartColor]]), _cache[24] || (_cache[24] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"label\", {\n    for: \"cpStopColor\"\n  }, \"Stop color:\", -1 /* HOISTED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"input\", {\n    type: \"text\",\n    \"onUpdate:modelValue\": _cache[5] || (_cache[5] = $event => $setup.cpStopColor = $event),\n    id: \"cpStopColor\"\n  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.cpStopColor]]), _cache[25] || (_cache[25] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"br\", null, null, -1 /* HOISTED */)), _cache[26] || (_cache[26] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"label\", {\n    for: \"cpCircleColor\"\n  }, \"Circle color:\", -1 /* HOISTED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"input\", {\n    type: \"text\",\n    \"onUpdate:modelValue\": _cache[6] || (_cache[6] = $event => $setup.cpCircleColor = $event),\n    id: \"cpCircleColor\"\n  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.cpCircleColor]]), _cache[27] || (_cache[27] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"label\", {\n    for: \"cpInnerColor\"\n  }, \"Inner color:\", -1 /* HOISTED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"input\", {\n    type: \"text\",\n    \"onUpdate:modelValue\": _cache[7] || (_cache[7] = $event => $setup.cpInnerColor = $event),\n    id: \"cpInnerColor\"\n  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.cpInnerColor]]), _cache[28] || (_cache[28] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"br\", null, null, -1 /* HOISTED */)), _cache[29] || (_cache[29] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"label\", {\n    for: \"cpInnerDisplay\"\n  }, \"Inner display:\", -1 /* HOISTED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"select\", {\n    \"onUpdate:modelValue\": _cache[8] || (_cache[8] = $event => $setup.cpInnerDisplay = $event),\n    id: \"cpInnerDisplay\"\n  }, _cache[13] || (_cache[13] = [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"option\", {\n    value: \"slot\"\n  }, \"Slot (default)\", -1 /* HOISTED */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"option\", {\n    value: \"percent\"\n  }, \"Percent\", -1 /* HOISTED */)]), 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, $setup.cpInnerDisplay]]), _cache[30] || (_cache[30] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"label\", {\n    for: \"cpPercentColor\"\n  }, \"Percent color:\", -1 /* HOISTED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"input\", {\n    type: \"text\",\n    \"onUpdate:modelValue\": _cache[9] || (_cache[9] = $event => $setup.cpPercentColor = $event),\n    id: \"cpPercentColor\"\n  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.cpPercentColor]]), _cache[31] || (_cache[31] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"br\", null, null, -1 /* HOISTED */)), _cache[32] || (_cache[32] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"label\", {\n    for: \"cpAnimationDuration\"\n  }, \"Animation duration:\", -1 /* HOISTED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"input\", {\n    type: \"number\",\n    \"onUpdate:modelValue\": _cache[10] || (_cache[10] = $event => $setup.cpAnimationDuration = $event),\n    id: \"cpAnimationDuration\"\n  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.cpAnimationDuration]]), _cache[33] || (_cache[33] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"br\", null, null, -1 /* HOISTED */)), _cache[34] || (_cache[34] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"label\", {\n    for: \"cpCircleOrigin\"\n  }, \"Circle origin:\", -1 /* HOISTED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"select\", {\n    \"onUpdate:modelValue\": _cache[11] || (_cache[11] = $event => $setup.cpCircleOrigin = $event),\n    id: \"cpCircleOrigin\"\n  }, _cache[14] || (_cache[14] = [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"option\", {\n    value: \"top\"\n  }, \"Top (default)\", -1 /* HOISTED */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"option\", {\n    value: \"right\"\n  }, \"Right\", -1 /* HOISTED */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"option\", {\n    value: \"bottom\"\n  }, \"Bottom\", -1 /* HOISTED */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"option\", {\n    value: \"left\"\n  }, \"Left\", -1 /* HOISTED */)]), 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, $setup.cpCircleOrigin]]), _cache[35] || (_cache[35] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"label\", {\n    for: \"cpReverseRotation\"\n  }, \"Reverse rotation:\", -1 /* HOISTED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"input\", {\n    type: \"checkbox\",\n    \"onUpdate:modelValue\": _cache[12] || (_cache[12] = $event => $setup.cpReverseRotation = $event),\n    id: \"cpReverseRotation\"\n  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $setup.cpReverseRotation]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_3, [_cache[37] || (_cache[37] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"h2\", null, \"Gallery\", -1 /* HOISTED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup[\"ProgressCircle\"], {\n    diameter: 50,\n    \"completed-steps\": 7,\n    \"total-steps\": 10,\n    \"circle-width\": 5\n  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup[\"ProgressCircle\"], {\n    diameter: 75,\n    \"circle-width\": 15,\n    \"completed-steps\": 3,\n    \"total-steps\": 10,\n    \"start-color\": \"#BBFF42\",\n    \"stop-color\": \"#429321\",\n    \"circle-color\": \"#323232\"\n  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup[\"ProgressCircle\"], {\n    class: \"sample1\",\n    \"completed-steps\": 9,\n    \"total-steps\": 10,\n    \"start-color\": \"var(--my-color)\",\n    \"stop-color\": \"var(--my-color)\",\n    \"circle-color\": \"#AAA\",\n    \"inner-color\": \"#222\"\n  }, {\n    default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => _cache[36] || (_cache[36] = [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"span\", {\n      style: {\n        \"color\": \"white\"\n      }\n    }, \"Progress\", -1 /* HOISTED */)])),\n    _: 1 /* STABLE */\n  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup[\"ProgressCircle\"], {\n    class: \"sample2\",\n    \"completed-steps\": 12,\n    \"total-steps\": 27,\n    \"start-color\": \"var(--my-color)\",\n    \"stop-color\": \"var(--my-color)\",\n    \"circle-color\": \"transparent\",\n    \"inner-color\": \"#2C3E50\",\n    \"inner-display\": \"percent\",\n    \"percent-color\": \"white\",\n    \"circle-origin\": \"bottom\",\n    \"reverse-rotation\": true,\n    \"after-mount-delay\": 1000\n  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup[\"ProgressCircle\"], {\n    \"completed-steps\": 38,\n    \"total-steps\": 53,\n    \"start-color\": \"#2C3E50\",\n    \"stop-color\": \"#BDC3C7\",\n    \"circle-color\": \"#FFF\",\n    \"inner-display\": \"percent\",\n    \"percent-color\": \"#BDC3C7\",\n    \"circle-origin\": \"bottom\",\n    \"reverse-rotation\": true,\n    \"after-mount-delay\": 1000\n  })])])]);\n}\n\n//# sourceURL=webpack://vue-progress-circle/./demo/Demo.vue?./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use%5B0%5D!./node_modules/vue-loader/dist/templateLoader.js??ruleSet%5B1%5D.rules%5B3%5D!./node_modules/vue-loader/dist/index.js??ruleSet%5B0%5D.use%5B0%5D");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/ProgressCircle.vue?vue&type=template&id=f2d225e6":
/*!****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/ProgressCircle.vue?vue&type=template&id=f2d225e6 ***!
  \****************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   render: function() { return /* binding */ render; }\n/* harmony export */ });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm-bundler.js\");\n\nconst _hoisted_1 = [\"width\", \"height\"];\nconst _hoisted_2 = [\"id\", \"fx\", \"fy\", \"cx\", \"cy\", \"r\"];\nconst _hoisted_3 = [\"stop-color\"];\nconst _hoisted_4 = [\"stop-color\"];\nconst _hoisted_5 = [\"r\", \"cx\", \"cy\", \"fill\", \"stroke\", \"stroke-dasharray\"];\nconst _hoisted_6 = [\"transform\", \"r\", \"cx\", \"cy\", \"fill\", \"stroke\", \"stroke-dasharray\", \"stroke-dashoffset\"];\nfunction render(_ctx, _cache, $props, $setup, $data, $options) {\n  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"div\", {\n    class: \"progress-circle-container\",\n    style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)($setup.containerStyle)\n  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", {\n    class: \"progress-circle-inner\",\n    style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)($setup.innerCircleStyle)\n  }, [$props.innerDisplay === 'percent' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"span\", {\n    key: 0,\n    style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)($setup.percentStyle)\n  }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.finishedPercentageRounded), 5 /* TEXT, STYLE */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, \"default\", {\n    key: 1\n  })], 4 /* STYLE */), ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"svg\", {\n    class: \"progress-circle-bar\",\n    width: $props.diameter,\n    height: $props.diameter,\n    version: \"1.1\",\n    xmlns: \"http://www.w3.org/2000/svg\"\n  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"defs\", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"radialGradient\", {\n    id: 'radial-gradient' + $setup.generatedUid,\n    fx: $setup.gradient.fx,\n    fy: $setup.gradient.fy,\n    cx: $setup.gradient.cx,\n    cy: $setup.gradient.cy,\n    r: $setup.gradient.r\n  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"stop\", {\n    offset: \"50%\",\n    \"stop-color\": $props.startColor\n  }, null, 8 /* PROPS */, _hoisted_3), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"stop\", {\n    offset: \"100%\",\n    \"stop-color\": $props.stopColor\n  }, null, 8 /* PROPS */, _hoisted_4)], 8 /* PROPS */, _hoisted_2)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"circle\", {\n    r: $setup.innerCircleRadius,\n    cx: $setup.radius,\n    cy: $setup.radius,\n    fill: $props.innerColor,\n    stroke: $props.circleColor,\n    \"stroke-dasharray\": $setup.circumference,\n    \"stroke-dashoffset\": \"0\",\n    \"stroke-linecap\": \"round\",\n    style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)($setup.strokeStyle)\n  }, null, 12 /* STYLE, PROPS */, _hoisted_5), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"circle\", {\n    transform: 'rotate(' + $setup.startCircleWithAngle + ', ' + $setup.radius + ',' + $setup.radius + ')',\n    r: $setup.innerCircleRadius,\n    cx: $setup.radius,\n    cy: $setup.radius,\n    fill: $props.innerColor,\n    stroke: 'url(#radial-gradient' + $setup.generatedUid + ')',\n    \"stroke-dasharray\": $setup.circumference,\n    \"stroke-dashoffset\": $setup.circumference,\n    \"stroke-linecap\": \"round\",\n    style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)($setup.progressStyle)\n  }, null, 12 /* STYLE, PROPS */, _hoisted_6)], 8 /* PROPS */, _hoisted_1))], 4 /* STYLE */);\n}\n\n//# sourceURL=webpack://vue-progress-circle/./src/components/ProgressCircle.vue?./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use%5B0%5D!./node_modules/vue-loader/dist/templateLoader.js??ruleSet%5B1%5D.rules%5B3%5D!./node_modules/vue-loader/dist/index.js??ruleSet%5B0%5D.use%5B0%5D");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ProgressCircle: function() { return /* reexport safe */ _components_ProgressCircle_vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; },\n/* harmony export */   install: function() { return /* binding */ install; }\n/* harmony export */ });\n/* harmony import */ var _components_ProgressCircle_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/ProgressCircle.vue */ \"./src/components/ProgressCircle.vue\");\n/* harmony import */ var _styles_common_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/common.scss */ \"./src/styles/common.scss\");\n/* harmony import */ var _styles_common_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_common_scss__WEBPACK_IMPORTED_MODULE_1__);\n// Component imports\n\n\n\n// Default export for global usage\nconst install = app => {\n  app.component('progress-circle', _components_ProgressCircle_vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (install);\n\n// Named export for specific usage\n\n\n//# sourceURL=webpack://vue-progress-circle/./src/index.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./demo/Demo.vue?vue&type=style&index=0&id=4e98d191&lang=css":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./demo/Demo.vue?vue&type=style&index=0&id=4e98d191&lang=css ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"\\nh1 {\\r\\n  margin-top: 0;\\r\\n  margin-bottom: 0;\\n}\\n.container {\\r\\n  margin-top: 20px;\\n}\\n.playWith {\\r\\n  width: 70%;\\r\\n  float: left;\\n}\\n.gallery {\\r\\n  float: right;\\r\\n  width: 20%;\\n}\\n.sample1 {\\r\\n  --my-color: #C0392B;\\n}\\n.sample2 {\\r\\n  --my-color: #3498DB;\\n}\\n.half {\\r\\n  width: 50%;\\r\\n  float: left;\\n}\\r\\n\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://vue-progress-circle/./demo/Demo.vue?./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use%5B1%5D!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use%5B2%5D!./node_modules/vue-loader/dist/index.js??ruleSet%5B0%5D.use%5B0%5D");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-24.use[1]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-24.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-24.use[3]!./src/styles/common.scss":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-24.use[1]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-24.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-24.use[3]!./src/styles/common.scss ***!
  \**********************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".progress-circle-container {\\n  position: relative;\\n}\\n\\n.progress-circle-inner {\\n  position: absolute;\\n  top: 0;\\n  right: 0;\\n  bottom: 0;\\n  left: 0;\\n  border-radius: 50%;\\n  margin: 0 auto;\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  justify-content: center;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://vue-progress-circle/./src/styles/common.scss?./node_modules/css-loader/dist/cjs.js??clonedRuleSet-24.use%5B1%5D!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-24.use%5B2%5D!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-24.use%5B3%5D");

/***/ }),

/***/ "./demo/Demo.vue":
/*!***********************!*\
  !*** ./demo/Demo.vue ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Demo_vue_vue_type_template_id_4e98d191__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Demo.vue?vue&type=template&id=4e98d191 */ \"./demo/Demo.vue?vue&type=template&id=4e98d191\");\n/* harmony import */ var _Demo_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Demo.vue?vue&type=script&setup=true&lang=js */ \"./demo/Demo.vue?vue&type=script&setup=true&lang=js\");\n/* harmony import */ var _Demo_vue_vue_type_style_index_0_id_4e98d191_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Demo.vue?vue&type=style&index=0&id=4e98d191&lang=css */ \"./demo/Demo.vue?vue&type=style&index=0&id=4e98d191&lang=css\");\n/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../node_modules/vue-loader/dist/exportHelper.js */ \"./node_modules/vue-loader/dist/exportHelper.js\");\n\n\n\n\n;\n\n\nconst __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_Demo_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"], [['render',_Demo_vue_vue_type_template_id_4e98d191__WEBPACK_IMPORTED_MODULE_0__.render],['__file',\"demo/Demo.vue\"]])\n/* hot reload */\nif (false) {}\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (__exports__);\n\n//# sourceURL=webpack://vue-progress-circle/./demo/Demo.vue?");

/***/ }),

/***/ "./src/components/ProgressCircle.vue":
/*!*******************************************!*\
  !*** ./src/components/ProgressCircle.vue ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ProgressCircle_vue_vue_type_template_id_f2d225e6__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProgressCircle.vue?vue&type=template&id=f2d225e6 */ \"./src/components/ProgressCircle.vue?vue&type=template&id=f2d225e6\");\n/* harmony import */ var _ProgressCircle_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProgressCircle.vue?vue&type=script&setup=true&lang=js */ \"./src/components/ProgressCircle.vue?vue&type=script&setup=true&lang=js\");\n/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/vue-loader/dist/exportHelper.js */ \"./node_modules/vue-loader/dist/exportHelper.js\");\n\n\n\n\n;\nconst __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_ProgressCircle_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"], [['render',_ProgressCircle_vue_vue_type_template_id_f2d225e6__WEBPACK_IMPORTED_MODULE_0__.render],['__file',\"src/components/ProgressCircle.vue\"]])\n/* hot reload */\nif (false) {}\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (__exports__);\n\n//# sourceURL=webpack://vue-progress-circle/./src/components/ProgressCircle.vue?");

/***/ }),

/***/ "./demo/Demo.vue?vue&type=script&setup=true&lang=js":
/*!**********************************************************!*\
  !*** ./demo/Demo.vue?vue&type=script&setup=true&lang=js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Demo_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; }\n/* harmony export */ });\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Demo_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Demo.vue?vue&type=script&setup=true&lang=js */ \"./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./demo/Demo.vue?vue&type=script&setup=true&lang=js\");\n \n\n//# sourceURL=webpack://vue-progress-circle/./demo/Demo.vue?");

/***/ }),

/***/ "./src/components/ProgressCircle.vue?vue&type=script&setup=true&lang=js":
/*!******************************************************************************!*\
  !*** ./src/components/ProgressCircle.vue?vue&type=script&setup=true&lang=js ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ProgressCircle_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; }\n/* harmony export */ });\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ProgressCircle_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ProgressCircle.vue?vue&type=script&setup=true&lang=js */ \"./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/ProgressCircle.vue?vue&type=script&setup=true&lang=js\");\n \n\n//# sourceURL=webpack://vue-progress-circle/./src/components/ProgressCircle.vue?");

/***/ }),

/***/ "./demo/Demo.vue?vue&type=template&id=4e98d191":
/*!*****************************************************!*\
  !*** ./demo/Demo.vue?vue&type=template&id=4e98d191 ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   render: function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Demo_vue_vue_type_template_id_4e98d191__WEBPACK_IMPORTED_MODULE_0__.render; }\n/* harmony export */ });\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Demo_vue_vue_type_template_id_4e98d191__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Demo.vue?vue&type=template&id=4e98d191 */ \"./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./demo/Demo.vue?vue&type=template&id=4e98d191\");\n\n\n//# sourceURL=webpack://vue-progress-circle/./demo/Demo.vue?");

/***/ }),

/***/ "./src/components/ProgressCircle.vue?vue&type=template&id=f2d225e6":
/*!*************************************************************************!*\
  !*** ./src/components/ProgressCircle.vue?vue&type=template&id=f2d225e6 ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   render: function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ProgressCircle_vue_vue_type_template_id_f2d225e6__WEBPACK_IMPORTED_MODULE_0__.render; }\n/* harmony export */ });\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ProgressCircle_vue_vue_type_template_id_f2d225e6__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ProgressCircle.vue?vue&type=template&id=f2d225e6 */ \"./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/ProgressCircle.vue?vue&type=template&id=f2d225e6\");\n\n\n//# sourceURL=webpack://vue-progress-circle/./src/components/ProgressCircle.vue?");

/***/ }),

/***/ "./demo/Demo.vue?vue&type=style&index=0&id=4e98d191&lang=css":
/*!*******************************************************************!*\
  !*** ./demo/Demo.vue?vue&type=style&index=0&id=4e98d191&lang=css ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_style_loader_index_js_clonedRuleSet_12_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Demo_vue_vue_type_style_index_0_id_4e98d191_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/vue-style-loader/index.js??clonedRuleSet-12.use[0]!../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../node_modules/vue-loader/dist/stylePostLoader.js!../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Demo.vue?vue&type=style&index=0&id=4e98d191&lang=css */ \"./node_modules/vue-style-loader/index.js??clonedRuleSet-12.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./demo/Demo.vue?vue&type=style&index=0&id=4e98d191&lang=css\");\n/* harmony import */ var _node_modules_vue_style_loader_index_js_clonedRuleSet_12_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Demo_vue_vue_type_style_index_0_id_4e98d191_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_clonedRuleSet_12_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Demo_vue_vue_type_style_index_0_id_4e98d191_lang_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_clonedRuleSet_12_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Demo_vue_vue_type_style_index_0_id_4e98d191_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== \"default\") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _node_modules_vue_style_loader_index_js_clonedRuleSet_12_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Demo_vue_vue_type_style_index_0_id_4e98d191_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)\n/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);\n\n\n//# sourceURL=webpack://vue-progress-circle/./demo/Demo.vue?");

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js??clonedRuleSet-12.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./demo/Demo.vue?vue&type=style&index=0&id=4e98d191&lang=css":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader/index.js??clonedRuleSet-12.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./demo/Demo.vue?vue&type=style&index=0&id=4e98d191&lang=css ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("// style-loader: Adds some css to the DOM by adding a <style> tag\n\n// load the styles\nvar content = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../node_modules/vue-loader/dist/stylePostLoader.js!../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Demo.vue?vue&type=style&index=0&id=4e98d191&lang=css */ \"./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./demo/Demo.vue?vue&type=style&index=0&id=4e98d191&lang=css\");\nif(content.__esModule) content = content.default;\nif(typeof content === 'string') content = [[module.id, content, '']];\nif(content.locals) module.exports = content.locals;\n// add the styles to the DOM\nvar add = (__webpack_require__(/*! !../node_modules/vue-style-loader/lib/addStylesClient.js */ \"./node_modules/vue-style-loader/lib/addStylesClient.js\")[\"default\"])\nvar update = add(\"37bfffba\", content, false, {\"sourceMap\":false,\"shadowMode\":false});\n// Hot Module Replacement\nif(false) {}\n\n//# sourceURL=webpack://vue-progress-circle/./demo/Demo.vue?./node_modules/vue-style-loader/index.js??clonedRuleSet-12.use%5B0%5D!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use%5B1%5D!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use%5B2%5D!./node_modules/vue-loader/dist/index.js??ruleSet%5B0%5D.use%5B0%5D");

/***/ }),

/***/ "./src/styles/common.scss":
/*!********************************!*\
  !*** ./src/styles/common.scss ***!
  \********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("// style-loader: Adds some css to the DOM by adding a <style> tag\n\n// load the styles\nvar content = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-24.use[1]!../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-24.use[2]!../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-24.use[3]!./common.scss */ \"./node_modules/css-loader/dist/cjs.js??clonedRuleSet-24.use[1]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-24.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-24.use[3]!./src/styles/common.scss\");\nif(content.__esModule) content = content.default;\nif(typeof content === 'string') content = [[module.id, content, '']];\nif(content.locals) module.exports = content.locals;\n// add the styles to the DOM\nvar add = (__webpack_require__(/*! !../../node_modules/vue-style-loader/lib/addStylesClient.js */ \"./node_modules/vue-style-loader/lib/addStylesClient.js\")[\"default\"])\nvar update = add(\"72f112a5\", content, false, {\"sourceMap\":false,\"shadowMode\":false});\n// Hot Module Replacement\nif(false) {}\n\n//# sourceURL=webpack://vue-progress-circle/./src/styles/common.scss?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	!function() {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = function(result, chunkIds, fn, priority) {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every(function(key) { return __webpack_require__.O[key](chunkIds[j]); })) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"app": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = function(chunkId) { return installedChunks[chunkId] === 0; };
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some(function(id) { return installedChunks[id] !== 0; })) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkvue_progress_circle"] = self["webpackChunkvue_progress_circle"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["chunk-vendors"], function() { return __webpack_require__("./demo/main.js"); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;