import React, { useState } from 'react';
import {
  FaRegSmileBeam,
  FaDumbbell,
  FaRegHandshake,
  FaCalendarDay,
} from 'react-icons/fa';
import NavBar from '../components/NavBar';
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

const HomePage = () => {
  return (
    <>
      <NavBar />
      <div
        className="flex flex-col md:px-[18rem] p-0 gap-8 items-center justify-center text-white animate__animated animate__fadeInUp"
        style={{ minHeight: 'calc(100vh - 6.75rem)' }}
      >
        <div>
          <div className="h-[150px] sm:h-[225px]">
            <svg
              height="100%"
              viewBox="0 0 210 164"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M99.4824 3.968C90.1313 5.90846 82.7876 11.0852 78.3393 18.8724L77.4877 20.3632L70.3926 20.3498C65.553 20.3407 63.0762 20.5193 62.603 20.912C61.5976 21.7462 61.1661 28.9114 61.7916 34.3827C63.7861 51.829 71.6758 60.8953 87.4327 63.8472C90.936 64.5037 94.137 64.5976 107.011 64.4228C124.274 64.1886 126.249 63.8869 133.036 60.4466C142.927 55.4322 148.519 43.9829 148.5 28.7835C148.493 22.8951 148.131 21.0734 146.888 20.6687C146.329 20.4868 142.793 20.3517 139.031 20.3685L132.191 20.3991L131.296 18.6512C128.901 13.972 122.83 8.47769 117.611 6.26762C111.637 3.73718 104.783 2.86752 99.4824 3.968ZM99.5896 8.8766C98.4209 10.3942 96.8782 12.5468 96.1621 13.6607L94.8593 15.6859L92.8241 14.324C91.7042 13.5745 90.1835 12.5961 89.4435 12.1498L88.099 11.3376L89.204 10.4751C91.1568 8.95035 94.3846 7.52087 97.8998 6.62296C99.7841 6.14168 101.414 5.83136 101.52 5.93288C101.627 6.03488 100.758 7.35949 99.5896 8.8766ZM110.209 12.5487C111.514 14.368 112.582 16.2285 112.582 16.6839C112.582 17.1389 112.054 17.8572 111.409 18.2796C110.765 18.7019 108.999 20.5797 107.486 22.4516L104.735 25.8561L103.766 24.4922C103.234 23.7422 101.422 21.6892 99.7405 19.9298L96.6832 16.7308L98.2437 14.4226C99.9206 11.9415 103.866 7.07215 104.668 6.49318C105.23 6.08804 106.821 7.82784 110.209 12.5487ZM113.203 6.83558C116.261 7.76319 121.204 10.4263 121.204 11.1465C121.204 11.4626 120.611 11.986 119.886 12.3093C119.162 12.633 117.74 13.4653 116.727 14.1597C115.023 15.3267 114.849 15.3584 114.414 14.5826C114.014 13.8666 110.129 8.58592 108.635 6.72688C107.961 5.88786 110.26 5.94246 113.203 6.83558ZM90.9288 15.7175C100.861 22.2596 106.069 29.8519 107.345 39.6504C107.783 43.0117 107.728 43.4648 106.494 46.714C105.769 48.6233 105.027 50.186 104.846 50.186C104.665 50.186 104.163 49.1219 103.731 47.8217C100.653 38.5566 89.8736 30.0008 79.7849 28.8151L77.0916 28.4986L77.3967 27.0111C77.9552 24.2863 81.3617 17.8931 83.6119 15.3469C84.8338 13.9638 85.9943 12.8327 86.1912 12.8327C86.3881 12.8327 88.52 14.131 90.9288 15.7175ZM125.892 14.9331C128.987 18.2906 131.612 23.1379 132.43 27.0111L132.745 28.4986L130.183 28.7998C124.207 29.5018 117.007 33.1797 112.503 37.8306L109.789 40.6326L109.541 39.3037C109.405 38.5724 109.154 37.1123 108.983 36.0588C108.812 35.0052 108.127 32.7731 107.461 31.0989C105.954 27.3147 106.081 27.0097 111.384 21.6533C114.911 18.0918 122.072 12.8327 123.395 12.8327C123.703 12.8327 124.827 13.778 125.892 14.9331ZM75.887 22.8031C76.2491 23.3893 74.9443 27.4627 74.4505 27.2879C73.2837 26.8742 67.1092 23.0814 67.0953 22.7696C67.0733 22.2792 75.5828 22.3113 75.887 22.8031ZM142.744 22.7696C142.728 23.1819 135.863 27.3502 135.256 27.3157C134.744 27.287 133.595 23.3764 133.936 22.8247C134.249 22.3185 142.763 22.2654 142.744 22.7696ZM70.9966 27.9019L74.1315 29.8016L74.406 35.0852C74.8078 42.8235 77.1826 48.7957 82.0126 54.2134C84.4132 56.9067 89.3707 60.7651 91.5491 61.6357C92.6593 62.0796 92.645 62.0988 91.1788 62.128C88.1943 62.1874 82.5883 60.6904 78.7513 58.8098C70.1972 54.6166 65.8011 47.5047 64.2162 35.2945C63.6879 31.2273 63.5792 24.6325 64.0328 24.179C64.2014 24.0104 65.1315 24.3519 66.1005 24.9375C67.069 25.5232 69.2723 26.8569 70.9966 27.9019ZM145.974 30.9107C145.548 41.85 143.412 48.2546 138.337 53.8059C134.483 58.023 124.881 62.1831 119.091 62.1452L117.132 62.1328L120.006 60.5917C123.807 58.5531 129.638 52.6877 131.648 48.881C134.352 43.7583 135.159 40.8223 135.439 35.0814L135.697 29.7944L140.545 26.8598C143.211 25.2459 145.585 23.9079 145.821 23.8864C146.067 23.8639 146.132 26.8569 145.974 30.9107ZM81.9139 31.505C91.2013 33.343 100.378 42.1282 102.678 51.3832C103.643 55.266 104.081 59.3576 103.695 60.8934C103.311 62.423 101.83 62.5489 97.496 61.4202C85.7903 58.3716 76.6586 46.7571 76.6586 34.9166C76.6586 32.867 76.7985 31.0505 76.969 30.8796C77.14 30.7086 77.7329 30.6627 78.2862 30.7776C78.8399 30.8925 80.4722 31.2196 81.9139 31.505ZM133.08 34.3257C133.566 46.2327 124.851 57.7567 112.614 61.3862C111.184 61.811 109.19 62.1582 108.184 62.1582C106.161 62.1582 106.113 62.0231 106.309 56.8904C106.768 44.8808 116.561 33.7012 128.736 31.289C130.521 30.9356 132.196 30.6962 132.459 30.757C132.723 30.8178 133.002 32.4235 133.08 34.3257Z"
                fill="white"
              ></path>
              <path
                d="M75.5284 105.5V76.4091H95.1307V81.4801H81.679V88.4119H94.1222V93.483H81.679V100.429H95.1875V105.5H75.5284ZM102.021 76.4091H109.606L117.617 95.9545H117.958L125.969 76.4091H133.555V105.5H127.589V86.5653H127.347L119.819 105.358H115.756L108.228 86.4943H107.987V105.5H102.021V76.4091Z"
                fill="white"
              ></path>
              <path
                opacity="0.8"
                d="M20.5909 125.318H21.3068L31.9943 150.273H32.0966L42.7841 125.318H43.5V151.5H42.6818V127.875H42.5795L32.4545 151.5H31.6364L21.5114 127.875H21.4091V151.5H20.5909V125.318ZM51.4236 151.5H50.5543L59.9122 125.318H61.0372L70.3952 151.5H69.5259L60.5259 126.341H60.4236L51.4236 151.5ZM54.3895 141.835H66.5599V142.653H54.3895V141.835ZM91.464 131.864C91.3361 130.074 90.6501 128.604 89.4058 127.453C88.17 126.303 86.5379 125.727 84.5094 125.727C83.1799 125.727 81.991 125.983 80.9427 126.494C79.8944 127.006 79.0677 127.709 78.4626 128.604C77.8575 129.49 77.5549 130.509 77.5549 131.659C77.5549 132.324 77.6657 132.938 77.8873 133.5C78.1089 134.062 78.4455 134.578 78.8972 135.047C79.3575 135.507 79.9327 135.925 80.6231 136.3C81.3219 136.666 82.1401 136.994 83.0776 137.284L86.0435 138.205C87.1771 138.554 88.1572 138.946 88.9839 139.381C89.8106 139.815 90.4924 140.305 91.0293 140.851C91.5748 141.388 91.9796 141.989 92.2438 142.653C92.508 143.31 92.6401 144.043 92.6401 144.852C92.6401 146.216 92.2907 147.43 91.5918 148.496C90.893 149.561 89.9171 150.396 88.6643 151.001C87.4114 151.607 85.9583 151.909 84.3049 151.909C82.7111 151.909 81.3177 151.632 80.1245 151.078C78.9313 150.516 77.9853 149.744 77.2864 148.764C76.5961 147.776 76.2083 146.642 76.1231 145.364H76.9413C77.0265 146.489 77.3802 147.482 78.0023 148.342C78.6245 149.203 79.4683 149.876 80.5336 150.362C81.6075 150.848 82.8646 151.091 84.3049 151.091C85.8049 151.091 87.1174 150.831 88.2424 150.311C89.3759 149.783 90.2538 149.05 90.8759 148.112C91.5066 147.175 91.8219 146.088 91.8219 144.852C91.8219 143.915 91.6174 143.092 91.2083 142.385C90.7992 141.669 90.1558 141.038 89.2779 140.493C88.4001 139.947 87.2538 139.457 85.839 139.023L82.8731 138.102C80.8191 137.455 79.2808 136.598 78.258 135.533C77.2438 134.467 76.7367 133.176 76.7367 131.659C76.7367 130.372 77.0734 129.222 77.7467 128.207C78.42 127.185 79.3404 126.379 80.508 125.791C81.6842 125.203 83.018 124.909 84.5094 124.909C86.0094 124.909 87.3262 125.207 88.4597 125.804C89.5933 126.401 90.4924 127.223 91.1572 128.271C91.8219 129.32 92.1969 130.517 92.2822 131.864H91.464ZM115.307 131.864C115.179 130.074 114.493 128.604 113.249 127.453C112.013 126.303 110.381 125.727 108.352 125.727C107.023 125.727 105.834 125.983 104.786 126.494C103.737 127.006 102.911 127.709 102.306 128.604C101.7 129.49 101.398 130.509 101.398 131.659C101.398 132.324 101.509 132.938 101.73 133.5C101.952 134.062 102.288 134.578 102.74 135.047C103.2 135.507 103.776 135.925 104.466 136.3C105.165 136.666 105.983 136.994 106.921 137.284L109.887 138.205C111.02 138.554 112 138.946 112.827 139.381C113.654 139.815 114.335 140.305 114.872 140.851C115.418 141.388 115.823 141.989 116.087 142.653C116.351 143.31 116.483 144.043 116.483 144.852C116.483 146.216 116.134 147.43 115.435 148.496C114.736 149.561 113.76 150.396 112.507 151.001C111.254 151.607 109.801 151.909 108.148 151.909C106.554 151.909 105.161 151.632 103.967 151.078C102.774 150.516 101.828 149.744 101.129 148.764C100.439 147.776 100.051 146.642 99.9661 145.364H100.784C100.869 146.489 101.223 147.482 101.845 148.342C102.467 149.203 103.311 149.876 104.377 150.362C105.45 150.848 106.708 151.091 108.148 151.091C109.648 151.091 110.96 150.831 112.085 150.311C113.219 149.783 114.097 149.05 114.719 148.112C115.35 147.175 115.665 146.088 115.665 144.852C115.665 143.915 115.46 143.092 115.051 142.385C114.642 141.669 113.999 141.038 113.121 140.493C112.243 139.947 111.097 139.457 109.682 139.023L106.716 138.102C104.662 137.455 103.124 136.598 102.101 135.533C101.087 134.467 100.58 133.176 100.58 131.659C100.58 130.372 100.916 129.222 101.59 128.207C102.263 127.185 103.183 126.379 104.351 125.791C105.527 125.203 106.861 124.909 108.352 124.909C109.852 124.909 111.169 125.207 112.303 125.804C113.436 126.401 114.335 127.223 115 128.271C115.665 129.32 116.04 130.517 116.125 131.864H115.307ZM123.093 151.5H122.224L131.582 125.318H132.707L142.065 151.5H141.195L132.195 126.341H132.093L123.093 151.5ZM126.059 141.835H138.229V142.653H126.059V141.835ZM166.454 133.5C166.301 132.605 165.985 131.706 165.508 130.803C165.039 129.891 164.413 129.055 163.629 128.297C162.853 127.538 161.933 126.929 160.868 126.469C159.802 126.009 158.596 125.778 157.25 125.778C155.247 125.778 153.491 126.307 151.983 127.364C150.483 128.412 149.315 129.886 148.48 131.787C147.645 133.679 147.227 135.886 147.227 138.409C147.227 140.898 147.64 143.092 148.467 144.993C149.294 146.893 150.466 148.376 151.983 149.442C153.5 150.507 155.289 151.04 157.352 151.04C159.176 151.04 160.795 150.609 162.21 149.749C163.625 148.879 164.728 147.635 165.521 146.016C166.314 144.388 166.693 142.432 166.659 140.148L167.017 140.455H157.608V139.636H167.477V140.455C167.477 142.841 167.042 144.886 166.173 146.591C165.304 148.287 164.106 149.591 162.581 150.503C161.055 151.406 159.312 151.858 157.352 151.858C155.136 151.858 153.206 151.295 151.561 150.17C149.924 149.037 148.654 147.46 147.751 145.44C146.856 143.42 146.409 141.077 146.409 138.409C146.409 136.398 146.664 134.57 147.176 132.925C147.696 131.271 148.433 129.852 149.387 128.668C150.35 127.474 151.497 126.558 152.826 125.919C154.156 125.28 155.63 124.96 157.25 124.96C158.784 124.96 160.139 125.224 161.315 125.753C162.491 126.281 163.493 126.976 164.319 127.837C165.154 128.689 165.815 129.614 166.301 130.611C166.795 131.599 167.119 132.562 167.272 133.5H166.454ZM176.27 151.5V125.318H190.23V126.136H177.088V138H189.463V138.818H177.088V150.682H190.588V151.5H176.27Z"
                fill="white"
              ></path>
            </svg>
          </div>
        </div>
        <p className="font-light">The best massage parlor in town!</p>
        <div className="grid grid-cols-1 px-3 pb-3 gap-3 w-full min-w-[600px] md:gap-2 md:grid-cols-2">
          {widgetData.map((e) => (
            <Link to={e.Path} key={e.Id}>
              <WidgetDiv icon={e.Icon} text={e.Text} />
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

const WidgetDiv = ({ icon, text }) => {
  return (
    <div className="py-8 shadow-md md:shadow-xl flex flex-col gap-3 items-center bg-white bg-opacity-20 rounded-md">
      <Icon icon={icon} />
      <h2>{text}</h2>
    </div>
  );
};

const Icon = ({ icon }) => {
  return <div>{icon}</div>;
};

export default HomePage;
