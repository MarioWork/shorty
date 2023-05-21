<template>{{ data }}</template>

<script setup>
  const { get } = await useShortUrl();

  const { data, error } = await get('e5841d1c21ba5d6d');
  console.log(data.value);
  console.log(error.value);
</script>
