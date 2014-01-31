var getAnimations = function() {
    var lisArray = [],
        numberOfAnimations = 0;
    var li = document.getElementsByTagName('li'),
        len = li.length;
    for (var i = 0; i < len; i++) {
        if (li[i].innerHTML === '\\o\/') {
            numberOfAnimations++;
        }
        lisArray.push(li[i]);
    }
    console.log('number of animation cycles: ' + numberOfAnimations);
    return lisArray;
}

var setupItemsListener = function(){
    var divContents = document.getElementById('contents');
    divContents.addEventListener('click', clickEvent);
}

var clickEvent = function(e) {
    var target = e.target;
    if (target && target.className.indexOf('happy') < 0) {
        target.parentNode.removeChild(target);
        countBigFrames();
    } else {
        alert("Don't remove happiness from your site.");
    }
};

var countBigFrames = function () {
    var lisArray = getAnimations(),
        lisArrayLen = lisArray.length,
        numberOfBigFrames = 0;

    for (var i=0; i<lisArrayLen; i++)
    {
        var li = lisArray[i];
        var className = (Math.floor((Math.random()*2)+1) === 1 ? ' thin' : ' thick');
        if(li.className.indexOf('thin') >= 0 || li.className.indexOf('thick') >= 0) {
            li.className.replace(/ thin| thick/, className);
        }
        else {
            li.className += className;
        }

        if (li.className.indexOf('rightmost') >= 0 || li.className.indexOf('leftmost') >= 0) {
            numberOfBigFrames++;
        }
    }

    console.log('numberOfBigFrames: ' + numberOfBigFrames);
}

setupItemsListener();
countBigFrames();