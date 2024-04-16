import React from 'react';
import NavBar from '../components/NavBar';
import Icon from '../components/Icon.jsx';
import { FaRegHandshake } from 'react-icons/fa';

const MeetTheOwner = () => {
  return (
    <div className="relative isolate">
      <NavBar />
      <div
        className="flex container mx-auto px-6 gap-8 items-center justify-center text-white animate__animated animate__fadeInUp"
        style={{ minHeight: 'calc(100vh - 6.75rem)' }}
      >
        <div className="flex flex-col">
          <div className="flex items-center gap-6 px-2 pb-6 border-b-[1px] border-cyan-600">
            <Icon
              icon={
                <FaRegHandshake className="text-white opacity-55" size="46" />
              }
            />
            <h1 className="text-xl text-white  font-semibold uppercase">
              Meet The Owner
            </h1>
          </div>
          <p className="max-w-[80ch] text-sm md:text-base lg:text-lg px-2 py-6">
            Emir is a certified masseur and medical technician who currently
            works at the MIB Institute. He began his education at the secondary
            medical school in Tuzla, where he acquired basic knowledge about the
            human body and medical techniques.
            <br />
            <br />
            Now with more than 5 years of experience in the industry, Emir has
            distinguished himself as an expert who applies his knowledge and
            skills to provide clients with superior massage therapy. His
            approach to massage includes various sports and relaxation massage
            techniques, and many others.
          </p>
          <p className="max-w-[80ch] px-2 py-6 text-sm md:text-base lg:text-lg text-opacity-80 font-extralight text-white border-t-[1px] border-cyan-600">
            With his expertise, empathetic approach and attention,{' '}
            <span className="underline text-opacity-100 text-white">
              he creates a safe and supportive environment
            </span>
            where clients feel relaxed and welcome.
            <br />
            <br />
          </p>
        </div>
      </div>
      <div className="absolute overflow-hidden -z-[1] min-w-full min-h-svh top-0 left-0">
        <div className="blob absolute min-w-[300px] md:min-w-[450px] lg:min-w-[700px] min-h-[300px] md:min-h-[450px] lg:min-h-[700px] -right-[5%] md:-right-[10%] -bottom-[5%] md:-bottom-[15%] border-[10px] border-cyan-700"></div>
      </div>
    </div>
  );
};

export default MeetTheOwner;
