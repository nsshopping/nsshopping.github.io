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
    randomBackground(1, 4, postLeng);//Min, Max, Choice
}
