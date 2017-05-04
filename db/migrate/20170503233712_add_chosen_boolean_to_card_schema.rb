class AddChosenBooleanToCardSchema < ActiveRecord::Migration[5.0]
  def change
    add_column :cards, :selected_by_user, :boolean, default: false
  end
end
