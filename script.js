/*function addTodo()
{
  const input1 = document.querySelector("input"); //select the first element in the DOM and document is the html(root) 
console.log(input1.value);
}
*/

//add,delete update ,fetch
/*
function deleteTodo(index)
{
  const element = document.getElementById("todo-"+index);
  element.parentNode.removeChild(element);
}
*/
/*
function addTodo()
{
  const element = document.createElement("h4");
  element.innerHTML = document.querySelector("input").value;
  const el1 = document.querySelector("body");
  el1.appendChild(element);

}*/
let ctr=1;
function addTodo()
{
  const input1 = document.querySelector("input"); //1.fetch input
  const value = input1.value;                    //2.take input value
  if(value=="")
  {
    alert("Please enter a input");
    return;
  }
  else{
  const element = document.createElement("div");  //3.create 
  element.setAttribute("id","todo-"+ctr);
  element.innerHTML=value +'<button class="new" onclick ="deleteTodo('+ ctr +')">delete</button>';                        //4.equate
  document.getElementById("todo").appendChild(element); //5.attatch in the application
  input1.value="";//clear input after adding
  ctr = ctr + 1;
  }
}
function deleteTodo(index)
{
  const ele = document.getElementById("todo-"+index);
  ele.parentNode.removeChild(ele);
  
}