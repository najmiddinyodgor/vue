<template>
  <NuxtLink active-class="active" :to="path" :title="title">
    <i :class="icon"/>
  </NuxtLink>
</template>

<script>

export default {
  props: {
    path: {
      type: String,
      required: true
    },
    icon: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: false
    },
  },
}
</script>
