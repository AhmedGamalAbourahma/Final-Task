var paperThree = document.getElementById('paper-3'),
    paperTwo = document.getElementById('paper-2'),
    paperOne = document.getElementById('paper-1');
paperTwo.onclick = function () {
    'use strict';
    this.style.animation = '1s papers2 ease-out .2s 1 forwards';
};
paperThree.onclick = function () {
    'use strict';
    this.style.animation = '1s papers ease-out .2s 1 forwards';
};