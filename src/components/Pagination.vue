<template>
  <div :class="[$style.pagination]">
    <button @click="prevPage" :class="[$style.pagination__button]">{{ innerButton[0] }}</button>
    <div :class="[$style.pagination__item]" v-for="(item, index) in pageCount"
    :key="index"
    @click="showCurrentList">
    {{ item }}
    </div>
    <button @click="nextPage" :class="[$style.pagination__button]">{{ innerButton[1] }}</button>
  </div>
</template>

<script>
export default {
  props: {
    listLength: Number
  },
  data () {
    return {
      innerButton: ['<', '>']
    }
  },
  methods: {
    showCurrentList (event) {
      const targetPage = event.target.innerHTML
      this.$emit('currentList', targetPage)
    },
    prevPage () {
      this.$emit('prevPage')
    },
    nextPage () {
      this.$emit('nextPage')
    }
  },
  computed: {
    pageCount () {
      return Math.ceil(this.listLength / 5)
    }
  }
}
</script>

<style module lang="sass">
  .pagination
    height: 38px
    display: flex
    justify-content: center
    align-items: center
    border: 1px solid #e0e0e0
    border-radius: 5px

    &__item
      margin: 0 10px
      color: #6f6e6e

      &:hover
        color: #66bcc7

    &__button
      margin: 0 10px
      outline: none
      border: 0
      background-color: transparent
      color: #6f6e6e

      &:hover
        color: #66bcc7

</style>
