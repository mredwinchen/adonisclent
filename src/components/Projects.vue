<template>
  <Panel title="Projects">
    <div v-for="project in projects" :key="project.id">
      {{ project.title }}
    </div>
    <v-layout row wrap>
      <v-flex xs8>
        <v-text-field
        color="green"
        placeholder="My Project name"
        @input="setNewProjectsName"
        :value="newProjectsName"
      ></v-text-field>
      </v-flex>
      <v-flex xs4>
        <v-btn color="green" dark class="mt-2" @click="createProject">
          <v-icon class="mr-1">add_circle</v-icon>Create
        </v-btn>
      </v-flex>
    </v-layout>
  </Panel>
</template>

<script>
import { mapMutations, mapState, mapActions } from 'vuex';

export default {
  mounted() {
    this.fetchProject();
  },
  computed: {
    ...mapState('projects', [
      'newProjectsName',
      'projects',
    ]),
  },
  methods: {
    ...mapMutations('projects', [
      'setNewProjectsName',
    ]),
    ...mapActions('projects', [
      'createProject',
      'fetchProject',
    ]),
  },
};
</script>
