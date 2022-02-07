<template>
  <div id="app">
    <header :class="[$style.header]">
      My personal costs
    </header>
    <main>
      <Button @handler="isShowForm" :text="'ADD NEW COST'" />
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
      paymentsList: [],
      showForm: false
    }
  },
  methods: {
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
    },
    dataAdd (data) {
      this.paymentsList.push(data)
    },
    isShowForm () {
      this.showForm = !this.showForm
    }
  },
  created () {
    this.paymentsList = this.fetchData()
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
