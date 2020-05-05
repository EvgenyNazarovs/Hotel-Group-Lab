<template lang="html">
  <div>
    <form v-on:submit.prevent="addGuest" method="post">
      <label>Guest Name: </label>
      <input type="text" name="name" value="name" v-model="name" required/>

      <label>Guest E-mail Address:</label>
      <input type="text" name="email" value="email" v-model="email" required/>

      <label>Checked-in Status: </label>
      <input type="radio" name="checkInStatus" value="Checked In" v-model="checkInStatus">
      <label value="Checked In">Checked-In</label>

      <input type="radio" name="checkInStatus" value="Cancelled" v-model="checkInStatus">
      <label value="Cancelled">Cancelled</label>

      <input type="submit" value="Save"/>

    </form>

  </div>

</template>



<script>

import {eventBus} from '@/main.js';
import GuestsService from '@/services/GuestsService.js';

export default {
  name: "HotelForm",
  data(){
    return {
      name: '',
      email: '',
      checkInStatus: ''
    }
  },
  methods: {
    addGuest(){
      const newGuest = {
        name: this.name,
        email: this.email,
        checkInStatus: this.checkInStatus
      }
      GuestsService.postGuest(newGuest)
      .then(guest => eventBus.$emit('guest-added', guest))
    }
  }
}
</script>

<style lang="css" scoped>
</style>
