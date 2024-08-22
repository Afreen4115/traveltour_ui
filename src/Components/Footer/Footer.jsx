import React, { useEffect } from 'react'
import './footer.css'
import sea2 from '../../Assets/sea2.mp4'
import { FiChevronRight, FiSend } from 'react-icons/fi'
import { MdOutlineTravelExplore } from 'react-icons/md'
import { AiFillYoutube, AiOutlineInstagram, AiOutlineTwitter } from 'react-icons/ai'
import { FaTripadvisor } from 'react-icons/fa'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Footer = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])

  return (
    <section className='footer'>
      <div className='videoDiv'>
        <video src={sea2} loop autoPlay muted type="video/mp4"></video>
      </div>

      <div className='seaContent container'>
        <div className='contactDiv flex'>
          <div data-aos="fade-up" className='text'>
            <small>KEEP IN TOUNCH</small>
            <h2>Travel with us</h2>

          </div>

          <div className='inputDiv flex'>
            <input data-aos="fade-up" type='text' placeholder='Enter Email Address ' />
            <button data-aos="fade-up" className='btn flex' type='submit'>
              SEND <FiSend className='icon' />
            </button>
          </div>
        </div>

        <div className='footerCard flex'>
          <div className='footerIntro flex'>
            <div className='logoDiv'>
              <a href='#' className='logo flex'>
                <MdOutlineTravelExplore className='icon' />Travel
              </a>
            </div>

            <div data-aos="fade-up" className='footerParagraph'>
              This website is a comprehensive travel platform designed to inspire and assist users in planning their perfect trips. It offers destination guides, booking services, and travel tips to ensure a seamless travel experience. Explore, plan, and book your next adventure all in one place.
            </div>

            <div data-aos="fade-up" className='footerSocials'>
              <AiOutlineTwitter className='icon' />
              <AiFillYoutube className='icon' />
              <AiOutlineInstagram className='icon' />
              <FaTripadvisor className='icon' />
            </div>
          </div>

          <div className='footerLinks grid'>
            <div data-aos="fade-up"
              data-aos-duration="3000" className='linkGroup'>
              <span className='groupTitle'>
                OUR AGENCY
              </span>

              <li className='footerList flex'>
                <FiChevronRight className='icon' />
                Services
              </li>
              <li className='footerList flex'>
                <FiChevronRight className='icon' />
                Agency
              </li>
              <li className='footerList flex'>
                <FiChevronRight className='icon' />
                Tourism
              </li>
              <li className='footerList flex'>
                <FiChevronRight className='icon' />
                Insurance
              </li>
              <li className='footerList flex'>
                <FiChevronRight className='icon' />
                Payment
              </li>
            </div>

            <div data-aos="fade-up"
              data-aos-duration="4000" className='linkGroup'>
              <span className='groupTitle'>
                PARTNERS
              </span>

              <li className='footerList flex'>
                <FiChevronRight className='icon' />
                Bookings
              </li>
              <li className='footerList flex'>
                <FiChevronRight className='icon' />
                Rentcars
              </li>
              <li className='footerList flex'>
                <FiChevronRight className='icon' />
                HotelWorld
              </li>
              <li className='footerList flex'>
                <FiChevronRight className='icon' />
                Trivago
              </li>
              <li className='footerList flex'>
                <FiChevronRight className='icon' />
                TripAdvison
              </li>
            </div>

            <div data-aos="fade-up"
              data-aos-duration="5000" className='linkGroup'>
              <span className='groupTitle'>
                LAST MINUTE
              </span>

              <li className='footerList flex'>
                <FiChevronRight className='icon' />
                London
              </li>
              <li className='footerList flex'>
                <FiChevronRight className='icon' />
                California
              </li>
              <li className='footerList flex'>
                <FiChevronRight className='icon' />
                Indonesia
              </li>
              <li className='footerList flex'>
                <FiChevronRight className='icon' />
                Europe
              </li>
              <li className='footerList flex'>
                <FiChevronRight className='icon' />
                Oceania
              </li>
            </div>



          </div>

          <div className='footerDiv flex'>
            <small>BEST TRAVEL WEBSITE THEME</small>
            <small>COPYRIGHT RESERVED AFREEN</small>
          </div>




        </div>
      </div>
    </section>
  )
}

export default Footer
