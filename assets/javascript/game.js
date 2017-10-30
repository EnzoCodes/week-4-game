$(document).ready(function() {



    $("#start").on("click", function() {
    // Start by hiding Id= crystals
    // Show crystals on("click", #startButton)
    $("#start").hide();
    $('.show').css('display', 'block');


    var targetNum;
    var bagWeight = 0;
    var wins = 0;
    var losses = 0;

    //Generating Target Number and printing to screen.
    function maxWeight() {
    targetNum = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
    $("#targetNum").text(targetNum);
    }
    maxWeight();

    var gemImg = ["assets/images/blueGem.png", "assets/images/redGem.png",
                    "assets/images/goldGem.png", "assets/images/clearGem.png"];

    for (var i=0; i < gemImg.length; i++) {
        var randy = Math.floor(Math.random() * (19 - 1 + 1)) + 1;
        var imgCrystal = $("<img>");

        imgCrystal.attr("src", gemImg[i]);
        imgCrystal.attr("class", "crystal-img");
        imgCrystal.attr("value", randy);

        $("#crystals").append(imgCrystal);
    }

    // $("#gemSum").text();
    // $("#win").text();
    // $("#lose").text();

    $(".crystal-img").on("click", function(){
            var crystalValue = ($(this).attr("value"));
            crystalValue = parseInt(crystalValue);
            console.log(crystalValue);

            bagWeight = bagWeight + crystalValue;
            $("#bagWeight").text(bagWeight);

            if (bagWeight === targetNum) {
                wins++;
                $("#wins").text(wins);
                alert("You win! Your bag is full!");
                // Resetting BagWeight.
                bagWeight = 0;
                $("#bagWeight").text(bagWeight);
                // Gerating new Target number...
                maxWeight();
                return;
            }
            else if (bagWeight > targetNum) {
                losses++;
                alert("Oh no! Your bag broke!");
                $("#losses").text(losses);
                // Resetting BagWeight.
                bagWeight = 0;
                $("#bagWeight").text(bagWeight);
                // Gerating new Target number...
                maxWeight();
                return;
            }
        }); // Closing main game function.
    }); // Closing Reset
}); // Closing Doc Ready
