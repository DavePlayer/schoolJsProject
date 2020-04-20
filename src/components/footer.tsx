import * as React from 'react'
import {Link} from 'react-router-dom'

export const Footer:React.FC = () => {
    return(
        <footer>
            <div className="buySth">
                <h4>Buy yourself something</h4>
                <p>We are ready for the challenge.
                We should provide you everything we
                have got.</p>
            </div>
            <div className="ContactUs">
                <h4>Contact US</h4>
                <p>Cieszynki 24/100 Miasto 32-111
                +44 666 666 666</p>
                <p className="contactParagraph"><Link to='/'>or Contact Link</Link></p>
            </div>
            <div className="CopyRigths">
                <h4>Copyright</h4>
                <p>&copy;Dawid Grygiel 2020 
                All rights reserved</p>
            </div>
            <div className="SocialLinks">
                <a href="#" className="fa fa-facebook"></a>
                <a href="#" className="fa fa-twitter"></a>
                <a href="#" className="fa fa-instagram"></a>
            </div>
        </footer>
    )
}