<template>
  {{ data }}
  <v-btn @click.once="onClick">Add Data</v-btn>
</template>

<script setup>
  const { get, create } = await useShortUrl();

  const { data, error } = await get('e5841d1c21ba5d6d');
  console.log('RETRIEVE:');
  console.log(data.value);
  console.log(error.value);

  const onClick = async () => {
    await create('https://www.facebook.com');
  };
</script>
