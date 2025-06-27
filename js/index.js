window.addEventListener("load", () => {
    const loader = document.querySelector(".loader").classList.add("loader-hidden");
    
    loader.addEventListener("transitionend", () => {
    document.body.removeChild(document.querySelector(".loader"));
    });
});