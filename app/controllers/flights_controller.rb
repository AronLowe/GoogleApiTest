class FlightsController < ApplicationController

  def index
    @response = Unirest.post(
      "https://www.googleapis.com/qpxExpress/v1/trips/search?key=AIzaSyDJlpFsutiHgzDYSknQcZXdn5FRSnkFVFw",
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
    ).body
                        
  end


end
