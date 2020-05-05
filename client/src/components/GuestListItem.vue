<template lang="html">

<div>
  <h3>{{guest.name}}</h3>
  <p>Guest Email: {{guest.email}}</p>
  <p>Check-In Status: {{guest.checkInStatus}}
  <span>
    <button v-if="guest.checkInStatus === 'Checked In'"
            type="button"
            name="button"
            v-on:click="updateGuest">Cancel</button>

    <button v-if="guest.checkInStatus === 'Cancelled'"
            type="button"
            name="button"
            v-on:click="updateGuest">Check In</button></span>

  </p>
  <button type="button" v-on:click="deleteGuest">Delete</button>
</div>

</template>

<script>

import {eventBus} from '@/main.js';
import GuestsService from '@/services/GuestsService.js';

export default {
  name: 'GuestListItem',
  props: ['guest'],
  methods: {
    deleteGuest(){
      GuestsService.deleteGuest(this.guest._id)
      .then(() => eventBus.$emit('guest-deleted', this.guest._id))
    },
    updateGuest(){
      const updatedGuest = {
        checkInStatus: null
      }
      this.changeStatus(updatedGuest)
      GuestsService.updateGuest(this.guest._id, updatedGuest)
      .then((guest) => eventBus.$emit('guest-updated', guest))
    },
    changeStatus(item){
    this.guest.checkInStatus === "Checked In" ? item.checkInStatus = "Cancelled" : item.checkInStatus = "Checked In"
        }
      }
    }


</script>

<style lang="css" scoped>
</style>
