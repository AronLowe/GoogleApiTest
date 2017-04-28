class User < ApplicationRecord
  has_secure_password 
  has_many :card_eligibilities
  has_many :cards, through: :card_eligibilities
  has_many :trips

  # def eligible_cards
  #   cards = []
  #   @cards = Card.all
  #   @cards.each do |card|
  #     if (self.monthly_spend >= (card.notional_spend_requirement/card.month_spend_requirement))
  #       then cards << card.name
  #     end
  #   end
  #   return cards
  # end
end

