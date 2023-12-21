var siteName = document.getElementById("siteName")
var siteUrl = document.getElementById("siteUrl")
var overlay = document.getElementById("overlay")
console.log(overlay);

var bookmarkContainer = []

// if(localStorage.getItem('bookmark' != null)){
//     bookmarkContainer = JSON.parse(localStorage.getItem('bookmark'))
//     displayBookmark(bookmarkContainer)
// }

if (localStorage.getItem("bookmark")) {
    bookmarkContainer = JSON.parse(localStorage.getItem("bookmark"));
    for (var x = 0; x < bookmarkContainer.length; x++) {
      displayBookmark(x);
    }
  }

function addBookmark(){

    if (
        siteName.classList.contains("is-valid") &&
        siteUrl.classList.contains("is-valid")
      ){

    var bookmark = {
        pSiteName: siteName.value ,
        pSiteUrl: siteUrl.value
    }
    bookmarkContainer.push(bookmark);
    localStorage.setItem('bookmark' , JSON.stringify(bookmarkContainer))
    displayBookmark(bookmarkContainer)
    clear()
    siteName.classList.remove("is-valid");
    siteUrl.classList.remove("is-valid");
  }    else {
    overlay.classList.replace("d-none", "d-flex");
  }
    

}

function clear(){
    siteName.value =""
    siteUrl.value =""

}

function displayBookmark(){
    var cartoona=``
    for(var i = 0; i < bookmarkContainer.length; i++ )
    {
        cartoona += `<tr>
        <td>${i+1}</td>
        <td>${bookmarkContainer[i].pSiteName}</td>
        <td>
        <a href="${bookmarkContainer[i].pSiteUrl}"> <button class="btn btn-visit"><i class="fa-solid fa-eye pe-2"></i>Visit</button></a>
        </td>
        <td>
            <button class="btn btn-danger" onclick="deleteBookmark(${i})"> <i class="fa-solid fa-trash-can pe-2"></i>Delete</button>
        </td>
        </tr>
        `
    }
    document.getElementById("tableBody").innerHTML =  cartoona;
}

function deleteBookmark(productIndex){

    bookmarkContainer.splice(productIndex,1);
    localStorage.setItem('bookmark', JSON.stringify(bookmarkContainer))
    displayBookmark(bookmarkContainer);

}



var nameRegex = /^\w{3,}(\s+\w+)*$/;
var urlRegex = /^(https?:\/\/)?(w{3}\.)?\w+\.\w{2,}\/?(:\d{2,5})?(\/\w+)*$/;

siteName.addEventListener("input", function () {
  validate(siteName, nameRegex);
});

siteUrl.addEventListener("input", function () {
  validate(siteUrl, urlRegex);
});

function validate(element, regex) {
  var testRegex = regex;
  if (testRegex.test(element.value)) {
    element.classList.add("is-valid");
    element.classList.remove("is-invalid");
  } else {
    element.classList.add("is-invalid");
    element.classList.remove("is-valid");
  }
}


document.querySelector(".cl").addEventListener("click", function(){
    document.querySelector(".overlay").classList.replace("d-flex","d-none")
})

  
