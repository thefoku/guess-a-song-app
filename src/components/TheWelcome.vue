<script setup lang="ts">
  import { tg } from '@/consts/telegramBot';

  const onClose = () => tg.close();
</script>

<template>
  <div>Hello! Welcome to the Guess a song Talagram app!</div>
  <div>Remind me to use NGROK for local development: <a href="https://ngrok.com/download/node-js">NGROK</a></div>
  <button @click="onClose">Close the app.</button>
</template>
