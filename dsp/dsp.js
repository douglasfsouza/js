//var uri = "api/TodoItems"
var uri = "https://localhost:44309/api/Despesas"

function Listar () {
/*
    var oReq = new XMLHttpRequest();
    oReq
  oReq.addEventListener("load", reqListener);
  oReq.open("GET", uri);
  oReq.send();
  */
  
/*
    $.ajax({
        url: uri,
        type: "get",
        dataType: "json",
        mode: "no-cors",
        success: function (response) {
    
          if(response.data.length == 0){ 
              // EMPTY
             }else{
              var obj =jQuery.parseJSON(response.data);
                console.log(obj);
             }
         }
    });
    */
    
    
    fetch(uri,{
        headers: {'content-type' : 'application/json'},
        method: 'get',
        mode: 'no-cors',
        Access : {'Control-Allow-Origin' : '*'}
    })
      .then(response => _parseJSON(response))
      .then(data => listarDsp(data))
     
      //.catch(error => console.error("Não foi possivel ler as despesas",error));
  
}

function listarDsp(data) {
    //alert('d.Description')
    data.array.forEach(d => {
        alert(d.Description)
    });
    
}

function getItems() {
    fetch(uri)
      .then(response => response.json())
      .then(data => _displayItems(data))
      .catch(error => console.error('unable to get items.', error));
  }

  function _displayItems(data) {
    const tBody = document.getElementById('todos');
    tBody.innerHTML = '';
  
    _displayCount(data.length);
  
    const button = document.createElement('button');
  
    data.forEach(item => {
      let isCompleteCheckbox = document.createElement('input');
      isCompleteCheckbox.type = 'checkbox';
      isCompleteCheckbox.disabled = true;
      isCompleteCheckbox.checked = item.isComplete;
  
      let editButton = button.cloneNode(false);
      editButton.innerText = 'Edit';
      editButton.setAttribute('onclick', `displayEditForm(${item.id})`);
  
      let deleteButton = button.cloneNode(false);
      deleteButton.innerText = 'Delete';
      deleteButton.setAttribute('onclick', `deleteItem(${item.id})`);
  
      let tr = tBody.insertRow();
      
      let td1 = tr.insertCell(0);
      td1.appendChild(isCompleteCheckbox);
  
      let td2 = tr.insertCell(1);
      let textNode = document.createTextNode(item.name);
      td2.appendChild(textNode);
  
      let td3 = tr.insertCell(2);
      td3.appendChild(editButton);
  
      let td4 = tr.insertCell(3);
      td4.appendChild(deleteButton);
    });
    
    todos = data;
  }

  function _parseJSON(response) {
    return response.text().then(function(text) {
      return text ? JSON.parse(text) : {}
    })
  }

  function reqListener () {
    console.log(this.responseText);
  }
  
  
  