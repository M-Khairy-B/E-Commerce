import $ from "jquery";
import slick from "slick-carousel";
import "bootstrap";
import { test } from "./test";

$(document).ready(() => {
    $(".main-slider").slick({
        infinite: false,
        speed: 300,
        nextArrow: ' <i class="fa-solid fa-arrow-right slick-prev-main "></i>',
        prevArrow: ' <i class="fa-solid fa-arrow-left  slick-next-main"></i>',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    });
});

$(".main-slider-product").slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: false,
    nextArrow: ' <i class="fa-solid fa-arrow-right slick-prev-main "></i>',
    prevArrow: ' <i class="fa-solid fa-arrow-left  slick-next-main"></i>',

    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
                dots: true,
            },
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
            },
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                nextArrow: false,
                prevArrow: false,
            },
        },
    ],
});

$(".main-slider-testmonial").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    arrows: true,
    centerPadding: "100px",
    nextArrow: $(".slick-next-main"),
    prevArrow: $(".slick-prev-main"),
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: true,
            },
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
            },
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
    ],
});

// let minRangeValueGap = 6;
// const range = document.getElementById("range_track");
// const minval = document.querySelector(".minvalue");
// const maxval = document.querySelector(".maxvalue");
// const rangeInput = document.querySelectorAll("input");
// let minRange = parseInt(rangeInput[0].value);
// let maxRange = parseInt(rangeInput[1].value);

// let minPercentage, maxPercentage;
// const minRangeFill = () => {
//   range.style.left = (rangeInput[0].value / rangeInput[0].max) * 100 + "%";
// };
// const maxRangeFill = () => {
//   range.style.right =
//     100 - (rangeInput[1].value / rangeInput[1].max) * 100 + "%";
// };
// const MinVlaueBubbleStyle = () => {
//   minPercentage = (minRange / rangeInput[0].max) * 100;
//   minval.style.left = minPercentage + "%";
//   minval.style.transform = `translate(-${minPercentage / 2}%, -100%)`;
// };
// const MaxVlaueBubbleStyle = () => {
//   maxPercentage = 100 - (maxRange / rangeInput[1].max) * 100;
//   maxval.style.right = maxPercentage + "%";
//   maxval.style.transform = `translate(${maxPercentage / 2}%, 100%)`;
// };

// const setMinValueOutput = () => {
//   minRange = parseInt(rangeInput[0].value);
//   minval.innerHTML = rangeInput[0].value;
// };
// const setMaxValueOutput = () => {
//   maxRange = parseInt(rangeInput[1].value);
//   maxval.innerHTML = rangeInput[1].value;
// };

// setMinValueOutput()
// setMaxValueOutput()
// minRangeFill()
// maxRangeFill()
// MinVlaueBubbleStyle()
// MaxVlaueBubbleStyle()

// rangeInput.forEach((input) => {
// input.addEventListener("input", (e) => {
// setMinValueOutput();
// setMaxValueOutput();

// minRangeFill();
// maxRangeFill();

// MinVlaueBubbleStyle();
// MaxVlaueBubbleStyle();

// if (maxRange - minRange < minRangeValueGap) {
//   if (e.target.className === "min") {
//     rangeInput[0].value = maxRange - minRangeValueGap;
//     setMinValueOutput();
//     minRangeFill();
//     MinVlaueBubbleStyle();
//     e.target.style.zIndex = "2"
//   }
//   else {
//     rangeInput[1].value = minRange + minRangeValueGap;
//     e.target.style.zIndex = "2"
//     setMaxValueOutput();
//     maxRangeFill();
//     MaxVlaueBubbleStyle();
//   }
// }
// });
// });

$(document).ready(function () {
    $(".color").click(function () {
        $(".color").removeClass("active");
        $(".fa-check").hide();
        $(this).addClass("active");
        $(this).find(".fa-check").show();
    });

    $(".size").click(function () {
        $(".size").removeClass("active");
        $(this).addClass("active");
    });

    $(".counter button:first-of-type").click(function () {
        let countSpan = $(".counter span");
        let count = parseInt(countSpan.text());
        if (count > 1) {
            countSpan.text(count - 1);
        }
    });

    $(".counter button:last-of-type").click(function () {
        let countSpan = $(".counter span");
        let count = parseInt(countSpan.text());
        countSpan.text(count + 1);
    });

    $(".circle-color").click(function () {
        $(".color").removeClass("active");
        $(".fa-check").hide();
        $(this).addClass("active");
        $(this).find(".fa-check").show();
    });

    $(".type-size span").click(function () {
        $(".type-size span").removeClass("active");
        $(this).addClass("active");
    });

    $(".modal-star").click(function () {
        $(".modal-star").removeClass("active text-white");
        $(this)
            .prevAll()
            .addBack()
            .addClass("active")
            .removeClass("text-white");
    });

    $("#close").click(function () {
        $(".offer-nav").hide();
    });

    $(".product-card-main").on("click", function () {
        location.href = "productdetail.html";
    });

    $(".small-img").click(function () {
        let newSrc = $(this).attr("src");
        console.log(newSrc);
        $("#large-img img").attr("src", newSrc);
    });
});
