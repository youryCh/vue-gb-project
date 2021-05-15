<template>
  <div :class="[$style.paymentForm]">
    <input :class="[$style.paymentForm__input]" type="text" placeholder="Payment date" v-model="date">
    <input :class="[$style.paymentForm__input]" type="text" placeholder="Payment dascription" v-model="category">
    <input :class="[$style.paymentForm__input]" type="text" placeholder="Payment amount" v-model.number="price">
    <Button :text="formButtonText" @handler="save" />
  </div>
</template>

<script>
import Button from './Button'

export default {
  components: {
    Button
  },
  data () {
    return {
      date: '',
      category: '',
      price: null,
      formButtonText: 'ADD'
    }
  },
  methods: {
    save () {
      const { date, category, price } = this
      this.$emit('add', { date, category, price })
      this.$parent.showForm = false
      this.clearForm()
    },
    clearForm () {
      this.date = ''
      this.category = ''
      this.price = null
    }
  }
}
</script>

<style module lang="sass">
  .paymentForm
    display: flex
    flex-direction: column
    width: 50vw
    position: fixed
    left: 25vw
    background-color: white
    border: 1px solid #e0e0e0
    border-radius: 5px
    padding: 8px
    box-shadow: 5px 5px 20px #e0e0e0

    &__input
      height: 40px
      border: 1px solid #e0e0e0
      border-radius: 3px
      margin-bottom: 10px
      outline: none
      padding: 8px

</style>
