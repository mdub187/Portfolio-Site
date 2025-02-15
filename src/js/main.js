// Browser Cache Funcitons


function storeToLocalStorage(key, value) {
    localStorage.SetItem(key, JSON.stringify(value));
}

function getFromLocalStorage(key) {
    let data = localStorage.getItem();
    return data ? JSON.parse(data) : null;
}

function clearLocalStorage() {
    localStorage.clear();
}

function storeToCache(key, value) {
    sessionStorage, setItem(key, JSON.stringify(value));
}

function getFromCache(key) {
    let data = sessionStorage.getItem(key);
    return data ? JSON.parse(data) : null;
}

function navigateBack() {
    let storedData = getFromLocalStorage('userData');
    if (!storedData) {
        storedData = getFromCache('userData');
    }
}

function navigateForward() {
    let currentData = {};
    storeToLocalStorage('userData', currentData)
}

// back forward
window.addEventListener('pageshow', (event) => {
    if (event.persisted) {
        console.log('This page was restored from the bfcache.');
    } else {
        console.log('This page was loaded normally.');
    }
});

const form = document.getElementById('#form');
const log = document.getElementById('log');
document.addEventListener('submit', form); {
    // if (saveButton) {
    //     saveButton.addEventListener('click')., () => {
    //         ;
    //     });
}


// A function that invokes a callback when the page's unsaved changes are resolved.
// document.Window.Unbind('beforeunload');
// onAllChangesSaved(() => {
//     window.removeEventListener('beforeunload', beforeUnloadListener);
// });
