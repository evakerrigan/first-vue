<template>
  <div class="character">
    <h1>Данные для персонажа № {{ characterId }}</h1>
    <div v-if="apiResponse">
      <div
        v-for="character in apiResponse"
        :key="character.id"
        class="character-item"
      >
        <div v-if="character.id == characterId">
          <h2>{{ character.name }}</h2>
          <img :src="character.image" :alt="character.name" />
          <p><strong>Статус:</strong> {{ character.status }}</p>
          <p><strong>Вид:</strong> {{ character.species }}</p>
          <p><strong>Пол:</strong> {{ character.gender }}</p>
          <p><strong>Происхождение:</strong> {{ character.origin.name }}</p>
          <p><strong>Местоположение:</strong> {{ character.location.name }}</p>
        </div>
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
  setup() {
    const characterId = Number(window.location.pathname.split("/").pop());
    return { characterId };
  },
});
</script>
