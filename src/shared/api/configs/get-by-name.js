export default (store) => async (name) => await store.getItem(name) || undefined;
