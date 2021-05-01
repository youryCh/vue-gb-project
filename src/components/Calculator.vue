<template>
  <div>
    <div>
      <input type="text" v-model.number="operand1">
      {{ operator }}
      <input type="text" v-model.number="operand2">
      = {{ result || 0 }}
    </div>
    <div class="btns">
      <button @click="calculate($event)" v-for="(button, index) in buttons" :key="index">{{ button }}</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Calculator',
  data: () => ({
    buttons: [
      '+',
      '-',
      '/',
      '*',
      '^',
      'div'
    ],
    operand1: '',
    operand2: '',
    result: '',
    operator: null
  }),
  methods: {
    calculate (e) {
      this.operator = e.target.innerHTML
      switch (this.operator) {
        case '+':
          this.result = this.operand1 + this.operand2
          break
        case '-':
          this.result = this.operand1 - this.operand2
          break
        case '/':
          this.result = (this.operand1 / this.operand2).toFixed(2)
          break
        case '*':
          this.result = this.operand1 * this.operand2
          break
        case '^':
          this.result = Math.pow(this.operand1, this.operand2)
          break
        case 'div':
          this.result = (this.operand1 / this.operand2).toFixed(0)
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">

input
  width: 60px
  text-align: center

.btns
  margin-top: 8px

button
  margin-left: 5px

</style>
