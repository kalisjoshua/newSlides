(function () {
  var slideClasses,
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
    var slideNumber;

    slideNumber = change + ~~(window.location.hash || '#0').slice(1);

    slideNumber = Math.max(0, Math.min(slideNumber, slideCount - 1));

    window.location.hash = slideNumber;
  }

  function ready() {
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
      .map(function (content, indx) {
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
            .html(indx);

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
    var title;

    title = slide
      .children('article')
      .children()[0]
      .nodeName
      .toLowerCase();

    return slideClasses[title];
  }

  $(document)
    .on('keyup', function (event) {
      if (event.keyCode === 39 || event.keyCode === 37) {
        navigate(event.keyCode - 38, event);
      }
    });

  $(ready);
}());
