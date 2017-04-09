class Alias < ActiveRecord::Base
  belongs_to :composer, inverse_of: :aliases
  belongs_to :anonym, inverse_of: :aliases
  has_many :attributions, inverse_of: :alias
end
