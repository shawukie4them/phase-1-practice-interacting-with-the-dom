var counter = document.getElementById('counter');
var count = 0;
var intervalId;
var isPaused = false;
var likes = {};

function incrementCounter(){
    count++;
    counter.innerText = count;
}

function decrementCounter(){
    count--;
    counter.innerText = count;
}

function likeNumber(){
    if (likes[count]){
        likes[count]++;
    }else{
        likes[count] = 1;
    }
    displayLikes();
}

function displayLikes(){
    var likesList = document.querySelector('.likes');
    likesList.innerHTML = '';
    for (var key in likes){
        var li = document.createElement('li');
        li.innerText = `Number ${key} has been liked ${likes[key]} time(s)`;
        likesList.appendChild(li);
    }
}

function pauseCounter(){
    if(isPaused){
        intervalId = setInterval(incrementCounter, 1000);
        document.getElementById('pause').innerText = 'pause';
        document.getElementById('minus').disabled = false;
        document.getElementById('plus').disabled = false;
        document.getElementById('heart').disabled = false;
    }else{
        clearInterval(intervalId);
        document.getElementById('pause').innerText = 'resume';
        document.getElementById('minus').disabled = true;
        document.getElementById('plus').disabled = true;
        document.getElementById('heart').disabled = true;
    }
    isPaused = !isPaused;
}
function addComment(event){
    event.preventDefault();
    var commentInput = document.getElementById('comment-input');
    var commentText = commentInput.value;
    if(commentText){
        var commentList = document.getElementById('list');
        var commentDiv = document.createElement('div');
        commentDiv.innerText = commentText;
        commentList.appendChild(commentDiv);
        commentInput.value = '';
    }
}

document.getElementById('plus').addEventListener('click', incrementCounter);
document.getElementById('minus').addEventListener('click', decrementCounter);
document.getElementById('heart').addEventListener('click', likeNumber);
document.getElementById('pause').addEventListener('click', pauseCounter);
document.getElementById('comment-form').addEventListener('submit', addComment);

intervalId = setInterval(incrementCounter, 1000);