<template>
  <v-app>
    <!-- <transition name="fade">
      <Modal v-if="shown" :name="shown" :settings="settings" />
    </transition> -->
    <v-app-bar flat app>
      <v-btn :ripple="false" plain to="/dashboard">Dashboard</v-btn>
      <v-btn :ripple="false" plain to="/about">About</v-btn>
      <v-btn :ripple="false" plain to="/404">404</v-btn>
    </v-app-bar>
    <v-main>
      <div class="text-h4 my-4">My personal costs</div>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'App',
  components: {
    // Modal: () => import('./components/modalWindow/Modal')
  },
  data () {
    return {
      shown: '',
      settings: {}
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
    },
    onShowContext () {
      this.showContext = true
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

<style>
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
</style>
