class FlightsController < ApplicationController

  def index
    @origin_city = params[:form_origin_city]
    @destination_city = params[:form_destinatation_city]
    @departure_date = params[:form_departure_date]
    @return_date = params[:form_return_date]
    @response = Unirest.post(
      "https://www.googleapis.com/qpxExpress/v1/trips/search?key=#{ENV['API_KEY']}",
      headers:{ "Content-Type" => "application/json" },
      parameters:{ 
                            request: {
                              slice: [
                                {
                                  origin: "CHI",
                                  destination: "AMS",
                                  date: "2017-05-01"
                                },
                                {
                                  origin: "AMS",
                                  destination: "CHI",
                                  date: "2017-06-01"
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
                        
  end


end
