<template>
  <div :class="[$style.paymentsList]">
    <div :class="[$style.payment]">
      <h4>#</h4>
      <h4>Date</h4>
      <h4>Category</h4>
      <h4>Value</h4>
    </div>
    <div :class="[$style.payment]" v-for="(item, index) in items" :key="index">
      <div>{{ index + 1 }}</div>
      <div>{{ item.date }}</div>
      <div>{{ item.category }}</div>
      <div>{{ item.price }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    items: Array
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

</style>
