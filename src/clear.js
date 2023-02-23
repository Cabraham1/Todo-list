import setStorage from './storage.js';
import { deleteTask } from './crud-methods.js';
// eslint-disable-next-line import/prefer-default-export, no-use-before-define
export { clearAll };

const clearAll = () => {
  const localData = JSON.parse(localStorage.getItem('todo'));
  const taskContainer = document.querySelectorAll('.list-item');
  taskContainer.forEach((e) => {
    if (e.classList.contains('list-selected-item')) {
      deleteTask(e);
    }
  });
  let count = 0;
  const data = Array.from(localData).filter((e) => e.completed === false);
  // eslint-disable-next-line no-return-assign, no-multi-assign
  data.map((e) => (e.index = count += 1));
  setStorage(data);
};
