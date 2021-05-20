<template>
  <button :class="classes" :type="type" @click="clickHandler">
    <slot/>
  </button>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      required: false,
      default: "button"
    },
    outlined: {
      type: Boolean,
      required: false
    },
    clickHandler: {
      type: Function,
      required: false,
      default: () => {
        
      }
    }
  },
  computed: {
    classes() {
      return ['big-btn', this.outlined ? 'big-btn--outlined' : 'big-btn--filled'];
    },
  }
}
</script>
