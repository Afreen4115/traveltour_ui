import React,{useEffect} from 'react';
import './main.css';
import img1 from '../../Assets/img1.jpg'
import img2 from '../../Assets/img2.jpg'
import img3 from '../../Assets/img8.jpg'
import img4 from '../../Assets/img4.jpg'
import img5 from '../../Assets/img5.jpg'
import img6 from '../../Assets/img6.jpg'
import img7 from '../../Assets/img12.jpg'
import img8 from '../../Assets/img11.jpg'
import img9 from '../../Assets/img9.jpg'
import img10 from '../../Assets/img7.jpg'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { LuClipboardCheck } from "react-icons/lu";




const Data = [
  {
    id: 1,
    imgSrc: img1,
    destinationTitle: "Coral Bay",
    location: "Australia",
    grade: "CULTURAL RELAX",
    fees: '$1500',
    description: "A pristine bay with stunning coral reefs, ideal for snorkeling and diving. Enjoy the vibrant marine life and crystal-clear waters. A perfect spot for both relaxation and adventure."
  },
  {
    id: 2,
    imgSrc:img2,
    destinationTitle: "Maya Bay",
    location: "Thailand",
    grade: "CULTURAL RELAX",
    fees: '$1200',
    description: "A beautiful bay surrounded by limestone cliffs and crystal-clear waters. Known for its serene beauty and vibrant underwater ecosystem. An iconic destination for beach lovers."
  },
  {
    id: 3,
    imgSrc: img3,
    destinationTitle: "Blue Lagoon",
    location: "Iceland",
    grade: "CULTURAL RELAX",
    fees: '$1800',
    description: "A geothermal spa in a breathtaking volcanic landscape with warm, soothing waters. Relax in the mineral-rich waters surrounded by stunning views. A unique blend of natural beauty and comfort."
  },
  {
    id: 4,
    imgSrc: img4,
    destinationTitle: "Great Barrier Reef",
    location: "Australia",
    grade: "CULTURAL RELAX",
    fees: '$2500',
    description: "The world's largest coral reef system, offering unparalleled diving experiences. Explore the vibrant coral gardens and diverse marine life. A must-visit for nature enthusiasts and adventurers."
  },
  {
    id: 5,
    imgSrc: img5,
    destinationTitle: "Santorini Caldera",
    location: "Greece",
    grade: "CULTURAL RELAX",
    fees: '$1400',
    description: "A stunning sea-filled volcanic crater with beautiful sunsets and azure waters. Experience the charming whitewashed architecture and rich history. A romantic getaway with breathtaking views."
  },
  {
    id: 6,
    imgSrc: img6,
    destinationTitle: "The Dead Sea",
    location: "Jordan",
    grade: "CULTURAL RELAX",
    fees: '$900',
    description: "A saltwater lake known for its high salinity, allowing swimmers to float effortlessly. Rejuvenate with the mineral-rich mud and therapeutic waters. A unique destination for wellness and relaxation."
  },
  {
    id: 7,
    imgSrc: img7,
    destinationTitle: "Bora Bora Lagoon",
    location: "French Polynesia",
    grade: "CULTURAL RELAX",
    fees: '$3000',
    description: "A turquoise lagoon surrounded by a coral reef and luxury overwater bungalows. Dive into the crystal-clear waters and explore vibrant marine life. A luxurious paradise for relaxation and exploration."
  },
  {
    id: 8,
    imgSrc: img8,
    destinationTitle: "Whitsunday Islands",
    location: "Australia",
    grade: "CULTURAL RELAX",
    fees: '$1600',
    description: "A collection of 74 tropical islands known for their white sand beaches and clear waters. Sail through the stunning islands and enjoy the picturesque views. A perfect destination for relaxation and adventure."
  },
  {
    id: 9,
    imgSrc: img9,
    destinationTitle: "Halong Bay",
    location: "Vietnam",
    grade: "CULTURAL RELAX",
    fees: '$1100',
    description: "A UNESCO World Heritage site with emerald waters and towering limestone islands. Cruise through the bay and explore the hidden caves. A picturesque destination rich in history and natural beauty."
  },
  {
    id: 10,
    imgSrc:img10,
    destinationTitle: "Raja Ampat",
    location: "Indonesia",
    grade: "CULTURAL RELAX",
    fees: '$2200',
    description: "An archipelago known for its rich marine biodiversity and stunning coral reefs. Dive into the crystal-clear waters and explore vibrant underwater life. A secluded paradise for relaxation and adventure."
  }
];

const Main = () => {

  useEffect(()=>{
    Aos.init({duration:2000})
},[])


  return (
    <section className='main container section'>
      <div className='secTitle'>
        <h3 data-aos="fade-right" className='title'>
          Most visited destinations
        </h3>
      </div>

      <div className='secContent grid'>
        {Data.map(({ id, imgSrc, destinationTitle, location, grade, fees, description }) => (
          <div key={id} data-aos="fade-up" className='singleDestination'>
            <div className='imageDiv'>
              <img src={imgSrc} alt={destinationTitle}/>
            </div>
            <div className='cardInfo'>
              <h4>{destinationTitle}</h4>
              <span className='continent flex'>
                <HiOutlineLocationMarker className='icon'/>
                <span className="name">{location}</span>
              </span>

              <div className='fees flex'>
                <div className='grade'>
                  <span>{grade}<small>+1</small></span>
                </div>
                <div className='price'>
                  <h5>{fees}</h5>
                  </div>
              </div>

              <div className='desc'>
                {description}
              </div>

              <button className='btn flex'>
                DETAILS  <LuClipboardCheck className='icon'/>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Main
