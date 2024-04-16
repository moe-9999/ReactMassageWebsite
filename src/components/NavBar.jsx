import React, { useState } from 'react';
import {
  FaCheckCircle,
  FaPhoneAlt,
  FaBars,
  FaHome,
  FaRegSmileBeam,
  FaDumbbell,
  FaRegHandshake,
  FaCalendarDay,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

const widgetData = [
  {
    Id: 1,
    Path: '/relax-massage',
    Icon: <FaRegSmileBeam size="40" />,
    Text: 'Relaxation Massage',
  },
  {
    Id: 2,
    Path: '/sport-massage',
    Icon: <FaDumbbell size="40" />,
    Text: 'Sport Massage',
  },
  {
    Id: 3,
    Path: '/meet-the-owner',
    Icon: <FaRegHandshake size="40" />,
    Text: 'Make Invesment',
  },
  {
    Id: 4,
    Path: '/appointments',
    Icon: <FaCalendarDay size="40" />,
    Text: 'Make an appointment',
  },
];

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header>
      <nav className="flex justify-between items-center py-4 px-4 text-cyan-500 font-light">
        <div className="flex flex-col gap-3">
          <div className="bg-cyan-700 w-fit px-3 py-1 flex items-center gap-2 rounded-sm">
            <Icon icon={<FaCheckCircle size="24" />} />
            <h2 className="text-md text-cyan-300 opacity-80">
              Certified Massagers
            </h2>
          </div>
          <div className="bg-cyan-700 w-fit px-3 py-1 flex items-center gap-2 rounded-sm">
            <Icon icon={<FaPhoneAlt size="24" />} />
            <h2 className="text-md text-cyan-300 opacity-80">
              +383 49 999 999
            </h2>
          </div>
        </div>

        <div className="button flex-col sm:flex-row flex gap-4">
          <div className="bg-cyan-700 w-10 h-10 md:w-16 md:h-16 grid place-items-center rounded-full">
            <Link to="/home">
              <Icon icon={<FaHome size="18" />} />
            </Link>
          </div>
          <div
            className="button bg-cyan-700 w-10 h-10 md:w-16 md:h-16 grid place-items-center rounded-full"
            onClick={() => {
              setMenuOpen(!menuOpen);
              if (document.body.style.overflow === 'hidden') {
                document.body.style.overflow = '';
              } else {
                document.body.style.overflow = 'hidden';
              }
            }}
          >
            <Icon icon={<FaBars size="18" />} />
          </div>
        </div>

        <div
          className={`menu fixed top-[128px] sm:top-[108px] right-0 w-screen translate-y-full flex flex-col bg-cyan-900 transition-transform duration-300 ease-in-out z-50 ${
            menuOpen && 'active'
          }`}
          style={{ minHeight: 'calc(100svh - 128px)' }}
        >
          {widgetData.map((e) => {
            return (
              <Link to={e.Path} key={e.Id}>
                <NavRow icon={e.Icon} text={e.Text} />
              </Link>
            );
          })}
        </div>
      </nav>
    </header>
  );
}

// ICON COMPONENT
const Icon = ({ icon }) => {
  return <>{icon}</>;
};

const NavRow = ({ icon, text }) => {
  return (
    <div className="flex items-center cursor-pointer gap-4 px-4 py-6 border-b-1 border-cyan-600 group">
      <Icon icon={icon} />
      <p className="text-lg uppercase font-bold group-hover:text-gray-200">
        {text}
      </p>
    </div>
  );
};

export default NavBar;
