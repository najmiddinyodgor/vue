<template>
  <div @keypress.esc="toggleModal">
    <section class="desk-list">
      <Desk
        v-for="desk in desks"
        :key="desk.id"
        :desk="desk"
        class="desk-list__item"
      />
      <div
        class="desk-list__item desk--new"
        @click="toggleModal">
        Создать доску
      </div>
    </section>
    <CreateDeskModal
      :isOpened="isOpened"
      @close="toggleModal"/>
  </div>
</template>

<script>
import Desk from "../components/Desk";
import Modal from "../components/Modal/Modal";
import CreateDeskModal from "../components/modals/CreateDeskModal";

export default {
  components: {CreateDeskModal, Modal, Desk},
  async fetch({store}) {
    if (store.getters['desks/desks'].length === 0) {
      console.log("Empty")
    }
  },
  data() {
    return {
      isOpened: false
    }
  },
  computed: {
    desks() {
      return this.$store.getters['desks/desks']
    },
  },
  methods: {
    toggleModal() {
      this.isOpened = !this.isOpened
    },
  }
}
</script>
