const filterItem = document.querySelector(".items")
const filterImg = document.querySelectorAll(".image")

window.onload = ()=>{
    filterItem.onclick = (selectedItem)=>{
        if(selectedItem.target.classList.contains("item")){
            filterItem.querySelector(".active").classList.remove("active"); //remove the active to class
            selectedItem.target.classList.add("active"); //add active to class
            let filterName = selectedItem.target.getAttribute("data-name");
            filterImg.forEach((image) => {
                let filterImages = image.getAttribute("data-name");
                if((filterImages == filterName) || filterName == "all"){
                    image.classList.remove("hide");
                    image.classList.add("show");
                }
                else{
                    image.classList.add("hide");
                    image.classList.remove("show");
                }
            });
        }
    }
    for (let index = 0; index < filterImg.length; index++) {
        filterImg[index].setAttribute("onclick", "preview(this)");
        
    }
}

const previewBox = document.querySelector(".preview-box"),
previewImg = previewBox.querySelector("img"),
categoryName = previewBox.querySelector(".title p"),
closeIcon = previewBox.querySelector(".icon");
shadow = document.querySelector(".shadow");

//full screen view function
function preview(element){
    document.querySelector("body").style.overflow = "hidden";
    let selectedPrevImg = element.querySelector("img").src;
    let selectedImgCategory = element.getAttribute("data-name");
    categoryName.textContent = selectedImgCategory;
    previewImg.src = selectedPrevImg;
    console.log(selectedPrevImg);
    previewBox.classList.add("show");
    shadow.classList.add("show");
    closeIcon.onclick = ()=>{
        previewBox.classList.remove("show"); //if user click on cut icon
        shadow.classList.remove("show");
        document.querySelector("body").style.overflow = "scroll";
    }
}