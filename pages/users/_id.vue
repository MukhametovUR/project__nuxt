<template>
    <h1>Пользователь {{ user.name }}</h1>
</template>

<script>
export default {
  validate({ params }) {
    // Deve ser um número
    return /^\d+$/.test(params.id);
  },
   async asyncData({params}) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`);
    const user = await response.json();
   return {
     user
   }
  },
  data() {
      return {
          user:null
      }
  },
};
</script>

<style>
</style>