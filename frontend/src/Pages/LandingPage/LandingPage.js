import React from 'react'
import TopNav from '../../components/TopNav';
import Footer from '../../components/Footer';
import SearchPanel from './SearchPanel';


const LandingPage = () => {
    return (
        <div>
            <TopNav />
            <div className='body-main'>
                <SearchPanel />
            </div>
            <Footer />
        </div >
    )
}

export default LandingPage