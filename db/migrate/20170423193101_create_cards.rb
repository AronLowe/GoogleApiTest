class CreateCards < ActiveRecord::Migration[5.0]
  def change
    create_table :cards do |t|
      t.string :name
      t.integer :notional_spend_requirement
      t.integer :month_spend_requirement
      t.integer :card_point_bonus
      t.decimal :value_per_point
      t.integer :annual_fee
      t.boolean :fee_waived

      t.timestamps
    end
  end
end
