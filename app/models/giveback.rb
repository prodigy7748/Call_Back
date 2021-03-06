class Giveback < ApplicationRecord
  belongs_to :project
  has_many :orders, dependent: :destroy
  has_many :paid_orders, -> { where(status: [:paid])}, class_name: 'Order'

  mount_uploader :image, ImageUploader
  acts_as_paranoid
  validates :price, numericality: { only_integer: true }
  validates :deliver_time, presence: true
end
