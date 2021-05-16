<template>
  <div>
    <div :class="[$style.paymentsList]">
      <div :class="[$style.payment]">
        <h4>#</h4>
        <h4>Date</h4>
        <h4>Category</h4>
        <h4>Price</h4>
      </div>
      <div :class="[$style.payment]" v-for="(item, index) in currentList" :key="index">
        <div>{{ index + currentPages }}</div>
        <div>{{ item.date }}</div>
        <div>{{ item.category }}</div>
        <div>{{ item.price }}</div>
      </div>
    </div>
    <Pagination @prevPage="prevPage"
    @nextPage="nextPage"
    @currentList="showCurrentList"
    :listLength="items.length" />
  </div>
</template>

<script>
import Pagination from './Pagination'

export default {
  components: {
    Pagination
  },
  props: {
    items: Array
  },
  data () {
    return {
      currentList: [],
      currentPages: 1
    }
  },
  methods: {
    showCurrentList (page) {
      const pages = page * 5
      this.currentList = this.items.slice((pages - 5), pages)
      this.currentPages = pages - 4
    },
    prevPage () {
      const page = Math.ceil(this.currentPages / 5)
      if (page !== 1) {
        this.showCurrentList(page - 1)
      }
    },
    nextPage () {
      const page = Math.ceil(this.currentPages / 5)
      if (this.currentList.length === 5) {
        this.showCurrentList(page + 1)
      }
    }
  },
  mounted () {
    this.currentList = this.items.slice(0, 5)
  },
  watch: {
    items: function () {
      const page = Math.ceil(this.currentPages / 5)
      this.showCurrentList(page)
    }
  }
}
</script>

<style module lang="sass">
  .payment
    display: grid
    grid-template-columns: .4fr 2fr 2fr .5fr
    border-bottom: 1px solid #e0e0e0
    height: 40px
    align-items: center
    color: #345678

    &:last-child
      border: 0

</style>
