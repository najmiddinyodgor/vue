<template>
  <article class="desk">
    <h3>{{ desk.title }}</h3>
    <ul>
      <li>
        <b>Раздел</b>
        <span>{{ desk.category }}</span>
      </li>
      <li>
        <b>Дата создания:</b>
        <span>{{ (created) }}</span>
      </li>
    </ul>
    <BigButton outlined>
      Открыть
    </BigButton>
  </article>
</template>

<script>
import BigButton from "./buttons/BigButton";

export default {
  components: {BigButton},
  props: {
    desk: {
      title: {
        type: String,
        required: true
      },
      category: {
        type: String,
        required: true
      },
      date: {
        type: String,
        required: true
      },
    }
  },
  computed: {
    created() {
      const date = new Date(this.desk.date)
      return `${date.getDay()}.${date.getMonth()}.${date.getFullYear()}`
    }
  }
}
</script>
