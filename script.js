var l=document.getElementById('t')
var button=document.getElementById('add-btn')
var textbox=document.getElementById('textbox')



button.addEventListener('click', add)
function add()
{
var btn=document.createElement('button')
btn.appendChild(document.createTextNode('remove'))
btn.classList.add("btn-primary")
btn.classList.add("float-right")
btn.addEventListener("click", function(){btn.parentElement.remove()})
text=textbox.value
var node = document.createElement('li')
node.appendChild(document.createTextNode(text))
node.classList.add("list-group-item")
node.classList.add("w-25")
node.append(btn)
 
l.appendChild(node)


}


