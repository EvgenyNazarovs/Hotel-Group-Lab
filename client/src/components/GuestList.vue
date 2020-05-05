<template lang="html">
  <div>
    <GuestListItem v-for="(guest, index) in guests"
                   :key="index"
                   :guest="guest">
          </GuestListItem>

  </div>

</template>

<script>

import {eventBus} from '@/main.js';
import GuestsService from '@/services/GuestsService.js';
import GuestListItem from '@/components/GuestListItem.vue'

export default {
  name: 'GuestList',
  data(){
    return {
      guests: [],
      filterOptions: ['Show All', 'Checked In', 'Cancelled'],
      filter: 'Show All'
    }
  },
  mounted(){
    GuestsService.getGuests()
    .then(guests => this.guests = guests);

    eventBus.$on('guest-added', (guest) => {
      this.guests.push(guest);
    })

    eventBus.$on('guest-deleted', (id) => {
      let index = this.guests.findIndex(guest => guest._id === id)
      this.guests.splice(index, 1)
    });

    eventBus.$on('guest-updated', (updatedGuest) => {
      let index = this.guests.findIndex(guest => guest._id === updatedGuest._id)
      this.guests.splice(index, 1, updatedGuest)
    })
  },
  components: {
    GuestListItem
  }
}
</script>

<style lang="css" scoped>
</style>
