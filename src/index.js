// eslint-disable-next-line no-unused-vars
import _ from 'lodash';
import './style.css';
import anyimage from '../assets/icons/sync.png';

const image = new Image();
image.src = anyimage;

document.getElementById('img1').appendChild(image);