import React from 'react'
import { Button } from './Button'
import './Footer.css'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

export default function Footer() {
    return (
        <div className='footer-container'>
            <section className='footer-subscription'>
                <p className='footer-subscription-heading'>
                    Join the Advanture new letter to receive out best vacation deals
                </p>
                <p className='footer-subscription-text'>
                    You can unsubscribe at any time.
                </p>
                <div className='input-areas'>
                    <form>
                        <input type='email' name='email' placeholder='Your Email' className='footer-input' />
                        <Button buttonStyle='btn--outline'>Subscribe</Button>
                    </form>
                </div>
            </section>
            <div className='footer-links'>
                <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        <h2>About Us</h2>
                        <Link to='/sign-up'>How it works</Link>
                        <Link to='/'>Testimonials</Link>
                        <Link to='/'>Investors</Link>
                        <Link to='/'>Terms Of Service</Link>
                    </div>
                    <div className='footer-link-items'>
                        <h2>Constact Us</h2>
                        <Link to='/'>Constact</Link>
                        <Link to='/'>Support</Link>
                        <Link to='/'>Destinations</Link>
                        <Link to='/'>Sponosorships</Link>
                    </div>
                </div>
                <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        <h2>Video</h2>
                        <Link to='/'>Submit Video</Link>
                        <Link to='/'>Ambassadors</Link>
                        <Link to='/'>Agentcy</Link>
                        <Link to='/'>Influencer</Link>
                    </div>
                    <div className='footer-link-items'>
                        <h2>Social Media</h2>
                        <Link to='/'>Instagram</Link>
                        <Link to='/'>Facebook</Link>
                        <Link to='/'>Youtobe</Link>
                        <Link to='/'>Twitter</Link>
                    </div>
                </div>
            </div>
            <section className='social-media'>
                <div className='social-media-wrap'>
                    <div className='footer-logo'>
                        <Link to='/' className='social-logo'>
                            TRVL <i className='fab fa-typo3' />
                        </Link>
                    </div>
                    <small className='website-rights'>TRVL © 2024</small>
                    <div className='social-icons'>
                        <Link className='social-icon-link facebook'
                            to='/'
                            target='_blank'
                            aria-label='Facebook'>
                            <i className='fab fa-facebook-f' />
                        </Link>
                        <Link className='social-icon-link instagram'
                            to='/'
                            target='_blank'
                            aria-label='Instagram'>
                            <i className='fab fa-instagram' />
                        </Link>
                        <Link className='social-icon-link youtube'
                            to='/'
                            target='_blank'
                            aria-label='Youtube'>
                            <i className='fab fa-youtube' />
                        </Link>
                        <Link className='social-icon-link twitter'
                            to='/'
                            target='_blank'
                            aria-label='Twitter'>
                            <i className='fab fa-twitter' />
                        </Link>
                        <Link className='social-icon-link linkedin'
                            to='/'
                            target='_blank'
                            aria-label='LinkedIn'>
                            <i className='fab fa-linkedin' />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}
