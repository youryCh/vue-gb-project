<template>
  <div :class="[$style.wrapper]" v-if="shown">
    <div :class="[$style.content]">
      <PaymentForm v-if="shown === 'PaymentForm'" />
    </div>
  </div>
</template>

<script>
import PaymentForm from '../PaymentForm'

export default {
  components: {
    PaymentForm
  },
  data () {
    return {
      shown: ''
    }
  },
  methods: {
    onShow ({ name }) {
      this.shown = name
    },
    onClose () {
      this.shown = ''
    }
  },
  mounted () {
    this.$modal.EventBus.$on('show', this.onShow)
    this.$modal.EventBus.$on('close', this.onClose)
  }
}
</script>

<style module lang="sass">
  .wrapper
    background-color: rgba(50, 50, 50, 0.5)
    width: 100%
    height: 100vh
    position: absolute

  .content
    position: absolute
    top: 62px

</style>
