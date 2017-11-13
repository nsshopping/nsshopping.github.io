/* global window */
(function (window, document, $) {
    'use strict';

    $(function () {
        // by default, blog menu is active unless page
        var activeMenu = $('#menu > li.active');
        if (activeMenu.length === 0) {
            activeMenu.removeClass('active');
            if ($(document.body).hasClass('page')) {
                $('#menu > li:nth-child(2)').addClass('active');
            } else {
                $('#menu > li:first-child').addClass('active');
            }
        }

        $('#menu-toggle').click(function (e) {
            e.stopPropagation();
            e.preventDefault();
            if ($('#menu').is(':visible')) {
                $('#menu').hide();
            } else {
                $('#search').hide();
                $('#menu').show();
            }
        });

        $('#search-toggle').click(function (e) {
            e.stopPropagation();
            e.preventDefault();
            if ($('#search').is(':visible')) {
                $('#search').hide();
            } else {
                $('#menu').hide();
                $('#search').show();
            }
        });

        $(window).scroll(function () {
            var viewportTop = $(window).scrollTop();
            if (viewportTop) {
                var viewportBottom = viewportTop + $(window).height();
                var footerTop = $('#footer').offset().top;
                if ((footerTop <= viewportBottom) && (footerTop >= viewportTop)) {
                    // footer is visible: static above footer
                    $('#back-to-top').addClass('static').show();
                } else {
                    // footer is invisible: fixed on bottom-right of viewport
                    $('#back-to-top').removeClass('static').show();
                }
            } else {
                // already top: hide
                $('#back-to-top').hide();
            }
        });

        // show/hide cover videos by browser
        var coverVideos = $('#cover video');
        if (/Mobi/.test(window.navigator.userAgent)) {
            coverVideos.remove();
        } else {
            coverVideos.click(function (e) {
                var v = e.target;
                if (v.paused) {
                    v.play();
                } else {
                    v.pause();
                }
            }).each(function (i, v) {
                v.play();
            }).show();
        }

        // turn img alt into caption
        $('#post-content > p > img[alt]').replaceWith(function () {
            return '<figure>'
                + '<a href="' + $(this).attr('src') + '" class="mg-link">'
                + '<img src="' + $(this).attr('src') + '"/></a>'
                + '<figcaption class="caption">' + $(this).attr('alt') + '</figcaption>'
                + '</figure>';
        });
        // and connect magnific popup image viewer
        $('#post-content .mg-link').magnificPopup({
            type: 'image',
            closeOnContentClick: true
        });
    });
    
    //Main Random tile 
    if($('body').hasClass('home-template')){
        var postWrap = $('#post-list');
        var postIdx = $('#post-list').find('.post-item');
        var postLeng = postIdx.length;     

        function randomBackground(min, max, choice) {
            var bgArray = [];
            var bgResult = [];
            var bgNum;
            var addNum = 0;

            for (i=min; i<=max; i++) {
                bgArray.push(i);
            }
            for (i=0; i<choice; i++) {
                bgNum = Math.floor(Math.random() * bgArray.length);
                bgResult.push(bgArray[bgNum]); // 랜덤으로 선택된 숫자 순서대로 bgReult에 저장
                bgArray.splice(bgNum, 1);    // 선택된 숫자 bgArray에서 삭제, 중복 선택 방지
            }        
            bgResult = bgResult.join('');  

            postIdx.each(function(n){
                addNum = bgResult[n]
                postIdx.eq(n).addClass('tile_'+addNum);
            })

        }
        randomBackground(1, postLeng, postLeng);//Min, Max, Choice
    }

}(window, window.document, window.jQuery));
