<template>
  <div>
    <div>
      <input class="input" type="text" v-model="operand1">
      {{ operator }}
      <input class="input" type="text" v-model="operand2">
      = {{ result || 0 }}
    </div>
    <div class="btns">
      <button v-for="button in buttons" @click="calculate" :key="button">{{ button }}</button>
    </div>
    <div class="errorMsg" v-if="error">
      {{ error }}
    </div>
    <label>
      <input class="input_mg" type="checkbox" v-model="showKeybord">
      Отобразить экранную клавиатуру
    </label>
    <div class="btns" v-if="showKeybord">
      <button v-for="key in keys" @click="addNumber" :key="key">{{ key }}</button>
      <button @click="clearInput">&#8592;</button>
      <br>
      <input type="radio" name="operand" id="op1" value="operand1" v-model="checkedOperand">
      <label for="op1">Операнд 1</label>
      <input type="radio" name="operand" id="op2" value="operand2" v-model="checkedOperand">
      <label for="op2">Операнд 2</label>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Calculator',
  data: () => ({
    buttons: ['+', '-', '/', '*', '^', 'div'],
    operand1: '',
    operand2: '',
    result: '',
    operator: '',
    showKeybord: false,
    keys: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    checkedOperand: 'operand1',
    error: ''
  }),
  methods: {
    calculate (e) {
      this.operator = e.target.innerHTML
      this.operand1 = Number(this.operand1)
      this.operand2 = Number(this.operand2)
      console.log('ok1')
      switch (this.operator) {
        case '+':
          console.log('ok')
          this.result = this.operand1 + this.operand2
          this.error = ''
          break
        case '-':
          this.result = this.operand1 - this.operand2
          this.error = ''
          break
        case '/':
          if (this.operand2 !== 0) {
            this.result = Number((this.operand1 / this.operand2).toFixed(2))
          } else {
            this.error = 'На 0 делить нельзя'
          }
          break
        case '*':
          this.result = this.operand1 * this.operand2
          this.error = ''
          break
        case '^':
          this.result = Math.pow(this.operand1, this.operand2)
          this.error = ''
          break
        case 'div':
          this.result = Number((this.operand1 / this.operand2).toFixed(0))
          this.error = ''
      }
    },
    addNumber (event) {
      const num = event.target.innerHTML
      if (this.checkedOperand === 'operand1') {
        this.operand1 += num
      } else {
        this.operand2 += num
      }
    },
    clearInput () {
      if (this.checkedOperand === 'operand1') {
        this.operand1 = this.operand1.slice(0, -1)
      } else {
        this.operand2 = this.operand2.slice(0, -1)
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">

.input
  text-align: right

  &_mg
    margin-top: 50px

.btns
  margin-top: 8px

button
  margin-left: 5px

.errorMsg
  margin-top: 16px
  border: 1px dotted red
  color: red
</style>
