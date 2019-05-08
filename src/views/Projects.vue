<template>
  <v-container>
    <v-layout>
      <v-flex xs4 mr-4>
          <Projects></Projects>
      </v-flex>
      <v-flex xs8>
          <Panel title="Tasks"></Panel>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import Projects from '@/components/Projects.vue';

export default {
  components: {
    Projects,
  },
};
</script>
