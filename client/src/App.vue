<template lang="html">
  <section>
    <HotelForm/>
    <GuestList/>
  </section>

</template>

<script>
import GuestList from '@/components/GuestList';
import HotelForm from '@/components/HotelForm';

export default {
  name: 'App',
  components: {
    GuestList,
    HotelForm
  }
}
</script>

<style lang="css" scoped>
</style>
