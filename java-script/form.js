document.addEventListener('DOMContentLoaded', function(){
    document.querySelector('form').onsubmit = function(){
        const name = document.querySelector('#name-field').value;
        alert(`Hello, ${name}.`)
    }
})