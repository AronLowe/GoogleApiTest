class CreateCardEligibilities < ActiveRecord::Migration[5.0]
  def change
    create_table :card_eligibilities do |t|
      t.integer :user_id
      t.integer :card_id
      t.integer :point_balance

      t.timestamps
    end
  end
end
