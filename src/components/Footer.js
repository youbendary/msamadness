import React from 'react';
import { Button } from './Button';
import './Footer.css';
// import { Link } from 'react-router-dom';

function Footer() {
    return (
      <div className='footer-container'>
        <section className='footer-subscription'>
          <p className='footer-about'>
          "Assalamu Alaikum! We are a Muslim college organization driven by compassion and unity. 
          Our mission is to raise funds for charity through exciting sport-related events. 
          Join us in making a positive impact by supporting our cause. 
          Together, we can create a brighter future for those in need. Jazakum Allahu Khairan!"
          </p>
          <p className='footer-authors'>
            - MSA Madness Board
          </p>
          {/* <div className='input-areas'>
            <form>
              <input
                className='footer-input'
                name='email'
                type='email'
                placeholder='Your Email'
              />
              <Button 
                classname='footer-subscribe'
                buttonStyle='btn--outline'
                buttonSize='btn--small'
              >
                Subscribe
                
                </Button> */}
              {/* <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button> */}
            {/* </form>
          </div> */}
        </section>
        {/* <div class='footer-links'>
          <div className='footer-link-wrapper'>
            <div class='footer-link-items'>
              <h2>About Us</h2>
              <Link to='/sign-up'>How it works</Link>
              <Link to='/'>Testimonials</Link>
              <Link to='/'>Careers</Link>
              <Link to='/'>Investors</Link>
              <Link to='/'>Terms of Service</Link>
            </div>
            <div class='footer-link-items'>
              <h2>Contact Us</h2>
              <Link to='/'>Contact</Link>
              <Link to='https://account.venmo.com/u/Omar-Shoura'
              target='_blank'>Donations</Link>
              <Link to='/'>Destinations</Link>
              <Link to='/'>Sponsorships</Link>
            </div>
          </div>
          <div className='footer-link-wrapper'>
            <div class='footer-link-items'>
              <h2>Videos</h2>
              <Link to='/'>Submit Video</Link>
              <Link to='/'>Ambassadors</Link>
              <Link to='/'>Agency</Link>
              <Link to='/'>Influencer</Link>
            </div>
            <div class='footer-link-items'>
              <h2>Social Media</h2>
              <Link to='/https://instagram.com/msamadness?igshid=NTc4MTIwNjQ2YQ=='
              target='_blank'
              >Instagram</Link>
              <Link to='/'>Facebook</Link>
              <Link to='/'>Youtube</Link>
              <Link to='/'>Twitter</Link>
            </div>
          </div>
        </div> */}
        <section class='social-media'>
          <div class='social-media-wrap'>
            <small class='website-rights'>MSA MADNESS © 2023</small>
            <div class='footer-logo'>
              <a to='/' className='social-logo'>
                MSA MADNESS
                <img className='logo-img' src={require('../assets/images/logo.png')} />
              </a>
            </div>
            {/* <div class='right-side'> */}
            <div class='social-icons'>
              {/* <Link
                class='social-icon-link facebook'
                to='/'
                target='_blank'
                aria-label='Facebook'
              >
                <i class='fab fa-facebook-f' />
              </Link> */}
              <a
                class='social-icon-link instagram'
                href='https://instagram.com/msamadness?igshid=NTc4MTIwNjQ2YQ=='
                target='_blank'
                aria-label='Instagram'
              >
                <i class='fab fa-instagram' />
              </a>
              {/* <Link
                class='social-icon-link youtube'
                to='/'
                target='_blank'
                aria-label='Youtube'
              >
                <i class='fab fa-youtube' />
              </Link>
              <Link
                class='social-icon-link twitter'
                to='/'
                target='_blank'
                aria-label='Twitter'
              >
                <i class='fab fa-twitter' />
              </Link>
              <Link
                class='social-icon-link twitter'
                to='/'
                target='_blank'
                aria-label='LinkedIn'
              >
                <i class='fab fa-linkedin' />
              </Link> */}
            </div>
            {/* </div> */}
          </div>
        </section>
      </div>
    );
  }
  
  export default Footer;