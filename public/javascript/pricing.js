


function HandlePriceBtnClick(botton, data) {
    botton.addEventListener("click", () => {
        const priceAllContent = [websitePriceContent, designPriceContent, marketingPriceContent, videoeditingPriceContent];

        priceAllContent.forEach(items => {
            items.style.opacity = "0";
            items.style.display = "none";
        })
        data.style.display = "block";
        setTimeout(() => {
            data.style.opacity = "1";
        }, 70);
    });
}





var websitePriceBTN = document.querySelector(".website-pricing-btn");
var websitePriceContent = document.querySelector(".website-pricing-section");
HandlePriceBtnClick(websitePriceBTN, websitePriceContent)

var designPriceBTN = document.querySelector(".design-pricing-btn");
var designPriceContent = document.querySelector(".design-pricing-section");
HandlePriceBtnClick(designPriceBTN, designPriceContent)

const marketingPriceBTN = document.querySelector(".marketing-pricing-btn");
const marketingPriceContent = document.querySelector(".marketing-pricing-section");
HandlePriceBtnClick(marketingPriceBTN, marketingPriceContent)


var videoeditingPriceBTN = document.querySelector(".videoediting-pricing-btn");
var videoeditingPriceContent = document.querySelector(".videoediting-pricing-section");
HandlePriceBtnClick(videoeditingPriceBTN, videoeditingPriceContent)

