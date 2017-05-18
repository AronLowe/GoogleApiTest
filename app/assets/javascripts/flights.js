/* global Vue, $, railsRetailFlightPrice */

document.addEventListener("DOMContentLoaded", function(event) { 


  var app = new Vue({
    el: '#app',
    data: {
      message: 'Hello Vue!',
      retailFlightPrice: railsRetailFlightPrice,
      cards: [
        {id: 1,
          name: "Chase Ink Business Preferred",
          notionalSpendRequirement: 5000,
          monthSpendRequirement: 3,
          cardPointBonus: 80000,
          valuePerPoint: 0.12e-1,
          annualFee: 95,
          feeWaived: false,
          bonusValue: 960,
          cardSelected: false,
          image: "img/cards/ink-business-preferred-credit-card.png"},
        {id: 2,
          name: "AMEX Business Gold Rewards Card",
          notionalSpendRequirement: 5000,
          monthSpendRequirement: 3,
          cardPointBonus: 50000,
          valuePerPoint: 0.1e-1,
          annualFee: 175,
          feeWaived: true,
          bonusValue: 500,
          cardSelected: false,
          image: "img/cards/AMEX-business-gold.png"},
        {id: 3,
          name: "Chase Sapphire Prerred Card", 
          notionalSpendRequirement: 4000,
          monthSpendRequirement: 3,
          cardPointBonus: 50000,
          valuePerPoint: 0.12e-1,
          annualFee: 95,
          feeWaived: true,
          bonusValue: 600,
          cardSelected: false,
          image: "img/cards/chase-sapphire-preferred.png"},
        {id: 4,
          name: "Citi ThankYou Prefered card",
          notionalSpendRequirement: 1000,
          monthSpendRequirement: 3,
          cardPointBonus: 15000,
          valuePerPoint: 0.133e-1,
          annualFee: 0,
          feeWaived: true,
          bonusValue: 200,
          cardSelected: false,
          image: "img/cards/citi-thankyou-preferred.png"},
        {id: 5,
          name: "Citi Prestige",
          notionalSpendRequirement: 4000,
          monthSpendRequirement: 3,
          cardPointBonus: 40000,
          valuePerPoint: 0.133e-1,
          annualFee: 450,
          feeWaived: false,
          bonusValue: 532,
          cardSelected: false,
          image: "img/cards/citi-prestige-card.png"},
        {id: 6,
          name: "Citi ThankYou Premier",
          notionalSpendRequirement: 3000,
          monthSpendRequirement: 3,
          cardPointBonus: 30000,
          valuePerPoint: 0.133e-1,
          annualFee: 95,
          feeWaived: true,
          bonusValue: 399,
          cardSelected: false,
          image: "img/cards/citi-thankyou-premier-card.png"},
      ],
      filteredCards: [],
      monthlySpend: "", 
      sum: "",
      filteredCardsBonus: "",
      bonusSum: 0,
      userSpendRequirement: 0
    },
    computed: {
      timeToAchievement: function() {
        return this.userSpendRequirement / this.monthlySpend;
      },

      outOfPocketPrice: function() {
        return this.retailFlightPrice - this.bonusSum;
      }
    },
    methods: {
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
          console.log(this.filteredCards[j]['bonusValue']);
          sum += parseInt(this.filteredCards[j]['bonusValue']);
        }
        console.log(sum);
        this.sum = sum;
        return this.filteredCards;
      },

      toggleChosenCards: function(inputCard) {
        // inputCard.cardSelected = !inputCard.cardSelected;
        var selectedCards = this.cards.filter(function(card) {
          return card.cardSelected;
        });

        console.log(selectedCards, selectedCards.length);

        this.bonusSum = 0;
        this.userSpendRequirement = 0;
        for (var k = 0; k < selectedCards.length; k++) {
          this.bonusSum += parseInt(selectedCards[k]['bonusValue']);
          this.userSpendRequirement += parseInt(selectedCards[k]['notionalSpendRequirement']);
        }
      }

      // calcEligibleCardBonus: function(fiteredCards) {
      //   this.userCards = [];
      //   var bonusSum = 0;
      //   for (var k = 0; k < this.selectedCards.length; k++) {
      //     bonusSum += parseInt(this.selectedCards[k]['bonusValue']);
      //     console.log(bonusSum);
      //     this.userCards.push(this.selectedCards);
      //     this.bonusSum = bonusSum;
      //     return this.selectedCards;
      //   }
      //   console.log(this.userCards);
      // }
    },
    mounted: function() {
      // $('.carousel').carousel();
      // Plugin initialization
      $('.carousel.carousel-slider').carousel({fullWidth: true});
      $('.carousel').carousel();
      $('.slider').slider();
      $('.parallax').parallax();
      // $('.modal').modal();
      $('.scrollspy').scrollSpy();
      // $('.button-collapse').sideNav({'edge': 'left'});
      // $('.datepicker').pickadate({selectYears: 20});
      $('select').not('.disabled').material_select();
      // $('input.autocomplete').autocomplete({
      //   data: {"Apple": null, "Microsoft": null, "Google": 'http://placehold.it/250x250'}
      // });
    }
  });
});