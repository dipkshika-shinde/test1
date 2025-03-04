var itemlist=document.querySelector('.itemlist')
var add=document.querySelector('.add');
var remove=document.querySelector('.remove');

console.log(itemlist)
console.log(add)
console.log(remove)



add.addEventListener('click', function() {
    const newItem = document.createElement('li');
    newItem.textContent = 'New Item';
    itemlist.appendChild(newItem);
});

remove.addEventListener('click', function() {
    const lastItem = itemlist.lastElementChild;
    if (lastItem) {
        itemlist.removeChild(lastItem);
    }
});
