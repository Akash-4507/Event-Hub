import React from 'react';
import { User2 } from 'lucide-react';
import AboutImage from '../assets/img/about.jpg';

const About = () => {
  return (
    <>
      <div className="h-screen w-full">
        <div className="w-full h-full flex justify-center items-center">
        <img src={AboutImage} alt="About Us" className="object-cover w-full h-full" />
        </div>
        <div className="w-full h-[80%] flex justify-center items-start ">
          <div className="w-[70%] h-[100%] flex justify-center items-center flex-col">
            <div className="h-[10%] w-[90%] flex justify-start items-center font-bold text-3xl">
              VISION :
            </div>
            <div className="h-[70%] w-full flex justify-center items-center gap-10 text-justify">
              <div className="w-[25%] h-[100%] flex justify-center items-center shadow-2xl shadow-black/20 rounded-xl font-semibold text-lg">
                <div className="w-[90%] h-[90%]">
                  Create a seamless and integrated event booking experience for all types of events, ensuring user satisfaction and convenience. We envision a future where every individual, regardless of their background, has access to high-quality event planning resources.
                </div>
              </div>
              <div className="w-[25%] h-[100%] flex justify-center items-center shadow-2xl shadow-black/20 rounded-xl font-semibold text-lg">
                <div className="w-[90%] h-[90%]">
                  Foster partnerships with venues, vendors, and service providers to enhance event planning and execution. 
                  By building a robust network of collaborators, we aim to deliver comprehensive solutions that cater to diverse client needs, ensuring a smooth planning process from start to finish.
                </div>
              </div>
              <div className="w-[25%] h-[100%] flex justify-center items-center shadow-2xl shadow-black/20 rounded-xl font-semibold text-lg">
                <div className="w-[90%] h-[90%]">
                  Innovate using technology to provide a user-friendly platform for booking and managing events effortlessly. 
                  We strive to harness the latest advancements in technology to create intuitive tools that simplify every step of the event planning journey, making it accessible for all users.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='w-full h-[60%] flex justify-center items-start'>
          <div className="w-[70%] h-full flex justify-start items-center flex-col gap-10">
            <div className="h-[10%] w-[90%] flex justify-start items-center font-bold text-3xl ">
              MISSION
            </div>
            <div className="h-[75%] w-[85%] flex justify-center items-center shadow-2xl shadow-black/20 rounded-xl font-semibold text-lg text-justify">
              <div className="w-[95%]">
                <ul className="list-disc list-inside">
                  <li>Deliver exceptional service and support to our clients, ensuring they can create unforgettable experiences.</li>
                  <li>Utilize feedback and data to continually enhance our offerings and user experience.</li>
                  <li>Champion sustainability by encouraging eco-friendly practices in event planning and execution.</li>
                  <li>Foster a community of event professionals who are dedicated to excellence and innovation.</li>
                  <li>Bridge the gap between service providers and clients, ensuring transparency and trust in all transactions.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className='w-full h-[100%] flex justify-center items-start'>
          <div className="w-[70%] h-full flex justify-start items-center flex-col gap-5">
            <div className="h-[10%] w-[90%] flex justify-start items-center font-bold text-3xl ">
              HOW WE WORK
            </div>
            <div className="h-[10%] w-[80%] flex justify-start items-center font-bold text-2xl ">
              Social Venture Philanthropy
            </div>
            <div className="h-[60%] w-[100%] flex justify-center items-center font-semibold text-xl text-justify">
              <div className="w-[75%]">
                Social Venture Philanthropy (SVP) is an innovative model based on the business concept of venture capital. Under SVP, the Foundation identifies and implements its development projects through credible community-based organizations. We also handhold and build capacities of these organizations, focusing on achieving scalability and sustainability, creating a culture of leadership and excellence and inculcating a deep sense of accountability among them.
              </div>
            </div>
            <div className="h-[10%] w-[80%] flex justify-start items-center font-bold text-2xl ">
              Outreach
            </div>
            <div className="h-[70%] w-[100%] flex justify-center items-start font-semibold text-xl text-justify">
              <div className="w-[75%]">
                Under the Outreach model, the Foundation implements the development interventions directly as it requires intensive and professional engagement for a wider and sustained outcome. While working in remote rural areas, we realized that an intensive on-ground intervention is needed, which might be beyond the capacity of community-based organizations and hence, we directly implement such projects, liaising with local community stakeholders for better social return on investment.
              </div>
            </div>
          </div>
        </div>
        <div className='w-full h-[50%] flex justify-center items-start'>
          <div className="w-[70%] h-full flex justify-start items-center flex-col">
            <div className="h-[10%] w-[90%] flex justify-center items-center font-bold text-3xl ">
              SUPPORTERS
            </div>
            <div className="h-[70%] w-[90%] flex justify-center items-center gap-5">
              <div className="h-[60%] w-[20%] flex justify-center items-center flex-col shadow-2xl shadow-black/20 rounded-xl font-semibold text-lg text-justify">
                <div className="w-full h-[80%] flex justify-center items-center">
                  <User2 className='w-full h-[50%]' />
                </div>
                <div className="w-full h-[10%] flex justify-center items-center">AKASH A</div>
              </div>
              <div className="h-[60%] w-[20%] flex justify-center items-center flex-col shadow-2xl shadow-black/20 rounded-xl font-semibold text-lg text-justify">
                <div className="w-full h-[80%] flex justify-center items-center">
                  <User2 className='w-full h-[50%]' />
                </div>
                <div className="w-full h-[10%] flex justify-center items-center">KUMARAN S</div>
              </div>
              <div className="h-[60%] w-[20%] flex justify-center items-center flex-col shadow-2xl shadow-black/20 rounded-xl font-semibold text-lg text-justify">
                <div className="w-full h-[80%] flex justify-center items-center">
                  <User2 className='w-full h-[50%]' />
                </div>
                <div className="w-full h-[10%] flex justify-center items-center">MITHUN NS</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
