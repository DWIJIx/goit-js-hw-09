!function(){var t={bodyEl:document.querySelector("body"),startBtn:document.querySelector("[data-start]"),stopBtn:document.querySelector("[data-stop]")};t.startBtn.addEventListener("click",(function(){return t.startBtn.disabled=!0,t.stopBtn.disabled=!1,t.bodyEl.style.backgroundColor=n(),timerId=setInterval((function(){t.bodyEl.style.backgroundColor=n()}),1e3)})),t.stopBtn.addEventListener("click",(function(){clearInterval(timerId),t.startBtn.disabled=!1,t.stopBtn.disabled=!0})),t.stopBtn.disabled=!0;function n(){return"#".concat(Math.floor(16777215*Math.random()).toString(16))}}();
//# sourceMappingURL=01-color-switcher.f2995320.js.map
