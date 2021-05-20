<template>
  <div :class="classes">
    <div class="modal__wrap">
      <header class="modal__header">
        <slot name="header"/>
      </header>
      <main>
        <slot name="content"/>
      </main>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isOpened: {
      type: Boolean,
      required: true,
      default: false
    }
  },
  computed: {
    classes() {
      return ["modal ", {"modal--opened": this.isOpened}]
    }
  }
}
</script>

<style scoped>

</style>
