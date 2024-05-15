import { setState } from "./state";
import loadExamples from './examples'

function retrieveStorage() {
    return JSON.parse(localStorage.getItem('state'));
}

function updateStorage(newContent){
    localStorage.setItem('state', JSON.stringify(newContent));
}

function intializeStorage() {
    if(localStorage.length === 0){
        loadExamples()
        return;
    };
    setState(retrieveStorage());
}

export { intializeStorage, updateStorage };