class CreateTrips < ActiveRecord::Migration[5.0]
  def change
    create_table :trips do |t|
      t.string :departure_city
      t.string :destination_city
      t.integer :user_id
      t.integer :sale_total

      t.timestamps
    end
  end
end
