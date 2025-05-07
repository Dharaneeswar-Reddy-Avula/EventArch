
import React from "react";
import { CiCirclePlus } from "react-icons/ci";
// import image from "../../../assets/webteam/sribabu.png";
import { FaGithub } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import bgm from "../assets/bgm.png"
import hoverbg from "../assets/hoverbg.png"
import image from "../assets/image.png"
const WebTeam = () => {
  
  const team = [
    // { id: 1, Name: "Dharaneeswar Reddy", role: "Fullstack Developer",image:image },
    { id: 1, Name: "Umamanikanta", role: "Frontend Developer",image:image },
    { id: 2, Name: "Tejasri", role: "Frontend Developer",image:image },
    { id: 3, Name: "Joshna", role: "Frontend Developer" ,image:image},
    { id: 4, Name: "Gopi", role: "Frontend Developer" ,image:image},

  
  ];


  const TeamCard = ({ name, role, image }) => (
    <div
      className="task-card relative scale-[0.9] h-[419px] w-full md:h-[401px] px-[20px] md:w-[300px] 
                group duration-150 after:absolute bg-cover bg-center z-[0] 
                flex flex-col justify-start items-center rounded-xl overflow-hidden"
      style={{
        backgroundImage: `url(${bgm})`,
      }}
      onMouseEnter={(e) => (e.currentTarget.style.backgroundImage = `url(${hoverbg})`)}
      onMouseLeave={(e) => (e.currentTarget.style.backgroundImage = `url(${bgm})`)}
    >
      <h3 className="text-center text-white text-[20px] mb-[7px] pt-[10px] font-bold text-wrap">
        {name}
      </h3>
      <span className="text-[18px] text-[#fe7524] text-center">{role}</span>
      <img
        src={image}
        alt={name}
        className="absolute duration-150 bottom-0 group-hover:translate-x-[30px] z-10"
      />
      <div className="icons absolute left-[20px] bottom-[20px] gap-2 z-20">
        <div className="socialmedia flex flex-col gap-2 opacity-0 scale-y-0 transition-all duration-200 ease-in pl-1 group-hover:opacity-100 group-hover:scale-y-100 group-hover:animate-fold-out animate-fold-in">
          <div className="h-[40px] w-[40px] bg-gradient-to-r from-purpleCustom via-pinkCustom to-orangeCustom rounded-full text-white text-[24px] flex justify-center items-center">
            <FaGithub />
          </div>
          <div className="h-[40px] w-[40px] bg-gradient-to-r from-purpleCustom via-pinkCustom to-orangeCustom rounded-full text-white text-[24px] flex justify-center items-center">
            <BsTwitterX />
          </div>
          <div className="h-[40px] w-[40px] bg-gradient-to-r from-purpleCustom via-pinkCustom to-orangeCustom rounded-full text-white text-[24px] flex justify-center items-center">
            <FaLinkedinIn />
          </div>
        </div>
        <span className="text-white text-[50px]">
          <CiCirclePlus />
        </span>
      </div>
    </div>
  );
  return (
    <div className="flex flex-col justify-center items-center ">
  <div className="flex justify-center">
      <h3 className="text-5xl text-transparent bg-clip-text bg-gradient-to-r from-[#ff00ff] to-[#00f0ff] text-center font-bold pt-[90px] font-orbitron animate-neonGlow text-shadow-neon tracking-wide neon-heading ">
  Meet Our Team
</h3>
</div>     

      {/* <h2 className="text-[#172554] text-3xl text-center py-[30px] font-bold">WEB TEAM</h2> */}
      <div>
      <TeamCard  name="Dharaneeswar Reddy " role="Fullstack Developer" image={image}/>
      </div>
      <div className="flex justify-center items-center md:p-4 flex-wrap gap-[30px] flex-shrink-0">
        {team.map((member) => (
          <TeamCard key={member.id} name={member.Name} role={member.role} image={member.image} />
        ))}
      </div>
    </div>
  );
}

export default WebTeam;
