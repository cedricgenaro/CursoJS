import {startTimer} from './startTimer.js';

try {
    startTimer('thirty');
} catch (e) {
    console.log(`ERRO! Deu zica mano! ${e}`);
}

