<template>
  <div class="container">
    <h1>Rick and Morty</h1>
    <filter-by-status></filter-by-status>
    <filter-by-name></filter-by-name>
    <ListCharacters></ListCharacters>
  </div>
  
</template>

<script>
import FilterByName from './components/FilterByName.vue';
import FilterByStatus from './components/FilterByStatus.vue';
import ListCharacters from './components/listCharacters';
export default {
  name: 'App',
  components: {
    ListCharacters,
    FilterByStatus,
    FilterByName
  }
}
</script>

<style lang="scss">
:root {
  --background-body: #24282F;
  --background-card: #3C3E44;
  --text-white: #FFFFFF;
  --text-gray: #c0c0c0;
  --text-orange: #FF9800;
}
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body {
  background-color: var(--background-body);
  color: var(--text-white);
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
h1 {
  margin-bottom: 3rem;
  text-align: center;
}
.container {
  width: 980px;
  max-width: 90%;
  margin: 5rem auto;
}
img {
  width: 100%;
}
</style>