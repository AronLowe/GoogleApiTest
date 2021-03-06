class FlightsController < ApplicationController
  #2017-06-01

  def index
    # @origin_city = params[:form_origin_city]
    # # @destination_city = params[:form_destinatation_city]
    @departure_date = params[:form_departure_date]
    @return_date = params[:form_return_date]
    if !params[:form_origin_city]
      @response = 0
      render "index.html.erb"
    else
      @response = Unirest.post(
        "https://www.googleapis.com/qpxExpress/v1/trips/search?key=#{ENV['API_KEY']}",
        headers:{ "Content-Type" => "application/json" },
        parameters:{ 
                              request: {
                                slice: [
                                  {
                                    origin: params[:form_origin_city] || 'CHI',
                                    destination: params[:form_destination_city] || 'AMS',
                                    date: @departure_date || '2017-08-01'
                                  },
                                  {
                                    origin: params[:form_destination_city] || 'AMS',
                                    destination: params[:form_origin_city] || 'CHI',
                                    date: @return_date || '2017-09-01'
                                  }
                                ],
                                passengers: {
                                  adultCount: 1,
                                  infantInLapCount: 0,
                                  infantInSeatCount: 0,
                                  childCount: 0,
                                  seniorCount: 0
                                },
                                solutions: 1,
                                refundable: false
                              }
                            }.to_json
      ).body["trips"]["tripOption"][0]["saleTotal"] 
      @response = @response.delete!'USD'
      @response = @response.to_f
      puts "*" * 50
      p @response
      puts "*" * 50
      render "show.html.erb"
    end
  end
end
