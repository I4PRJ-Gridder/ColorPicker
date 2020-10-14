class ColorPicker {
    //constructor
    constructor(currentColor = "black") {
        // set member variables:
        this.currentColor = currentColor; // current color member
        this.currentObj = undefined; // current color object
        this.colorIndicator = document.getElementById("currentColor"); // color indicator object
        this.colors = document.querySelector(".color-wrap").children; // list of color objects

        //update color:
        this.updateColor(currentColor);
        
        // set color button evenlisteners:
        for (var i = 0; i < this.count(); i++) {
            this.colors[i].addEventListener('click', this.click.bind(this), false);
        }
    }

    // color click event
    click(e) {
        // update current color indicator
        this.updateCurrentObj(e.target);

        // set color of test square:
        this.updateColor(e.target.style.backgroundColor);
    }

    // set color and update
    updateColor(color) {
        this.currentColor = color;
        this.colorIndicator.style.background = this.currentColor;
    }

    updateCurrentObj(obj) {
        // previous current color style if defined
        if (this.currentObj !== undefined) {
            this.currentObj.className = "";
        }

        // update current color style
        this.currentObj = obj;
        obj.className = "color-selected";
    }

    count() {
        var l = this.colors.length;
        return l;
    }
}

var colorPicker = new ColorPicker();

// test that color member updates by printing:
setInterval(function () {
    console.log(colorPicker.currentColor)
}, 2000);