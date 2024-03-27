
const wrapper = document.querySelector(".wrapper"),
qrInput = wrapper.querySelector(".form input"),
generateBtn = wrapper.querySelector(".form button"),
qrImg= wrapper.querySelector(".qr img");
let preValue;

generateBtn.addEventListener("click", ()=> {
     let qrValue = qrInput.value.trim();
     if(!qrValue || preValue === qrValue) return;
     preValue = qrValue;
     console.log(preValue)
     generateBtn.innerText = "generating QR Code...";
     qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${qrValue}`;
     qrImg.addEventListener("load", () => {
          wrapper.ClassList.add("active");
          generateBtn.innerText = "Generate Qr Code";

     });
});
qrInput.addEventListener("keyup", () =>{
     if(!qrInput.value.trim()){
          wrapper.ClassList.remove("active");
          preValue ="";
     }
})
