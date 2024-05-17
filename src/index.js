
// import 'normalize.css'
import './scripts/styles.css';
import checkmarkSVG from './images/checksmark.svg';
document.querySelector('.checkmark-svg').src = checkmarkSVG;


//Scripts
import './scripts/app-scripts/state';
import { intializeStorage } from './scripts/app-scripts/storage';
import './scripts/app-scripts/import-effects'
import app from './scripts/app-scripts/app-logic';

intializeStorage();
app.intializePage();
