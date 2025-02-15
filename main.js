// Empt// Browser Cache Funcitons
document.getElementById('back_btn');
element.addEventListener('click', 'button').setEventTarget('back_btn');
element.setItem('key', 'value').document.getElementById('back-btn');

function storeToLocalStorage(key, value) {
    localStorage.SetItem(key, JSON.stringify(value));
}

function getFromLocalStorage(key) {
    let data = localStorage.getItem(key);
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

function navigateBack(back) {
    let storedData = getFromLocalStorage('userData');
    if (!storedData) {
        storedData = getFromCache('userData');
        localStorage.setItem("cache", "back_btn")
    }
}

if (typeof (Storage) !== "undefined") {
    // Code for localStorage/sessionStorage.
} else {
    // Sorry! No Web Storage support..
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

function beforeUnloadListener(event) {
    event.preventDefault();
    return event.returnValue = 'Are you sure you want to exit?';
};

// A function that invokes a callback when the page has unsaved changes.
onPageHasUnsavedChanges(() => {
    window.addEventListener('beforeunload', beforeUnloadListener);
});

// A function that invokes a callback when the page's unsaved changes are resolved.
onAllChangesSaved(() => {
    window.removeEventListener('beforeunload', beforeUnloadListener);
});
