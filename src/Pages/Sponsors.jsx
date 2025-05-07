import React from 'react';
import './Sponsors.css';
import { useState,useEffect} from 'react';
import bgImageDesktop from '../assets/bg1.jpg'; // Import your custom background image
import bgImageMobile from '../assets/Mobile.jpg';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
const Sponsors = () => {
  const sponsorData = {
    "sponsors": {
      "educationPartners": [
        {
          "title": "Premium Education Partner",
          "logo": "https://cdn.iconscout.com/icon/free/png-256/free-duolingo-icon-download-in-svg-png-gif-file-formats--symbol-brand-logo-world-logos-vol-2-pack-icons-282167.png?f=webp",
          "companyName": "Pearson Education"
        },
        {
          "title": "Learning Solutions Partner",
          "logo": "https://pbs.twimg.com/profile_images/1835680437261180928/s7liSDik_400x400.jpg",
          "companyName": "Coursera"
        },
        {
          "title": "Academic Content Partner",
          "logo": "https://logos-world.net/wp-content/uploads/2021/08/Google-Classroom-Symbol.png",
          "companyName": "McGraw Hill"
        }
      ],
      "skillDevelopmentPartners": [
        {
          "title": "Technical Skills Partner",
          "logo": "https://www.thearcweb.com/_next/image?url=https%3A%2F%2Fstatic.thearcweb.com%2Fimages%2FPROD%2FPROD-68887db1-1cfd-4506-948d-97bdad084ead.png%3Fw%3D96%26q%3D75&w=256&q=75",
          "companyName": "LinkedIn Learning"
        },
        {
          "title": "Coding Education Partner",
          "logo": "https://r2.erweima.ai/imgcompressed/img/compressed_3047e7df1063abcf6e3ec65f2009b7f3.webp",
          "companyName": "Udemy"
        },
        {
          "title": "Professional Certification Partner",
          "logo": "https://m.media-amazon.com/images/I/41o4PWsKePL._BO30,255,255,255_UF900,850_SR1910,1000,0,C_ZA70,500,900,420,420,AmazonEmber,50,4,0,0_PIRIOFOURANDHALF-medium,BottomLeft,30,-20_QL100_.jpg",
          "companyName": "Skillsoft"
        }
      ],
      "technologyPartners": [
        {
          "title": "Cloud Computing Partner",
          "logo": "https://contentful.harrypotter.com/usf1vwtuqyxm/3d9kpFpwHyjACq8H3EU6ra/85673f9e660407e5e4481b1825968043/English_Harry_Potter_4_Epub_9781781105672.jpg",
          "companyName": "Amazon Web Services"
        },
        {
          "title": "Developer Tools Partner",
          "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8v6PgioOU5h8-7xK1iBfqD0uK49kjuMTS5Q&s",
          "companyName": "GitHub"
        },
        {
          "title": "AI Education Partner",
          "logo": "https://www.shutterstock.com/image-vector/rangoli-design-called-alpona-alpana-260nw-1261288501.jpg",
          "companyName": "NVIDIA"
        }
      ]
    }
  };
  const [bgImage, setBgImage] = useState(bgImageDesktop);

  useEffect(() => {
    const handleResize = () => {
      setBgImage(window.innerWidth < 768 ? bgImageMobile : bgImageDesktop);
    };

    handleResize(); // Call on mount
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div><Navbar/>
    <div className="sponsors-container">
      <div className="flex justify-center">
      <h3 className="text-5xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-[#ff00ff] to-[#00f0ff] text-center font-bold pt-[90px] font-orbitron animate-neonGlow text-shadow-neon tracking-wide neon-heading ">
  Sponsors
</h3>
</div>
      
      {Object.entries(sponsorData.sponsors).map(([category, sponsors]) => (
        <div key={category} className="sponsor-section ">
             <div className="flex justify-center">
      <h3 className="text-4xl text-transparent bg-clip-text bg-gradient-to-r from-[#ff00ff] to-[#00f0ff] text-center font-bold pt-[90px] font-orbitron animate-neonGlow text-shadow-neon tracking-wide neon-heading ">
      {category.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
      </h3>
</div>
          
          <div className="sponsor-grid">
            {sponsors.map((sponsor, index) => (
              <div 
                key={index} 
                className="sponsor-card"
                style={{ backgroundImage: `url(${bgImage})` }} // Using your custom background image
              >
                <div className="sponsor-content">
                  <img 
                    src={sponsor.logo} 
                    alt={sponsor.companyName} 
                    className="sponsor-logo " 
                  />
                  <h3 className="sponsor-company">{sponsor.companyName}</h3>
                  <p className="sponsor-title">{sponsor.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
    <Footer/> 
    </div>
  );
};

export default Sponsors;