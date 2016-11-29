  (function() {
    /* This code is based on Christian Heilman's tutorial 
     * https://www.christianheilmann.com/2015/04/08/keeping-it-simple-coding-a-carousel/
     */
    var appBox = document.querySelector(".slider-container");
    var prev = appBox.querySelector(".prev");
    var next = appBox.querySelector(".next");
    var slides = appBox.querySelectorAll(".slider-content");
    var counter = 0;
    var current = slides[0];
    var amount = slides.length;

    prev.addEventListener('click', function(ev) {
      navigate(-1);
    });
    next.addEventListener('click', function(ev) {
      navigate(1);
    });

    navigate(0);

    function navigate(direction) {
      current.classList.remove('active');
      counter = counter + direction;
      if (direction === -1 && counter < 0) {
        counter = amount - 1;
      }
      if (direction === 1 && !slides[counter]) {
        counter = 0;
      }
      current = slides[counter];
      current.classList.add("active");
    }

  })();