import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import HotelCard from './HotelCard'

const SearchResults = ({ searchResultsData }) => {


    return (
        <div className='search-results-wrapper'>
            {

                searchResultsData?.data.map((hotel) => {
                    return (

                        <HotelCard
                            key={hotel._id}
                            id={hotel._id}
                            name={hotel.name}
                            description={hotel.description}
                            image={hotel.image}
                            rating={hotel.rating}
                            phoneNumber={hotel.phoneNumber}
                            rooms={hotel.rooms}
                            address={hotel.address}
                        >
                        </HotelCard>
                    )
                })
            }
        </div >

    )
}

export default SearchResults
