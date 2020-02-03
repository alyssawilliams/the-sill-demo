var qnas = document.getElementsByClassName('question-and-answer');

for (let i = 0; i < qnas.length; i++) {
  qnas[i].addEventListener('click', function() {
    this.classList.toggle('open');
    var answer = this.getElementsByClassName('answer')[0];
    
    if (answer.style.maxHeight) {
      answer.style.maxHeight = null;
    } 
    else {
      answer.style.maxHeight = answer.scrollHeight + 'px';
    } 
  });
}
