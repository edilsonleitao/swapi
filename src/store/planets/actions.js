import { Notify } from 'quasar';
import client from '../../app/client';

export async function fetch({ commit, getters }) {
  try {
    commit('setLoading', true);
    const { page } = getters;
    const { data } = await client.get(`planets/?page=${page}`);
    if (!data) return;
    const { count, results } = data;
    commit('setCount', count);
    commit('setResults', results);
  } catch (err) {
    Notify.create({
      type: 'negative',
      message: err.message,
    });
  } finally {
    commit('setLoading', false);
  }
}

export async function setPage({ commit, getters, dispatch }, pageNumber) {
  const { page } = getters;
  if (pageNumber === page) return;
  commit('setPage', pageNumber);
  dispatch('fetch');
}
