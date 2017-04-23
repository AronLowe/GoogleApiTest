class AddBonusValueColumnInCardModel < ActiveRecord::Migration[5.0]
  def change
    add_column :cards, :bonus_value, :integer
  end
end
