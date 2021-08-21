var $ = document;
var colorChanger = $.getElementsByClassName("color-circle");
var inputmain = $.getElementById("mainInput");
var btnAdd = $.getElementById('btnAdd');
var btnClear = $.getElementById('btn-clear');
var CardContainer = $.getElementById('card-adder');
var btnsClose = $.getElementsByClassName('X');
var emptyIcon = $.getElementById('noCard');

//* X icon
function addCloseEvent(){
  btnsClose = $.getElementsByClassName('X');
  for (var i = 0 ; i < btnsClose.length ; i++) {
    btnsClose[i].addEventListener("click" , (event)=>{
      event.target.parentElement.parentElement.parentElement.remove();
    })
  }
}
+function addCloseevent(){
  addCloseEvent();
}();

//* color Change
for (var i = 0; i < colorChanger.length; i++) {
  colorChanger[i].addEventListener("click", function () {
    var colorset = this.style.backgroundColor;
    inputmain.style.backgroundColor = colorset;
    if (colorset == "gray") {
      inputmain.style.color = "white";
    } else {
      inputmain.style.color = "black";
    }
  })
}

//* Add note
inputmain.addEventListener('keyup' , event=>{
  if (event.keyCode == 13){
    btnAdd.onclick();
  }
} )
btnAdd.onclick = () => {
  if (inputmain.value == "") {
    alert('لطفا متن کارت را وارد کنید ...');
  }
  else {
    var newCard = $.createElement('div');
    newCard.className = "col-12 col-sm-6 col-lg-4 command-container";
    newCard.innerHTML = `<div style="background-color: ${inputmain.style.backgroundColor}" class="card-command border d-flex justify-content-center align-items-center p-2 mt-4"><button class="close X align-self-start" data-dismiss="card-command" aria-label="Close"><span aria-hidden="true">&times;</span></button><p class="text-center w-100"> ${inputmain.value} </p></div>`
    newCard.style.color = inputmain.style.color;
    CardContainer.append(newCard);
    inputmain.value = "";
    addCloseEvent();
  }
}

//*clearNotes
btnClear.addEventListener('click' , ()=>{
  if (confirm("آیا از حذف همه یادداشت ها اطمینان دارید ؟ ")){
    inputmain.style.backgroundColor = "white";
    inputmain.style.color = "black";
    inputmain.value = "";
    while (CardContainer.hasChildNodes()) {
      CardContainer.removeChild(CardContainer.firstChild);
    }
  }
}) 