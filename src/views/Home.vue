<template>
  <div class="columns">
    <div class="column is-8">
      <records-list />
    </div>

  </div>
</template>

<script>
import RecordsList from '../components/RecordsList.vue';

export default {
  name: 'home',
  components: {RecordsList},
};
</script>
