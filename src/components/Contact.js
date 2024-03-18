import React from "react";

function Contact() {
    return (
        <div className='contact'>
            <h1>We are MutedMode</h1>
            <p>Join us in membership to unlock a world of exclusive benefits and endless possibilities. Elevate your experience, gain access to premium features, and become part of a vibrant community. Together, lets embark on a journey where every moment is enriched, and every connection is meaningful. Join the membership and let the extraordinary begin!</p>
            <form method='post'>
                <input type='email' className='Email-field' />
                <button type='submit' className='submit-btn'>Join US</button>
            </form>
        </div>
    )
}

export default Contact