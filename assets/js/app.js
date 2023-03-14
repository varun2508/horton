import $ from 'jquery';

window.jQuery = $;

$(document).ready(function () {

    function App () {
        this.init();
    }

    App.prototype = {

        /*
         * ----------------------------------------------------------------------------------------
         *  INIT SCRIPT
         * ----------------------------------------------------------------------------------------
         */
        init: function () {
            let self = this;

            self.hidePreloader();
            self.initSlickSlider();
            self.animateLetters('.animated-title-1');
            self.animateLetters('.animated-title-2', 2800);
        },

        /*
         * ----------------------------------------------------------------------------------------
         *  Hide Preloader
         * ----------------------------------------------------------------------------------------
         */
        hidePreloader: function() {
            let self = this;

            $('#preloader').delay(1500).fadeOut(function() {
                $(this).remove();
                self.animateBlocks();
            });
        },

        /*
         * ----------------------------------------------------------------------------------------
         *  Animate Header Elements
         * ----------------------------------------------------------------------------------------
         */
        animateBlocks: function() {
            $('.header').addClass('animate__fadeInDown');
            $('.animate-el-1').addClass('animate__fadeInLeft');
            $('.animate-el-2').addClass('animate__fadeInUp');
            $('.animate-el-3').addClass('animate__delay-05s animate__fadeInUp');

            setTimeout(function() {
                $('.header-row').addClass('loaded');
            }, 300)
        },

        /*
         * ----------------------------------------------------------------------------------------
         *  Animate Header Title
         * ----------------------------------------------------------------------------------------
         */
        animateLetters: function(element, delay = 2000) {
            let title = $(element);
            title.html(title.text().replace(/\S/g, "<span class='letter'>$&</span>"));

            anime.timeline({loop: false})
              .add({
                targets: element + ' span',
                translateX: [40,0],
                translateZ: 0,
                opacity: [0,1],
                easing: "easeOutExpo",
                duration: 2500,
                delay: (el, i) => delay + 60 * i
            });

            title.css('opacity', '1');
        },

        /*
         * ----------------------------------------------------------------------------------------
         *  Init News Slider
         * ----------------------------------------------------------------------------------------
         */
        initSlickSlider: function() {
            $('.news-slider').slick({
                slidesToShow: 5,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 2000,
                nextArrow: '.btn-next',
                prevArrow: '.btn-prev'
            });
        }

    };

    new App();

});
