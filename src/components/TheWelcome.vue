<script setup lang="ts">
  import { tg } from '@/main';

  const onClose = () => tg.close();
</script>

<template>
  <div>Hello! Welcome to the Guess a song Talagram app!</div>
  <button @click="onClose">Close the app.</button>
</template>
