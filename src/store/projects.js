// import router from '../router';
import HTTP from '../http';

export default {
  namespaced: true,
  state: {
    projects: [],
    newProjectsName: null,
  },
  actions: {
    fetchProject({ commit }) {
      return HTTP().get('/projects')
        .then(({ data }) => {
          commit('setProjects', data);
        });
    },
    createProject({ commit, state }) {
      return HTTP().post('/projects', {
        title: state.newProjectsName,
      })
        .then(({ data }) => {
          commit('appendProjects', data);
          commit('setNewProjectsName', null);
        });
    },
  },
  getters: {
  },
  mutations: {
    setNewProjectsName(state, name) {
      state.newProjectsName = name;
    },
    appendProjects(state, project) {
      state.projects.push(project);
    },
    setProjects(state, projects) {
      state.projects = projects;
    },
  },
};
