import React from 'react'
import {Link} from 'react-router-dom';
import OfferModal from './OfferModal';

function Footer() {
    return (
      <>
        <div className="container-fluid footerNav bg-dark">
  <footer className="d-flex flex-wrap align-items-center py-2">

    <div className="nav col-md-5 d-inline-flex flex-fill align-items-center justify-content-end link-light text-decoration-none">
        <Link to="/" className="nav-link px-2 text-light">Home</Link>
    </div>
  
  </footer>
</div>
<OfferModal />
</>
    )
}

export default React.memo(Footer);
