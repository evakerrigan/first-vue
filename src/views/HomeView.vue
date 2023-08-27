<template>
  <div class="home">
    <ListGame />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import ListGame from "@/components/ListGame.vue";

@Options({
  components: {
    ListGame,
  },
})
export default class HomeView extends Vue {}
</script>
