class Card < ApplicationRecord
  has_many :card_eligibilities
  has_many :users, through: :card_eligibilities
end
