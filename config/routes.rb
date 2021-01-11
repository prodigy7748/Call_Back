Rails.application.routes.draw do
  root to: "projects#index"

  devise_for :users, controllers: { 
    sessions: 'users/sessions', 
    registrations: "users/registrations",
    omniauth_callbacks: "users/omniauth_callbacks",
  }
  
  resource :users, controller: 'profiles', only: [] do
    get '/profile', action: 'show'
  end

  # projects
  resources :projects, except: [:new] do
    member do
      get 'rewards', as: 'rewards', action: :project_givebacks
    end
    resources :comments, shallow: true, only: [:new, :create, :destroy]
  end 

  resource :project, only: [] do
    collection do
      get 'proposal', as: 'new', action: :new
    end
    resources :givebacks, except: [:new] 
  end

  resources :users do
    resources :projects, only: [:index], action: :user_projects_index
  end

  resources :categories, only: [:new, :show] do
  end

  resources :orders, only: [:new, :create, :show] do
    post :paid
    post :not_paid_yet
  end
  
  resources :payments do
    collection do
      get :mpg
      get :canceled
      post :notify
      post :paid
      post :not_paid_yet
    end
  end

  

end
