!function(){var t={bodyEl:document.querySelector("body"),startBtn:document.querySelector("[data-start]"),stopBtn:document.querySelector("[data-stop]")};function n(){return"#".concat(Math.floor(16777215*Math.random()).toString(16))}t.startBtn.addEventListener("click",(function(){t.startBtn.disabled=!0,t.stopBtn.disabled=!1,t.bodyEl.style.backgroundColor=n(),timerId=setInterval((function(){t.bodyEl.style.backgroundColor=n()}),1e3)})),t.stopBtn.addEventListener("click",(function(){clearInterval(timerId),t.startBtn.disabled=!1})),t.stopBtn.disabled=!0}();
//# sourceMappingURL=01-color-switcher.4727434f.js.map