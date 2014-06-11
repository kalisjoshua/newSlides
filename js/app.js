(function () {
  var currentSlide,
      slideClasses,
      slideCount;

  slideClasses = {
    'h1': 'slide--title',
    'h2': 'slide--content'
  };

  function loadDeck() {
    var deck;

    deck = document.location.search
      .match(/^\?doc=(.*?)\/?$/)[1];

    $.get(deck + '.md', function (data) {
      renderSlides(data)
    });
  }

  function navigate(change, event) {
    event.preventDefault();

    window.location.hash = currentSlide = Math.max(0, Math.min(change + currentSlide, slideCount - 1));
  }

  function ready() {
    currentSlide = ~~(window.location.hash || '#0').slice(1);

    if (document.location.search) {
      loadDeck();
    } else {
      $('.menu')
        .removeClass('menu');
    }
  }

  function renderSlides(src) {
    var slideTemplate;

    slideTemplate = $('<section><article></article><footer></footer></section>');

    document.body.innerHTML = marked(src)
      .split('<hr>')
      .map(function (content, indx, all) {
        var slide;

        slide = slideTemplate
          .clone();

        if (content.length > 1) {
          slide
            .attr('id', indx)
            .find('article')
            .append(content);

          slide
            .find('footer')
            .html(indx + ' of ' + all.length);

          slide
            .addClass(slideClassLookup(slide));

          return $('<div>')
            .append(slide)
            .html();
        }
      })
      .join('');

    slideCount = $('body')
      .children('section')
      .length;

    Prism.highlightAll();

    $(document.body)
      .animate({
        'scrollTop': $(window.location.hash || '#0').offset().top
      }, 100);
  }

  function slideClassLookup(slide) {
    var children,
        title;

    children = slide
      .children('article')
      .children();
      
    title = children[0]
      .nodeName
      .toLowerCase();

    return children.length === 1 ? slideClasses.h1 : slideClasses[title];
  }

  $(document)
    .on('keydown', function (event) {
      var delta,
          moveLR,
          moveUD;

      // arrow keys - left and right
      moveLR = event.keyCode - 38;

      // arrow keys - up and down
      moveUD = event.keyCode - 39;

      if (Math.abs(moveLR) === 1 || Math.abs(moveUD) === 1) {
        delta = Math.abs(moveLR) === 1 ? moveLR : !~moveUD ? -currentSlide : (slideCount - 1 - currentSlide);
        navigate(delta, event);
      }
    });

  window.onhashchange = function () {
    currentSlide = ~~(window.location.hash || '#0').slice(1);
  };

  $(ready);
}());
