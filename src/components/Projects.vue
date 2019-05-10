<template>
  <Panel title="Projects">
    <div class="mb-2 project" v-for="project in projects" :key="project.id">
      <EditableRecord
        :isEditMode="project.isEditMode"
        :title="project.title"
        @onInput="setProjectTitle({
          project,
          title: $event,
        })"
        @onEdit="setEditMode(project)"
        @onSave="saveProject(project)"
        @onDelete="deleteProject(project)"
      />
    </div>
    <CreateRecord
      placeholder="My Project name"
      @onInput="setNewProjectsName"
      :value="newProjectsName"
      @create="createProject"
    />
  </Panel>
</template>

<script>
import { mapMutations, mapState, mapActions } from 'vuex';
import CreateRecord from '@/components/CreateRecord.vue';
import EditableRecord from '@/components/EditableRecord.vue';
export default {
  mounted() {
    this.fetchProject();
  },
  components: {
    CreateRecord,
    EditableRecord,
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
