class Api::V1::CharactersController < ApplicationController
    
    def index
        characters = Character.all
        render json: characters
    end

    def create
        @newChar = Character.create(charParams)
        render json: @newChar
    end

    private
    def charParams
        params.require(:character).permit(:name)
    end

end
