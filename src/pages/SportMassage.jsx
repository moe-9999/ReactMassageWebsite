import React from 'react';
import NavBar from '../components/NavBar.jsx';
import Icon from '../components/Icon.jsx';
import { FaDumbbell } from 'react-icons/fa';
import massageImage from '../assets/gym.jpg';

const SportMassage = () => {
  return (
    <>
      <NavBar />
      <div
        className="grid grid-cols-2 xl:px-[14rem] p-8 gap-8 items-center text-white animate__animated animate__fadeInUp"
        style={{ minHeight: 'calc(100vh - 6.75rem)' }}
      >
        <div className="col-span-2 md:col-span-1 flex flex-col">
          <div className="flex items-center gap-6 px-2 pb-6 border-b-[1px] border-cyan-600">
            <Icon
              icon={<FaDumbbell className="text-white opacity-55" size="46" />}
            />
            <h1 className="text-xl text-white  font-semibold uppercase">
              Sport Massage
            </h1>
          </div>
          <p className="max-w-full md:max-w-[60ch] px-2 py-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
            officiis repellat fugit repudiandae necessitatibus iste, dolores.
            <br />
            <br />
            molestiae porro inventore placeat deserunt architecto laboriosam
            accusantium. Ullam, impedit. Ex similique sapiente sed!
          </p>
          <div className="flex flex-col pt-6 border-t-[1px] border-cyan-600">
            <div className="flex justify-between w-full py-2 px-2">
              <p className="min-w-[13px]">I</p>
              <span className="px-2 py-1 rounded-md text-opacity-95 text-white bg-cyan-700 font-extralight">
                3:00 PM
              </span>
              <span className="px-2 py-1 rounded-md text-opacity-95 text-white bg-cyan-700 font-extralight">
                10 $
              </span>
            </div>
            <div className="flex justify-between w-full py-2 px-2">
              <p className="min-w-[13px]">II</p>
              <span className="px-2 py-1 rounded-md text-opacity-95 text-white bg-cyan-700 font-extralight">
                6:00 PM
              </span>
              <span className="px-2 py-1 rounded-md text-opacity-95 text-white bg-cyan-700 font-extralight">
                10 $
              </span>
            </div>
            <div className="flex justify-between w-full py-2 px-2">
              <p className="min-w-[13px]">III</p>
              <span className="px-2 py-1 rounded-md text-opacity-95 text-white bg-cyan-700 font-extralight">
                9:00 PM
              </span>
              <span className="px-2 py-1 rounded-md text-opacity-95 text-white bg-cyan-700 font-extralight">
                10 $
              </span>
            </div>
          </div>
        </div>
        <img
          src={massageImage}
          alt="massage"
          className="image-massage col-span-2 md:col-span-1 max-h-[500px] min-w-full aspect-square object-cover border-8 border-cyan-700"
        />
      </div>
    </>
  );
};

export default SportMassage;
