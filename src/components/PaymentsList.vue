<template>
  <div
    @contextmenu="show"
  >
    <v-data-table
      :headers="tableHeaders"
      :items="getPaymentsList"
    >
    </v-data-table>
    <v-menu
      v-model="showMenu"
      :position-x="x"
      :position-y="y"
      absolute
      offset-y
    >
      <v-list>
        <v-list-item>Edit</v-list-item>
        <v-list-item>Delete</v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data () {
    return {
      // currentPage: 1,
      // itemsOnPage: 5,
      // isShowForm: false,
      // isShowContext: false,
      // id: null,
      tableHeaders: [
        { text: '#', value: 'id' },
        { text: 'Date', value: 'date' },
        { text: 'Category', value: 'category' },
        { text: 'Value', value: 'price' }
      ],
      showMenu: false,
      x: 0,
      y: 0
    }
  },
  methods: {
    // showCurrentList (page) {
    //   this.currentPage = page
    // },
    // showContext (e) {
    //   this.id = +e.target.parentElement.childNodes[0].innerHTML
    //   this.$context.show()
    // },
    // onShowContext () {
    //   this.isShowContext = true
    // },
    show (event) {
      event.preventDefault()
      this.showMenu = false
      this.x = event.clientX
      this.y = event.clientY
      this.$nextTick(() => {
        this.showMenu = true
      })
    }
  },
  computed: {
    ...mapGetters([
      'getPaymentsList'
    ])
    // currentList () {
    //   return this.getPaymentsList.slice(this.itemsOnPage * (this.currentPage - 1), this.itemsOnPage * this.currentPage)
    // },
    // currentId () {
    //   return { id: 2 }
    // }
  }
  // mounted () {
  //   this.$context.EventBus.$on('show', this.onShowContext)
  //   // this.$context.EventBus.$on('close')
  // }
}
</script>

<!--<style>

  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }

  .fade-enter, .fade-leave-to {
    opacity: 0;
  }

</style>-->

<style module lang="sass">
  // .payment
  //   display: grid
  //   grid-template-columns: .4fr 2fr 2fr .5fr .2fr
  //   border-bottom: 1px solid #e0e0e0
  //   height: 40px
  //   align-items: center
  //   color: #345678

  //   &:last-child
  //     border: 0

</style>
