class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable, 
         :omniauthable, omniauth_providers: [:facebook, :google_oauth2]
  has_one_attached :avatar
  # after_commit :add_default_avatar, on: %i[create update]

  def avatar_thumbnail
    if avatar.attached?
      avatar.variant(resize: "50x50!").processed 
    else
      '/default_profile.jpg'
    end
  end

  private

  def self.from_omniauth(access_token)
    data = access_token.info
    user = User.where(email: data['email']).first
    unless user
        user = User.create(name: data['name'],
           email: data['email'],
           password: Devise.friendly_token[0,20]
        )
    end
    user
  end
  # def add_default_avatar
  #   avatar.attach(
  #       io: File.open(
  #         Rails.root.join(
  #           'app', 'assets', 'images', 'default_profile.jpg'
  #         )
  #       ), 
  #       filename: 'default_profile.jpg',
  #       content_type: 'image/jpg'
  #   )
  # end
end
