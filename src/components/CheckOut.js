import React from 'react'
import DeliveryInfo from './DeliveryInfo'

function CheckOut() {
    return (
        <div className="checkOutOrder">
            <div className="d-flex align-items-center">
            <img className="checkOutOrderImg img-responsive" src="https://images.unsplash.com/photo-1484920274317-87885fcbc504?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2232&q=80" alt="" />
            <DeliveryInfo/>
            </div>
        </div>
    )
}

export default React.memo(CheckOut)
