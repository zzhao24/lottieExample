(() => {
    //get a ref to the lottie container
    const preloader = document.querySelector('.preloader');

    let preloadAnim = bodymovin.loadAnimation({
        wrapper : preloader,
        animType :'svg',
        loop : true,
        autoplay : false,
        path : './data/search.json'
    });

    function playAnmation() {
        preloadAnim.play();

}
     preloader.addEventListener("mouseover", playAnmation);

})();