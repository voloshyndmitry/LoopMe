function Ads(raine, textImg) {
    var point = document.querySelector(".dragPoint"),
        phone = document.querySelector(".phone"),
        text = document.querySelector(".text"),
        flash = document.querySelector(".flash"),
        youtubeSection = document.querySelector(".youtubeSection"),
        rainSection = document.querySelector(".rainSection"),
        simPort = document.querySelector(".simPort"),
        iframe = document.querySelector("iframe"),
        pointCoords = point.getBoundingClientRect(),
        phoneCoords = phone.getBoundingClientRect(),
        textImages = textImg,
        reinImage = raine.images,
        phoneWidth = phone.offsetWidth,
        phoneHeight = phone.offsetHeight,
        flag = true,
        flagQuantityPhone = false,
        POINTMAXTOP = 180,
        FLASHTIMEOUT = 300,
        MINSIZERAIN = rain.minSizeRaine,
        MAXSIZERAIN = rain.maxSizeRaine,
        MINQUANTITYRAIN = raine.minQuantityRain,
        MAXQUANTITYRAIN = raine.maxQuantityRain;

// PRIVAT METHONDS
    function rainDrop() {
        var quantityRain = randomInteger(MINQUANTITYRAIN, MAXQUANTITYRAIN),
            timerRain = setInterval(function () {
                var newRain = document.createElement('div'),
                    sizeRain = randomInteger(MINSIZERAIN, MAXSIZERAIN),
                    randomImage = randomInteger(0, reinImage.length - 1);
                newRain.style.backgroundImage = `url(${reinImage[randomImage]})`;
                newRain.style.width = sizeRain + "px";
                newRain.style.height = sizeRain + "px";
                newRain.style.top = randomInteger(0, phoneHeight) + "px";
                newRain.style.left = randomInteger(phoneCoords.left - phoneWidth / 2, phoneCoords.left + phoneWidth / 2) + "px";
                newRain.style.position = "absolute";
                newRain.className = "rain";
                rainSection.appendChild(newRain);
                if (!(quantityRain--)) {
                    setTimeout(clearRain, 1000);
                    clearInterval(timerRain);
                }
            }, 100);
    }

    function clearRain() {
        for (var i = 0, arrRain = document.querySelectorAll(".rain");
             i < arrRain.length;
             arrRain[i++].style.display = "none");
    }

    function randomInteger(min, max) {
        var rand = min + Math.random() * (max - min);
        rand = Math.round(rand);
        return rand;
    }

    function main(margin) {
        var topPoint = Math.floor(Number.parseFloat(margin));
        if (!topPoint) {
            youtube(true);
            flag = true;
        }
        else
            youtube(false);

        if (!(topPoint % 3))
            rotatePhone(topPoint);
        if (!(topPoint % (POINTMAXTOP / 4)))
            textChange(topPoint / (POINTMAXTOP / 4));
        if (topPoint == POINTMAXTOP / 2)
            createFlash();
        if ((topPoint == 10 && flag) || (topPoint == POINTMAXTOP / 2 && !flag))
            rainDrop();
        else clearRain();
        if (topPoint > POINTMAXTOP - 5) {
            flag = false;
            simPort.style.display = "block";
        }
        else
            simPort.style.display = "none";
    }

    function createFlash(argument) {
        flash.style.display = "block";
        setTimeout(function () {
            flash.style.display = "none"
        }, FLASHTIMEOUT)
    }

    function textChange(argument) {
        text.style.backgroundImage = `url(${textImages[argument]})`;
    }

    function rotatePhone(argument) {
        phone.style.backgroundPositionY = -argument / 3 * 221 + "px";
    }

    function youtube(argument) {
        if (argument)
            youtubeSection.style.display = "block";
        else
            youtubeSection.style.display = "none";
        if (!flag && !flagQuantityPhone) {
            iframe.src = `${iframe.src}?autoplay=1`;
            flagQuantityPhone++;
        }

    }

    function movePoint() {
        if (event.pageY - pointCoords.top - point.offsetHeight / 2 >= 0
            && event.pageY - pointCoords.top - point.offsetHeight / 2 < POINTMAXTOP)
            point.style.top = event.pageY - pointCoords.top - point.offsetHeight / 2 + "px";
        return main(point.style.top);
    }

// PUBLIC METHODS
    this.start = function () {
        point.addEventListener("mousedown", function () {
            document.addEventListener("mousemove", movePoint, false);
        }, false);

        document.addEventListener("mouseup", function () {
            this.removeEventListener("mousemove", movePoint, false)
        }, false)
    }
}