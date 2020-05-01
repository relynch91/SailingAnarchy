class AddingMoreColumnsToUsers < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :location, :string
    add_column :users, :interests, :string
    add_column :users, :experience, :string
  end
end
