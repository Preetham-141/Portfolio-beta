const menu_boxes=document.querySelectorAll(".pbox");
const sigil=document.querySelector(".sigil");

menu_boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        window.location.href=box.dataset.page;
    });
});