<template>
  <div id="app">
    <header :class="[$style.header]">
      My personal costs
    </header>
    <main>
      <Button @handler="isShowForm" :text="buttonText" />
      <PaymentForm @add="dataAdd" v-show="showForm" />
      <PaymentsList :items="paymentsList" />
    </main>
  </div>
</template>

<script>
import PaymentsList from './components/PaymentsList'
import PaymentForm from './components/PaymentForm'
import Button from './components/Button'

export default {
  name: 'App',
  components: {
    PaymentsList,
    PaymentForm,
    Button
  },
  data () {
    return {
      paymentsList: [
        {
          date: '15.05.2021',
          category: 'Education',
          price: 123
        },
        {
          date: '14.05.2021',
          category: 'Education',
          price: 234
        },
        {
          date: '13.05.2021',
          category: 'Education',
          price: 345
        },
        {
          date: '12.05.2021',
          category: 'Education',
          price: 456
        }
      ],
      showForm: false,
      buttonText: 'ADD NEW COST'
    }
  },
  methods: {
    dataAdd (data) {
      this.paymentsList.push(data)
    },
    isShowForm () {
      this.showForm = !this.showForm
    }
  }
}
</script>

<style lang="sass" module>
  *
    margin: 0
    padding: 0
    font-family: sans-serif
    box-sizing: border-box

  .header
    color: #234567
    font-size: 24px
    margin-bottom: 8px

</style>
