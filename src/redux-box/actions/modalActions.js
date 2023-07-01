export const openModal = (contentKey) => ({
  type: 'OPEN_MODAL',
  payload: contentKey,
});

export const closeModal = () => ({
  type: 'CLOSE_MODAL',
});
