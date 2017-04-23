# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170423202421) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "card_eligibilities", force: :cascade do |t|
    t.integer  "user_id"
    t.integer  "card_id"
    t.integer  "point_balance"
    t.datetime "created_at",    null: false
    t.datetime "updated_at",    null: false
  end

  create_table "cards", force: :cascade do |t|
    t.string   "name"
    t.integer  "notional_spend_requirement"
    t.integer  "month_spend_requirement"
    t.integer  "card_point_bonus"
    t.decimal  "value_per_point"
    t.integer  "annual_fee"
    t.boolean  "fee_waived"
    t.datetime "created_at",                 null: false
    t.datetime "updated_at",                 null: false
    t.integer  "bonus_value"
  end

  create_table "trips", force: :cascade do |t|
    t.string   "departure_city"
    t.string   "destination_city"
    t.integer  "user_id"
    t.integer  "sale_total"
    t.datetime "created_at",       null: false
    t.datetime "updated_at",       null: false
  end

  create_table "users", force: :cascade do |t|
    t.string   "first_name"
    t.string   "last_name"
    t.string   "email"
    t.string   "password_digest"
    t.integer  "monthly_spend"
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
  end

end
