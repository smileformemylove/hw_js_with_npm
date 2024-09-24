'use strict'

let ladder = {
    step: 0,
    up: function () {
        this.step++;
        return this;
    },
    down: function () {
        this.step--;
        return this;
    },
    showStep: function () { // показывает текущую ступеньку
        alert(this.step);
        return this;
    }
};


ladder.up().up().down().showStep(); // 1

// ladder.up().up().down().up().down().down().down().showStep();

// ladder.up();
// ladder.up();
// ladder.down();
// ladder.showStep(); // 1
