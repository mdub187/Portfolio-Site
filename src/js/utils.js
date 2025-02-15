
// Function to handle before unload
function beforeUnloadListener(event) {
    event.preventDefault();
    event.returnValue = '';
}

// Add event listeners for unsaved changes
let isDirty = false;

// Example: Detect changes in input fields
const inputs = document.querySelectorAll('input, textarea, select');
inputs.forEach(input => {
    input.addEventListener('change', () => {
        isDirty = true;
    });
});

// Add before unload listener if there are unsaved changes
window.addEventListener('beforeunload', (event) => {
    if (isDirty) {
        beforeUnloadListener(event);
    }
});

// Example: Reset isDirty when changes are saved
const form = document.getElementById('form');
const log = document.getElementById('log');
form.addEventListener('submit', logSubmit);

const saveButton = document.getElementById('input');
if (saveButton) {
    saveButton.addEventListener('click', () => {
        isDirty = false;
    });
}
function addEventListener() {
    const button = document.getElementById('button');
    // clickEvent();
    innerHTML.addEventListener('click', () => {
        this.next();
    })
}

//rendring input
function renderBlogList() {
    const words = JSON.parse(localStorage.getItem('#input'))
    if (words) {
        for (const main of words) {
            words.forEach(input => {
                const submit = document.getElementById('input');
                submit.classList.add('button');
                submit.innerHTML = `
                <div class="card1">
                <h2>card1</h2>
                <h3><input autocomplete="on" type="text" id="title" name="title" placeholder="Title"></h3>
                <p>${this.words.content}</p>
                </div>
            `;
                document.body.appendChild(submit);
            });
        }
    } else {
        handleNoPosts()
    };
}

// A function that invokes a callback when the page's unsaved changes are resolved.
document.Window.Unbind('beforeunload');
onAllChangesSaved(() => {
    window.removeEventListener('beforeunload', beforeUnloadListener);
});

window.addEventListener('pageshow', (event) => {
    if (event.persisted && !document.cookie.match('/my-cookie')) {
        // Force a reload if the user has logged out.
        location.reload();
    }
});

let dbPromise;
function openDB() {
    if (!dbPromise) {
        dbPromise = new Promise((resolve, reject) => {
            const req = indexedDB.open('my-db', 1);
            req.onUpgradeNeeded = () => req.result.createObjectStore('keyval');
            req.onError = () => reject(req.error);
            req.onSuccess = () => resolve(req.result);
        });
    }
    return dbPromise;
}

// Close the connection to the database when the user leaves.
window.addEventListener('pagehide', () => {
    if (dbPromise) {
        dbPromise.then(db => db.close());
        dbPromise = null;
    }
});
let length = history.length;
function pageBack() {
    document.querySelectorAll.getElementById(back_btn).history.back(length);
}

// Open the connection when the page is loaded or restored from bfcache.
// window.addEventListener('pageshow', () => openDB());
// back forward
window.addEventListener('pageshow', (event = "import video from './video.js'") => {
    if (event.persisted) {
        console.log('This page was restored from the bfcache.');
    } else {
        console.log('This page was loaded normally.');
    }
});



video.autoPlay();
