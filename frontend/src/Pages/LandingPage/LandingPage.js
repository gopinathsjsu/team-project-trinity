import React, { useState } from 'react'
import TopNav from '../../components/TopNav';
import Footer from '../../components/Footer';
import SearchPanel from './SearchPanel';
import { BASE_API_URL } from '../../utils/constants';
import SearchResults from './SearchResults';
import axios from 'axios';

const LandingPage = () => {

    const [location, setLocation] = useState()
    const [checkInDate, setCheckInDate] = useState()
    const [checkOutDate, setCheckOutDate] = useState()
    const [numberOfGuests, setNmberOfGuests] = useState()
    const [searchResultsData, setSearchResultsData] = useState()

    const handleLocationChange = (e) => {
        console.log("Location ", e.target.value)
        setLocation(e.target.value)
    }

    const handleCheckInDate = (e) => {
        console.log("Check in ", e.target.value)
        setCheckInDate(e.target.value)
    }
    const handleCheckOutDate = (e) => {
        console.log("Check out ", e.target.value)
        setCheckOutDate(e.target.value)
    }
    const handleNumberofGuests = (e) => {
        console.log("Number of Guests ", e.target.value)
        setNmberOfGuests(e.target.value)
    }

    const onButtonClickHandler = async () => {
        console.log("searching...")
        try {
            const response = await axios.get(`${BASE_API_URL}/hotelsByLocation/${location}`)
            console.log("result", response)
            setSearchResultsData(response)

        } catch (err) {
            alert("No Input")
        }
    }

    return (
        <div className='body-main'>
            <SearchPanel
                location={location}
                handleLocationChange={() => handleLocationChange}
                checkInDate={checkInDate}
                handleCheckInDate={() => handleCheckInDate}
                checkOutDate={checkOutDate}
                handleCheckOutDate={() => handleCheckOutDate}
                numberOfGuests={numberOfGuests}
                handleNumberofGuests={() => handleNumberofGuests}
                searchResultsData={searchResultsData}
                searchButtonHandler={() => onButtonClickHandler}
            />
            <SearchResults
                searchResultsData={searchResultsData}
                checkInDate={checkInDate}
                checkOutDate={checkOutDate} />
        </div>

    )
}

export default LandingPage