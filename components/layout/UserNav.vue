<template>
  <nav class="user-nav">
    <UserNavButton v-for="{icon, path, title} in pages"
                   :key="icon"
                   :path="path"
                   :icon="icon"
                   :title="title"
                   class="user-nav-btn"
    />
  </nav>
</template>

<script>
import UserNavButton from "../buttons/IconButton";

export default {
  components: {UserNavButton},
  data() {
    return {
      isExpanded: false,
      pages: [
        {
          icon: "ri-settings-4-line",
          path: "/page"
        },
        {
          icon: "ri-notification-2-line",
          path: "/page"
        },
        {
          icon: "ri-account-circle-line",
          path: "/page"
        },
      ]
    }
  }
}
</script>
