/* global Vue, $ */

document.addEventListener("DOMContentLoaded", function(event) { 
  var app = new Vue({
    el: '#app',
    data: {
      message: 'Hello Vue!',
      cards: [
        {name: "Chase Ink Business Preferred",
          notionalSpendRequirement: 5000,
          monthSpendRequirement: 3,
          cardPointBonus: 80000,
          valuePerPoint: 0.12e-1,
          annualFee: 95,
          feeWaived: false,
          bonusValue: 960},
        {name: "AMEX Business Gold Rewards Card",
          notionalSpendRequirement: 5000,
          monthSpendRequirement: 3,
          cardPointBonus: 50000,
          valuePerPoint: 0.1e-1,
          annualFee: 175,
          feeWaived: true,
          bonusValue: 500},
        {name: "Chase Sapphire Prerred Card", 
          notionalSpendRequirement: 4000,
          monthSpendRequirement: 3,
          cardPointBonus: 50000,
          valuePerPoint: 0.12e-1,
          annualFee: 95,
          feeWaived: true,
          bonusValue: 600},
        {name: "Citi ThankYou Prefered card",
          notionalSpendRequirement: 1000,
          monthSpendRequirement: 3,
          cardPointBonus: 15000,
          valuePerPoint: 0.133e-1,
          annualFee: 0,
          feeWaived: true,
          bonusValue: 200},
        {name: "Citi Prestige",
          notionalSpendRequirement: 4000,
          monthSpendRequirement: 3,
          cardPointBonus: 40000,
          valuePerPoint: 0.133e-1,
          annualFee: 450,
          feeWaived: false,
          bonusValue: 532},
        {name: "Citi ThankYou Premier",
          notionalSpendRequirement: 3000,
          monthSpendRequirement: 3,
          cardPointBonus: 30000,
          valuePerPoint: 0.133e-1,
          annualFee: 95,
          feeWaived: true,
          bonusValue: 399},
      ],
      filteredCards: [],
      monthlySpend: "", 
      sum: "",
      filteredCardsBonus: ""
    },
    methods:{
      eligibleCards: function() {
        this.filteredCards = [];
        for (var i = 0; i < this.cards.length; i++) {
          if (parseInt(this.monthlySpend, 10) >= ( this.cards[i].notionalSpendRequirement / this.cards[i].monthSpendRequirement)) {
            this.filteredCards.push(this.cards[i]);
            console.log(this.filteredCards);
          }
        }
        var sum = 0;
        for (var j = 0; j < this.filteredCards.length; j++) {
          console.log(this.filteredCards['bonusValue']);
          sum += parseInt(this.filteredCards['bonusValue']);
          console.log(sum);
        }
        return this.filteredCards;

        // anything after var sum doesnt work

      },
      // calcEligibleCardBonus: function(filteredCards) {
       
      // }
    }
  });
});