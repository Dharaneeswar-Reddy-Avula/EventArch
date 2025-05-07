import React from 'react'
import AboutCard from './AboutCard';
import { useState } from 'react';

const Contact = () => {
    const [search, setSearch] = useState("")
    const aboutdata = [
        {
          title: "Our Mission",
          description:
            "Our goal is to streamline event management by providing a centralized platform for organizing, tracking, and participating in multiple college events. We aim to enhance engagement, efficiency, and communication among students and event organizers.",
        },
        {
          title: "What We Offer",
          description:
            "We provide an all-in-one solution for event registration, scheduling, real-time updates, and notifications. Our platform ensures that students never miss out on exciting opportunities and can easily track upcoming events.",
        },
        {
          title: "Innovation at its Core",
          description:
            "As the first event management portal in our college, we leverage technology to simplify event coordination. Our system is designed to reduce manual effort, eliminate confusion, and create a seamless experience for both organizers and participants.",
        },
        {
          title: "Building a Connected Community",
          description:
            "Our platform is more than just an event manager; it fosters collaboration and community engagement. By bringing all events under one roof, we create an interactive and vibrant college culture where every student stays informed and involved.",
        },
      ];
    
    const filteredData = aboutdata.filter(item => 
        item.title.toLowerCase().includes(search.toLowerCase()) || 
        item.description.toLowerCase().includes(search.toLowerCase())
    );
    
    return ( 
        <div>
            <input 
                type="text" 
                placeholder='search' 
                value={search} 
                onChange={(e) => {setSearch(e.target.value)}} 
                className='p-2 rounded-md mt-[50px] mx-[30px]'
            />
            <div className="flex flex-wrap lg:flex-nowrap px-[30px] gap-[30px] justify-center">
                {filteredData.map((item, index) => (
                    <AboutCard
                        key={index}
                        title={item.title}
                        description={item.description}
                    />
                ))}
            </div>
        </div>
    )
}

export default Contact


// import React from 'react'

// const Contact = () => {
//   return (
//     <div>Contact</div>
//   )
// }

// export default Contact