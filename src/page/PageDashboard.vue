<template>
  <v-row>
    <v-col>
      <!-- <Button @handler="isShowForm" text="ADD NEW COST" /> -->
      <v-dialog
        v-model="showForm"
        width="350"
      >
        <template v-slot:activator="{ on }">
          <v-btn
            color="teal"
            dark
            small
            depressed
            v-on="on"
          >
            ADD NEW COST
            <v-icon dark small>
              mdi-plus
            </v-icon>
          </v-btn>
        </template>
        <PaymentForm />
      </v-dialog>
      <PaymentsList />
    </v-col>
    <v-col>Diagram</v-col>
  </v-row>
</template>

<script>
import PaymentsList from '../components/PaymentsList'
import PaymentForm from '../components/PaymentForm.vue'
// import Button from '../components/Button'

export default {
  components: {
    PaymentsList,
    PaymentForm
    // Button
  },
  data () {
    return {
      showForm: false
    }
  }
  // methods: {
  //   isShowForm () {
  //     this.$modal.show('PaymentForm')
  //   }
  // }
}
</script>

<style>

</style>
