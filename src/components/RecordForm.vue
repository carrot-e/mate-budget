<template>
  <div class="section">
    <div class="field">
      <label class="label">
        Amount
        <input class="input" type="text" placeholder="Text input">
      </label>
      <label class="label">
        Description
        <textarea class="textarea" placeholder="Textarea"></textarea>
      </label>
    </div>
    <div class="field is-grouped">
      <div class="control">
        <button class="button is-link">Submit</button>
      </div>
      <div class="control">
        <button class="button is-text">Cancel</button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'record-form',
  };
</script>

<style scoped>

</style>
