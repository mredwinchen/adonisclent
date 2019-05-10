<template>
  <Panel title="Projects">
    <div class="mb-2 project" v-for="project in projects" :key="project.id">
      <v-layout>
        <v-flex xs9 class="text-xs-left">
          <span v-if="!project.isEditMode">
            {{ project.title }}
          </span>
          <v-text-field
            autofocus
            color="green"
            v-if="project.isEditMode"
            :value="project.title"
            @keyup.enter="saveProject(project)"
            @input="setProjectTitle({project, title: $event})"
          >
          </v-text-field>
        </v-flex>
        <v-flex xs3>
          <v-icon
            v-if="!project.isEditMode"
            class="mt-1 mr-2"
            @click="setEditMode(project)"
          >edit</v-icon>
          <v-icon
            v-if="project.isEditMode"
            class="mt-4 mr-2"
            @click="saveProject(project)"
          >check</v-icon>
          <v-icon
            @click="deleteProject(project)"
          >delete</v-icon>
        </v-flex>
      </v-layout>
    </div>
    <v-layout row wrap>
      <v-flex xs8>
        <v-text-field
        color="green"
        placeholder="My Project name"
        @input="setNewProjectsName"
        :value="newProjectsName"
        @keyup.enter="createProject"
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
      'setEditMode',
      'unsetEditMode',
      'setProjectTitle',
    ]),
    ...mapActions('projects', [
      'createProject',
      'fetchProject',
      'saveProject',
      'deleteProject',
    ]),
  },
};
</script>

<style lang="scss" scoped>
  .project{
    font-size: 18px;
  }
</style>
