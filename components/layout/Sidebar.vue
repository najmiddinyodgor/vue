<template>
  <aside class="page-sidebar">
    <h1 class="page-title">Проекты</h1>
    <nav class="page-side-nav">
      <SideNavButton v-for="{icon, title, path} in pages"
                     :key="icon"
                     :path="path">
        {{ title }}
      </SideNavButton>
    </nav>
    <footer>
      <BigButton :clickHandler="toggleModal">
        Создать доску
      </BigButton>
      <CreateDeskModal
        :isOpened="isOpened"
        @close="toggleModal"/>
    </footer>
  </aside>
</template>
<script>
import SideNavButton from "../buttons/SideNavButton";
import BigButton from "../buttons/BigButton";
import CreateDeskModal from "../modals/CreateDeskModal";

export default {
  components: {BigButton, SideNavButton, CreateDeskModal},
  data() {
    return {
      isOpened: false,
      pages: [
        {
          title: "Доски",
          path: "/"
        },
        {
          title: "Тикеты",
          path: "/page"
        }
      ]
    }
  },
  methods: {
    toggleModal() {
      this.isOpened = !this.isOpened
    }
  }
}
</script>
