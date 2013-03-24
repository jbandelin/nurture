
// UI

(function(){
    
    // SETUP
    var POINTS = 1288;
    var BATTERY = 100;

    var drawPoints = function(){
        $(".total-points").text(POINTS);
    }

    var drawBattery = function(batteryLevel){
        BATTERY = batteryLevel;
        var batterySrc = "img/battery";
        if (BATTERY > 50) {
            batterySrc += "100.png";
        }
        else if (BATTERY > 5) {
            batterySrc += "50.png";
        }
        else if (BATTERY == 0) {
            batterySrc += "0.png";
        }
        $(".battery img").attr("src", batterySrc)
    }

    var setCritterAnimation = function(imgSrc){
        $(".critter-animation img").attr("src", imgSrc)
    }

    drawPoints();

    // bind to events
    $(window).on("batterystatus", function(event){
        setCritterAnimation("img/dance-50.gif");
        drawBattery(10);

    });

    // bind to events
    $(window).on("batterylow", function(event){
        setCritterAnimation("img/dance-low.gif");
        drawBattery(10);

    });

    $(window).on("batterycritical", function(event){
        setCritterAnimation("img/dance-critical.gif");
        drawBattery(0);
    });

    // toggle critter panel
    var $critterPanels = $(".critter-animation, .critter-status");
    $critterPanels.on("click", function(){
        $critterPanels.toggleClass("hidden");
    });

    // toggle menu buttons
    $(".button.trophies").on("click", function(){
        $critterPanels.addClass("hidden");
        $(".trophies-panel").removeClass("hidden");
    });

    // toggle menu buttons
    $(".button.critter").on("click", function(){
        $(".critter-animation").removeClass("hidden");
        $(".trophies-panel").addClass("hidden");
    })


})();