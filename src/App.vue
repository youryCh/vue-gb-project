<template>
  <div id="app">
    <header :class="[$style.header]">
      My personal costs
    </header>
    <main>
      <Button @handler="isShowForm" :text="'ADD NEW COST'" />
      <PaymentForm v-show="showForm" />
      <PaymentsList />
    </main>
  </div>
</template>

<script>
import PaymentsList from './components/PaymentsList'
import PaymentForm from './components/PaymentForm'
import Button from './components/Button'
import { mapActions } from 'vuex'

export default {
  name: 'App',
  components: {
    PaymentsList,
    PaymentForm,
    Button
  },
  data () {
    return {
      showForm: false
    }
  },
  methods: {
    ...mapActions([
      'fetchData'
    ]),
    isShowForm () {
      this.showForm = !this.showForm
    }
  },
  mounted () {
    this.fetchData()
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
