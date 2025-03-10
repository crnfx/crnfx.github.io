const priceTablesHead=document.querySelectorAll(".price__head");priceTablesHead.forEach(e=>{e.addEventListener("click",function(){this.parentElement.querySelector(".price__body").classList.toggle("hidden")})});const modalSuccess=document.querySelectorAll(".hero__modal--success"),heroModalOverlaySuccess=document.querySelector(".hero__overlay--success");heroModalOverlaySuccess.addEventListener("click",e=>{e.target==heroModalOverlaySuccess&&heroModalOverlaySuccess.classList.remove("modal__overlay--visible"),heroModalOverlaySuccess.classList.remove("modal__overlay--visible")});const footerTelSelector=document.querySelector(".footer-tel"),footerTabletTelSelector=document.querySelector(".footer-tel--tablet"),inputMask=new Inputmask("+7 (999) 999-99-99");inputMask.mask(footerTelSelector),inputMask.mask(footerTabletTelSelector);const validationFooter=new JustValidate("#footer-form");validationFooter.addField(".footer-name",[{rule:"required",errorMessage:"Вы не ввели имя"},{rule:"minLength",value:2,errorMessage:"Вы не ввели имя"},{rule:"maxLength",value:30,errorMessage:"Вы не ввели имя"},]).addField(".footer-tel",[{rule:"function",validator:function(){let e=footerTelSelector.inputmask.unmaskedvalue();return 10===e.length},errorMessage:"Вы не ввели телефон"},]).addField(".footer-text",[{rule:"required",errorMessage:"Вы не ввели причину обращения"},{rule:"minLength",value:2,errorMessage:"Вы не ввели причину обращения"},{rule:"maxLength",value:5e3,errorMessage:"Вы не ввели причину обращения"},]).onSuccess(e=>{console.log("Validation passes and form submitted",e),e&&heroModalOverlaySuccess.classList.add("modal__overlay--visible");let r=new FormData(e.target);console.log(...r);let t=new XMLHttpRequest;t.onreadystatechange=function(){4===t.readyState&&200===t.status&&console.log("Отправлено")},t.open("POST","mail.php",!0),t.send(r),e.target.reset()});const validationFooterTablet=new JustValidate("#footer-form--tablet");validationFooterTablet.addField(".footer-name--tablet",[{rule:"required",errorMessage:"Вы не ввели имя"},{rule:"minLength",value:2,errorMessage:"Вы не ввели имя"},{rule:"maxLength",value:30,errorMessage:"Вы не ввели имя"},]).addField(".footer-tel--tablet",[{rule:"function",validator:function(){let e=footerTabletTelSelector.inputmask.unmaskedvalue();return 10===e.length},errorMessage:"Вы не ввели телефон"},]).addField(".footer-text--tablet",[{rule:"required",errorMessage:"Вы не ввели причину обращения"},{rule:"minLength",value:2,errorMessage:"Вы не ввели причину обращения"},{rule:"maxLength",value:5e3,errorMessage:"Вы не ввели причину обращения"},]).onSuccess(e=>{console.log("Validation passes and form submitted",e),e&&heroModalOverlaySuccess.classList.add("modal__overlay--visible");let r=new FormData(e.target);console.log(...r);let t=new XMLHttpRequest;t.onreadystatechange=function(){4===t.readyState&&200===t.status&&console.log("Отправлено")},t.open("POST","mail.php",!0),t.send(r),e.target.reset()});