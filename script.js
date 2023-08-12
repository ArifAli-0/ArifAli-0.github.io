const btn = document.getElementById('learnMoreBtn')
const music = document.getElementById('music-check')
const movies = document.getElementById('movies-check')
const stories = document.getElementById('stories-check')
const feedback_form = document.getElementById('feedbackform')
const alert = document.getElementById('successAlert')
const appendAlert = (message, type) => {
    console.log("Showing alert")
    const wrapper = document.createElement('div')
    wrapper.innerHTML = [
      `<div class="alert alert-dismissible alert-${type} mt-3 p-3 m-5 fade show">`,
      `   <div>${message}</div>`,
      '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
      '</div>'
    ].join('')
  
    alert.append(wrapper)
}

feedback_form.addEventListener("submit", (event) => {
    console.log("form submitted");
    event.preventDefault();
    event.stopPropagation();
    if (feedback_form.checkValidity()) {
        const name = document.getElementById('nameInput').value
        console.log(name)
        feedback_form.classList.remove('was-validated');
        const message = `Thanks ${name} for your valuable feedback!`
        appendAlert(message, 'success')
    }
    else
        feedback_form.classList.add('was-validated');
});

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