<template>
  <div class="section">
    <div class="field">
      <button class="button">Create new</button>
    </div>
    <div class="columns" v-for="item in items" :key="item.id">
      <div class="column is-10">
          {{ item.description }}
      </div>
      <div :class="['column', 'is-2', 'has-text-right', {
            'has-text-success': item.amount > 0,
            'has-text-danger': item.amount < 0
            }]"
      >
        {{ item.amount | toUAH }}
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'records-list',
    computed: {
      items() {
        return this.$store.getters.transactions;
      }
    },
    created() {
      this.$store.dispatch('requestTransactions');
    }
  };
</script>

<style scoped>

</style>
