const btn = document.getElementById('learnMoreBtn')
const music = document.getElementById('music-check')
const movies = document.getElementById('movies-check')
const stories = document.getElementById('stories-check')

document.getElementById('close-music-desc').addEventListener('click', () => {
    document.getElementById('music-desc').classList.remove('fade-in')
    music.checked=false
})

document.getElementById('close-movies-desc').addEventListener('click', () => {
    document.getElementById('movies-desc').classList.remove('fade-in')
    movies.checked=false
})

document.getElementById('close-stories-desc').addEventListener('click', () => {
    document.getElementById('stories-desc').classList.remove('fade-in')
    stories.checked=false
})


btn.addEventListener('click', () =>{
    if(music.checked){
        document.getElementById('music-desc').classList.add('fade-in')
    }
    if(movies.checked){
        document.getElementById('movies-desc').classList.add('fade-in')
    }
    if(stories.checked){
        document.getElementById('stories-desc').classList.add('fade-in')
    }
})