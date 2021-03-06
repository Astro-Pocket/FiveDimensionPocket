module Errors
  module ErrorHandler
    extend ActiveSupport::Concern

    included do
      rescue_from 'Response Fail, No Text!', with: :internal_server_error
      rescue_from StandardError, with: :record_not_found
      rescue_from ActiveRecord::RecordNotFound, with: :record_not_found 
    end

    private

    def record_not_found
      render file: 'public/404.html', 
             status: 404, 
             layout: false
    end
    
    def internal_server_error
      render file: 'public/500_extractor_fail.html',
             status: 500,
             layout: false
    end
  end
end

