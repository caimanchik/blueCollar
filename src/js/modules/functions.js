export function isWebp() {
    function testWebP(callback) {
        let webP = new Image();
        webP.onload = webP.onerror = function () {
            callback(webP.height === 2);
        };
        webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
    }

    testWebP(function (support) {
        let className = support ? 'webp' : 'no-webp'
        document.documentElement.classList.add(className)
    });
}

export function header() {
    
    let links = document.querySelector('.header-links');
    
    let top = links.getBoundingClientRect().top
    
    document.addEventListener('scroll', e => {
        if (document.documentElement.scrollTop < top) {
            links.style.top = `${top - document.documentElement.scrollTop}px`
        } else
            links.style.top = "0px"
    })
    
}
