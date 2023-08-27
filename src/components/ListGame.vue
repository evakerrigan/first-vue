<template>
  <div>
    <h1>Ответ от API</h1>
    <div v-if="apiResponse" class="character-list">
      <div
        v-for="character in apiResponse"
        :key="character.id"
        class="character-item"
        @click="$router.push(`/character/${character.id}`)"
      >
        <h2>{{ character.name }}</h2>
        <img :src="character.image" :alt="character.name" />
      </div>
    </div>
    <div v-else>Загрузка...</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: string[];
  url: string;
  created: string;
}
export default defineComponent({
  data() {
    return {
      apiResponse: null as Character[] | null,
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      try {
        const response = await fetch(
          "https://rickandmortyapi.com/api/character"
        );
        const data = await response.json();
        this.apiResponse = data.results;
      } catch (error) {
        console.error(error);
      }
    },
  },
});
</script>

<style scoped>
.character-list {
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.character-item {
  margin: 10px;
  cursor: pointer;
  transition: 0.2s;
}
.character-item:hover {
  transform: scale(1.1);
}
</style>
