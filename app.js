const tagsEl = document.getElementById('tags');
const textArea = document.getElementById('text-area');
const randomBtn = document.getElementById('random-btn');



textArea.focus();

textArea.addEventListener('keyup', (e) => {
    createTags(e.target.value);

    if(e.key === 'Enter') {
        setTimeout(() => {
            e.target.value =''
        },100);

        randomPicker();
    }
});

randomBtn.addEventListener('click', (e) =>{
        randomPicker();
});



function createTags(input) {
    const tags = input.split(',').filter(tag => tag.trim() !== '').map(tag => tag.trim());
    
    tagsEl.innerHTML = '';

    tags.forEach(tag => {
        const tagEl = document.createElement('span');
        tagEl.classList.add('tag');
        tagEl.innerText = tag;
        tagsEl.appendChild(tagEl);
    })
}

function randomPicker() {
    const times = 20;

    const interval = setInterval(() => {
        const randomTag = pickRandomTag()

        highlight(randomTag)

        setTimeout(() => {
            unHighlight(randomTag)
        },100);
    }, 100);

    setTimeout(() => {
        clearInterval(interval)

        setTimeout(() => {
            const randomTag = pickRandomTag();

            highlight(randomTag);
        },100);

    },times * 100);
}

function pickRandomTag() {
    const tags = document.querySelectorAll('.tag')
    return tags[Math.floor(Math.random()*tags.length)]
}

function highlight(tag) {
    tag.classList.add('highlight');
}

function unHighlight(tag) {
    tag.classList.remove('highlight'); 
}