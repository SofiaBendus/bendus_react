import React from 'react'
import HomeInfoCard from './HomeInfoCard'
import {Link} from 'react-router-dom';

function HomeInfoCardContainer() {
    return (
        <div className="infoCardContainer d-flex flex-wrap justify-content-center align-items-center bd-grey">
            <Link to="/menu"><HomeInfoCard infoImg="https://images.unsplash.com/photo-1568031813264-d394c5d474b9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80" infoTitle="Order your favourite food" infoLink="Check the Menu"/></Link>
            <Link to="#"><HomeInfoCard infoImg="https://img.hotels24.ua/photos/ria/new_images/1023/102313/10231371/10231371m.jpg"
            infoTitle=" Puluya Street, Ivano-Frankivsk" infoLink={`All days
            10AM - 9PM`}/></Link>
            
        </div>
    )
}

export default React.memo(HomeInfoCardContainer)
