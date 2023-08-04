const imageInp = document.querySelector(".imageInp")
const imgNameSpan = document.querySelectorAll(".ImgNameSpan")
let img;
let imgName;

const chooseFlie = () => {
    imageInp.click();
};

const getImgData = (e) => {
    img = e.target.imgs[0];
    imgName = "product" + img.name;
    if (imgName) {
        imgNameSpan.style.
    }
}