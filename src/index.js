document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let toDoForm = document.querySelector("form");
  toDoForm.addEventListener('submit', (e) => {
    e.preventDefault();
    buildElement(e.target);
    toDoForm.reset();
  })

  function buildElement(newtodo){

    //create toto elements
    let divContainer = document.createElement('div')
    let p1 = document.createElement('p');
    let p2 = document.createElement('p');
    let br = document.createElement("br");
    let btn = document.createElement('button');
    btn.addEventListener('click', delAction);
    //assign css
    if(newtodo.new_task_priority.value == "high"){
      divContainer.classList.add('todonodeshigh', 'tododiv');
    }
    else if(newtodo.new_task_priority.value == "medium"){
      divContainer.classList.add('todonodesmedium', 'tododiv');
    }
    else if(newtodo.new_task_priority.value == "low"){
      divContainer.classList.add('todonodeslow', 'tododiv');
    }
    else{
      divContainer.classList.add('todonodes', 'tododiv');
    }

    p1.className = "todoelements";
    p2.className = "todoelements";
    br.className = "todoelements";

    //add content
    btn.textContent = 'Del';
    p1.textContent = "Todo:" + newtodo.new_task_description.value.toString();
    p2.textContent = "Due:" + newtodo.new_task_due.value.toString();
    //put it together
    divContainer.appendChild(p1);
    divContainer.appendChild(br);
    divContainer.appendChild(p2);
    divContainer.appendChild(btn);

    //sort and add to dom
    //document.getElementById("tasks").appendChild(divContainer);
    sortAndAddToDom(divContainer);
  }


  
  function delAction(e){
    e.target.parentNode.remove();
  }

});

function sortAndAddToDom(todoContainer){
   
  //add to correct div

  if(todoContainer.classList.contains("todonodeshigh")){
    document.getElementById("hightasks").appendChild(todoContainer);

  }
  else if(todoContainer.classList.contains("todonodesmedium")){
    document.getElementById("mediumtasks").appendChild(todoContainer);
  }
  else if(todoContainer.classList.contains("todonodeslow")){
    document.getElementById("lowtasks").appendChild(todoContainer);
  }


}