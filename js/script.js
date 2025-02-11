let bars = document.querySelector("nav i");
let ulSections = document.querySelector("nav ul");
let liSections = document.querySelectorAll("nav ul li");


let isUlOpen = false;
bars.addEventListener("click",function() {
    isUlOpen = !isUlOpen; // عكس القيمة
    console.log(isUlOpen);
    //console.log(ulSections.style.display == "flex");
    if(isUlOpen) {
        ulSections.style.cssText = `
        display: flex;
        flex-direction: column;
        bottom: -158px;
        position: absolute;
        right: 0;`
        liSections.forEach(element => {
            element.style.cssText = `
            background: #0d0a1d;
            width: 120px;
            padding-top: 5px;
            padding-bottom: 5px;
            text-align: center;`
            element.addEventListener("click", function() {
                isUlOpen = !isUlOpen;
                ulSections.style.cssText = `display: none`
            });
        });
    } else {ulSections.style.cssText = `display: none`}
});
