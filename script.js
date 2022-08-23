var l=document.getElementById('t')
var button=document.getElementById('add-btn')
var textbox=document.getElementById('textbox')
var edit=document.getElementById('edit')
var editBtn=document.getElementById('editBtn')
var tasks=[]

function update() {
    l.innerHTML=""
var len=tasks.length
for(let i=0; i<len;i++){
    var btnDel=document.createElement('button')
    var btnEdit=document.createElement('button')
    btnEdit.appendChild(document.createTextNode('edit'))
    btnEdit.classList.add("btn-warning")
    btnEdit.classList.add("float-right")
    
    
    
    btnDel.appendChild(document.createTextNode('remove'))
    btnDel.classList.add("btn-danger")
    btnDel.classList.add("float-right")
    btnDel.addEventListener("click", function(){
        tasks.splice(tasks[i],1)
    update()
    }
    )
    btnEdit.addEventListener("click", function(){
        document.getElementById('editbox').value=tasks[i]
        document.getElementById('edit').style.display="flex"
        editBtn.onclick=function(){
            tasks[i]=document.getElementById('editbox').value
            document.getElementById('edit').style.display="none"
            update()
        }    
    
    }
    )
    var node = document.createElement('li')
    node.appendChild(document.createTextNode(tasks[i]))
    
    node.classList.add("list-group-item")
    node.classList.add("w-25")
    node.append(btnEdit)
    node.append(btnDel)
    
    l.appendChild(node)
    
}
}


button.addEventListener('click', add)
function add()
{
tasks.push(textbox.value)
update()
}


