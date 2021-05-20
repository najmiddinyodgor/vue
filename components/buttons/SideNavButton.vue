<template>
  <NuxtLink class="side-nav-btn" active-class="active" :to="path">
    <span><slot/></span>
  </NuxtLink>
</template>

<script>

export default {
  props: {
    path: {
      type: String,
      required: true
    },
  },
}
</script>
