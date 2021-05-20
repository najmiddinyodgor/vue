<template>
  <Modal :isOpened="isOpened">
    <template #header>
      <h2>Новая доска</h2>
    </template>
    <template #content>
      <form @submit.prevent="submitHandler" class="new-desk">
        <fieldset class="form-group">
          <label for="title">Название</label>
          <input type="text" id="title" v-model="title" placeholder="Sunrise Tour Inc" class="input">
        </fieldset>
        <fieldset class="form-group">
          <label for="category">Раздел</label>
          <select v-model="category" id="category" class="input">
            <option disabled value="" selected>Раздел</option>
            <option v-for="{id, value} in options" :key="id" :value="id">{{ value }}</option>
          </select>
        </fieldset>
        <BigButton type="submit">
          Создать
        </BigButton>
        <BigButton type="reset" :clickHandler="toggleModal" outlined>
          Отмена
        </BigButton>
      </form>
    </template>
  </Modal>
</template>
<script>
import Modal from "../Modal/Modal";
import BigButton from "../buttons/BigButton";

export default {
  components: {BigButton, Modal},
  props: {
    isOpened: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      title: "",
      category: 0,
      options: [
        {
          id: 1,
          value: "Text1"
        },
        {
          id: 2,
          value: "Text2"
        },
      ]
    }
  },
  methods: {
    submitHandler() {
      const desk = {
        id: Date.now(),
        title: this.title,
        category: this.category,
        date: Date.now()
      }

      this.$store.dispatch('desks/createDesk', desk)
      this.toggleModal()
    },
    toggleModal() {
      this.$emit('close')
    }
  }
}
</script>
