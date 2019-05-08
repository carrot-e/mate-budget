<template>
  <div class="section">
    <div class="field">
      <button class="button">Create new</button>
    </div>
    <div class="columns">
      <div class="column is-10">
          Description
      </div>
      <div class="column is-2 has-text-right">144.00</div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios';

  export default {
    name: 'records-list',
    created() {
      axios.get('http://localhost:3000/records')
        .then(response => {
          console.log(response);
        });
    }
  };
</script>

<style scoped>

</style>
