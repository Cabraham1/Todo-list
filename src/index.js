import './style.css';
// eslint-disable-next-line import/no-unresolved
import { addTask } from './crud-methods.js';

const inputBtn = document.getElementById('text-input');

inputBtn.addEventListener('keypress', (i) => {
  if (i.key === 'Enter' && inputBtn.value) {
    addTask(inputBtn.value);
    inputBtn.value = null;
  }
});