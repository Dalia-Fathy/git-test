var BookmarkName = document.getElementById("bookmarkName")
var WebsiteURL = document.getElementById("bookmarkURL")
var submitInbut = document.getElementById("submitBtn")
var mainIndex = 0;
var searchInput = document.getElementById("searchInput")

var bookmark = [];
if (localStorage.getItem("Data") != null) {
    bookmark = JSON.parse(localStorage.getItem("Data"))
    display()
}

function submit() {
    var site = {
        name: BookmarkName.value,
        url: WebsiteURL.value
    }
    if (submitInbut.innerHTML == "Submit") {
        bookmark.push(site);
    }
    else {
        bookmark.splice(mainIndex, 1, site)
        submitInbut.innerHTML = "Submit"
    }
    localStorage.setItem("Data", JSON.stringify(bookmark))
    display()
}


function display() {
    var temp = ""
    for (var i = 1; i <= bookmark.length; i++) {
        temp += `  <tr>
                    <td>`+ i + `</td>
                    <td>`+ bookmark[i - 1].name + `</td>
                    <td>
                     <a href="`+ bookmark[i - 1].url + `" target="_blank">
                         <button class="btn btn-visit pe-2" ">
                            <i class="fa-solid fa-eye"></i>
                            Visit
                        </button>
                     </a>
                    
                    </td>
                    <td>
                        <button class="btn btn-delete pe-2" onclick="deleteProduct(`+ [i - 1] + `)" >
                            <i class="fa-solid fa-trash-can"></i>
                            Delete
                        </button>
                    </td>
                     <td>
                            <button class=" btn btn-warning" onclick="updateProduct(`+ [i - 1] + `)">update</button>
                        </td>
                </tr>`

    }
    document.getElementById("tableBody").innerHTML = temp
    clear()
}

function search() {
    var temp = ""
    var searchData = searchInput.value.toLowerCase()
    for (var i = 0; i < bookmark.length; i++) {
        if (bookmark[i].name.toLowerCase().includes(searchData) == true) {
            temp += ` <tr>
                    <td>`+ i + `</td>
                    <td>`+ bookmark[i - 1].name + `</td>
                    <td>
                        <button class="btn btn-visit pe-2" onclick="visit(`+ [i - 1] + `)">
                            <i class="fa-solid fa-eye"></i>
                            Visit
                        </button>
                    </td>
                    <td>
                        <button class="btn btn-delete pe-2" onclick="deleteProduct(`+ [i - 1] + `)" >
                            <i class="fa-solid fa-trash-can"></i>
                            Delete
                        </button>
                    </td>
                </tr>`
        }
    }
    document.getElementById("tableBody").innerHTML = temp
}

function deleteProduct(productIndex) {
    bookmark.splice(productIndex, 1)
    localStorage.setItem("Data", JSON.stringify(bookmark))
    display()
}

function updateProduct(productIndex) {
    mainIndex = productIndex;
    var site = bookmark[productIndex];
    BookmarkName.value = site.name
    WebsiteURL.value = site.url

    submitInbut.innerHTML = "update product"
}

function clear(){
    BookmarkName.value = "",
    WebsiteURL.value = ""
}