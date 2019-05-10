<template>
  <Panel title="Tasks">
    <div class="mb-2 task" v-for="task in tasks" :key="task.id">
      <EditableRecord
        :isEditMode="task.isEditMode"
        :title="task.description"
        @onInput="setTaskDescription({
          task,
          description: $event,
        })"
        @onEdit="setEditMode(task)"
        @onSave="saveTask(task)"
        @onDelete="deleteTask(task)"
      >
      <v-icon @click="checkClicked(task)">
        {{ task.completed ? 'check_box' : 'check_box_outline_blank' }}
      </v-icon>
      </EditableRecord>
    </div>
   <CreateRecord
      placeholder="My Task Description"
      @onInput="setNewTaskName"
      :value="newTaskName"
      @create="createTask"
    />
  </Panel>
</template>

<script>
import { mapMutations, mapState, mapActions } from 'vuex';
import CreateRecord from '@/components/CreateRecord.vue';
import EditableRecord from '@/components/EditableRecord.vue';
export default {
  components: {
    CreateRecord,
    EditableRecord,
  },
  computed: {
    ...mapState('tasks', [
      'newTaskName',
      'tasks',
    ]),
  },
  methods: {
    checkClicked(task) {
      this.toggleCompleted(task);
      this.saveTask(task);
    },
    ...mapActions('tasks', [
      'createTask',
      'saveTask',
      'deleteTask',
    ]),
    ...mapMutations('tasks', [
      'setNewTaskName',
      'setTaskDescription',
      'setEditMode',
      'toggleCompleted',
    ]),
  },
};
</script>

<style lang="scss" scoped>
  .task{
    font-size: 18px;
  }
</style>
