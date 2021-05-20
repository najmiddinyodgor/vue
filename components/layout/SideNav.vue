<template>
  <div class="side-nav">
    <Logo/>
    <nav class="page-nav">
      <IconButton v-for="{icon, path, title} in pages"
                  :key="icon"
                  :path="path"
                  :icon="icon"
                  :title="title"
                  class="nav-btn"
      />
    </nav>
  </div>
</template>

<script>
import Logo from "../Logo";
import IconButton from "../buttons/IconButton";

export default {
  components: {IconButton, Logo},
  data() {
    return {
      pages: [
        {
          title: "Title",
          icon: "ri-home-line",
          path: "/"
        },
        {
          title: "Title",
          icon: "ri-contacts-line",
          path: "/page"
        },
        {
          title: "Title",
          icon: "ri-money-dollar-circle-line",
          path: "/page"
        },
        {
          title: "Title",
          icon: "ri-ticket-2-line",
          path: "/page"
        },
        {
          title: "Title",
          icon: "ri-file-list-3-line",
          path: "/page"
        },
        {
          title: "Title",
          icon: "ri-folder-open-line",
          path: "/page"
        },
        {
          title: "Title",
          icon: "ri-user-follow-line",
          path: "/page"
        },
        {
          title: "Title",
          icon: "ri-file-user-line",
          path: "/page"
        },
        {
          title: "Title",
          icon: "ri-pie-chart-line",
          path: "/page"
        },
        {
          title: "Title",
          icon: "ri-line-chart-line",
          path: "/page"
        },
      ]
    }
  },
}
</script>
