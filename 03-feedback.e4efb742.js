const e=document.querySelector(".feedback-form"),t=e.message,a=e.email;e.addEventListener("submit",(function(){evt.preventDefault(),evt.currentTarget.reset(),localStorage.removeItem("feedback-form-state")})),e.addEventListener("input",(function(){const e={email:a.value,message:t.value};localStorage.setItem("feedback-form-state",JSON.stringify(e))})),function(e){const o=JSON.parse(localStorage.getItem("feedback-form-state"));o&&(a.value=o.email,t.value=o.message),console.log(o)}();
//# sourceMappingURL=03-feedback.e4efb742.js.map
