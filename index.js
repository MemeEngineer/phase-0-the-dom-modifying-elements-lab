// Write your code here!
const main = document.querySelector('#main')

main.remove();

var newHeader = document.createElement('h1');

newHeader.setAttribute("id","victory")

newHeader.innerHTML = "Johnny is the champion"
document.body.append(newHeader);



