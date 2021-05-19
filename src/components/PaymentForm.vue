<template>
  <div :class="[$style.paymentForm]">
    <input :class="[$style.paymentForm__input]" placeholder="Payment date" v-model="date">
    <select :class="[$style.paymentForm__input]" v-model="category">
      <option disabled selected value="">Payment category</option>
      <option v-for="category in categoryName"
      :value="category"
      :key="category">
      {{ category }}
      </option>
    </select>
    <input :class="[$style.paymentForm__input]" placeholder="Payment amount" v-model.number="price">
    <Button :text="'ADD'" @handler="save" />
  </div>
</template>

<script>
import Button from './Button'
import { mapMutations, mapGetters } from 'vuex'

export default {
  components: {
    Button
  },
  data () {
    return {
      date: '',
      category: '',
      price: null,
      categoryName: ['Food', 'Transport', 'Housing', 'Clothing', 'Education']
    }
  },
  methods: {
    ...mapMutations([
      'setPaymentsListData'
    ]),
    save () {
      const data = {
        date: this.date || this.getCurrentDate,
        category: this.category,
        price: this.price
      }
      this.$emit('add', data)
      this.clearForm()
      this.$parent.showForm = false
    },
    clearForm () {
      this.date = ''
      this.category = ''
      this.price = null
    },
    fetchData () {
      return [
        {
          date: '12.05.2021',
          category: 'Education',
          price: 456
        },
        {
          date: '12.05.2021',
          category: 'Education',
          price: 456
        },
        {
          date: '12.05.2021',
          category: 'Education',
          price: 456
        },
        {
          date: '12.05.2021',
          category: 'Education',
          price: 456
        },
        {
          date: '12.05.2021',
          category: 'Education',
          price: 456
        }
      ]
    }
  },
  computed: {
    ...mapGetters([
      'getPaymentsListFullPrice'
    ]),
    getCurrentDate () {
      const today = new Date()
      const day = today.getDate()
      const month = today.getMonth()
      const year = today.getFullYear()
      return `${day}.${month < 10 ? '0' + (month + 1) : month + 1}.${year}`
    }
  },
  mounted () {
    this.setPaymentsListData(this.fetchData())
    // console.log(this.getPaymentsListFullPrice)
  }
}
</script>

<style module lang="sass">
  .paymentForm
    display: flex
    flex-direction: column
    width: 40vw
    position: fixed
    left: 30vw
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
      color: #6f6e6e

</style>
