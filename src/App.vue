<template>
  <div id="app">
    <Modal v-if="shown" :name="shown" />
    <header :class="[$style.header]">
      My personal costs
      <div>
        <router-link :class="[$style.routerLink]" to="/dashboard">Dashboard</router-link>
        <router-link :class="[$style.routerLink]" to="/about">About</router-link>
        <router-link :class="[$style.routerLink]" to="/404">404</router-link>
      </div>
    </header>
    <main>
      <router-view />
    </main>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'App',
  components: {
    Modal: () => import('./components/modalWindow/Modal')
  },
  data () {
    return {
      shown: ''
    }
  },
  methods: {
    ...mapActions([
      'fetchData'
    ]),
    onShow ({ name }) {
      this.shown = name
    },
    onClose () {
      this.shown = ''
    }
  },
  created () {
    this.fetchData()
  },
  mounted () {
    this.$modal.EventBus.$on('show', this.onShow)
    this.$modal.EventBus.$on('close', this.onClose)
  },
  beforeDestroy () {
    this.$modal.EventBus.$off('show', this.onShow)
    this.$modal.EventBus.$off('close', this.onClose)
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
    display: flex
    flex-direction: column

  .routerLink
    margin-right: 10px
    font-size: 16px
    color: #234567

    &:hover
      color: #66bcc7

</style>
