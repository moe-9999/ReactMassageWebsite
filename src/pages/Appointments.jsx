import React from 'react';
import NavBar from '../components/NavBar';
import Icon from '../components/Icon';
import { FaCalendarDay, FaPhoneAlt } from 'react-icons/fa';

const Appointments = () => {
  return (
    <>
      <NavBar />
      <div
        className="flex flex-col max-w-[600px] container px-6 mx-auto p-0 gap-8 items-center justify-center text-white animate__animated animate__fadeInUp"
        style={{ minHeight: 'calc(100vh - 6.75rem)' }}
      >
        <div className="min-w-full">
          <div className="flex items-center gap-6 px-2 pb-6 border-b-[1px] border-cyan-600">
            <Icon
              icon={
                <FaCalendarDay className="text-white opacity-55" size="46" />
              }
            />
            <h1 className="text-xl text-white font-semibold uppercase">
              Reservation
            </h1>
          </div>
          <div className="flex gap-2 justify-between items-center px-2 py-4 border-b-[1px] border-cyan-600">
            <h2 className="text-xl text-white text-opacity-90">Reservate</h2>
            <div className="bg-cyan-700 w-fit px-3 py-1 flex items-center gap-2 rounded-sm">
              <Icon
                icon={
                  <FaPhoneAlt
                    size="20"
                    className="text-white text-opacity-70"
                  />
                }
              />
              <h2 className="text-md text-cyan-300 opacity-80">
                Certified Massagers
              </h2>
            </div>
          </div>
          <p className="px-2 py-4 border-b-[1px] border-cyan-600 text-white text-opacity-70 font-extralight text-lg leading-loose">
            Monday - Thursday : 08:00 - 20:00
            <br /> Friday - Sunday : 09:00 - 21:00
          </p>
          <div className="px-2 py-4 flex flex-col gap-8 items-center">
            <svg
              width="87"
              height="61"
              viewBox="0 0 87 61"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.3"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M37.9824 0.468003C28.6313 2.40846 21.2876 7.58523 16.8393 15.3724L15.9877 16.8632L8.89262 16.8498C4.05303 16.8407 1.57624 17.0193 1.10301 17.412C0.0976332 18.2462 -0.333926 25.4114 0.291619 30.8827C2.28608 48.329 10.1758 57.3953 25.9327 60.3472C29.436 61.0037 32.637 61.0976 45.5109 60.9228C62.7742 60.6886 64.7486 60.3869 71.5357 56.9466C81.4271 51.9322 87.0191 40.4829 87 25.2835C86.9928 19.3951 86.6307 17.5734 85.3882 17.1687C84.8287 16.9868 81.2929 16.8517 77.5306 16.8685L70.6908 16.8991L69.796 15.1512C67.4012 10.472 61.3296 4.97769 56.1112 2.76762C50.1369 0.237179 43.2832 -0.632481 37.9824 0.468003ZM38.0896 5.3766C36.9209 6.8942 35.3782 9.0468 34.6621 10.1607L33.3593 12.1859L31.3241 10.824C30.2042 10.0745 28.6835 9.09613 27.9435 8.6498L26.599 7.83761L27.704 6.97513C29.6568 5.45035 32.8846 4.02087 36.3998 3.12296C38.2841 2.64168 39.9136 2.33136 40.0204 2.43288C40.1272 2.53488 39.2584 3.85949 38.0896 5.3766ZM48.7086 9.04872C50.0138 10.868 51.0819 12.7285 51.0819 13.1839C51.0819 13.6389 50.5541 14.3572 49.9094 14.7796C49.2647 15.2019 47.4992 17.0797 45.9861 18.9516L43.2348 22.3561L42.2663 20.9922C41.7337 20.2422 39.9222 18.1892 38.2405 16.4298L35.1832 13.2308L36.7437 10.9226C38.4206 8.44149 42.366 3.57215 43.1682 2.99318C43.7296 2.58804 45.3212 4.32784 48.7086 9.04872ZM51.7031 3.33558C54.7609 4.26319 59.7035 6.92629 59.7035 7.64653C59.7035 7.9626 59.1105 8.48602 58.3863 8.80927C57.6621 9.133 56.24 9.96531 55.2265 10.6597C53.5228 11.8267 53.3489 11.8584 52.9145 11.0826C52.5141 10.3666 48.6286 5.08592 47.1347 3.22688C46.4607 2.38786 48.7598 2.44246 51.7031 3.33558ZM29.4288 12.2175C39.3613 18.7596 44.5688 26.3519 45.8448 36.1504C46.2826 39.5117 46.228 39.9648 44.9941 43.214C44.2689 45.1233 43.5275 46.686 43.3459 46.686C43.1649 46.686 42.6629 45.6219 42.2309 44.3217C39.153 35.0566 28.3736 26.5008 18.2849 25.3151L15.5916 24.9986L15.8967 23.5111C16.4552 20.7863 19.8617 14.3931 22.1119 11.8469C23.3338 10.4638 24.4943 9.3327 24.6912 9.3327C24.8881 9.3327 27.02 10.631 29.4288 12.2175ZM64.3917 11.4331C67.4874 14.7906 70.1117 19.6379 70.9303 23.5111L71.2449 24.9986L68.6829 25.2998C62.7067 26.0018 55.5067 29.6797 51.0029 34.3306L48.2895 37.1326L48.0414 35.8037C47.9053 35.0724 47.6539 33.6123 47.4829 32.5588C47.3124 31.5052 46.6269 29.2731 45.9607 27.5989C44.4538 23.8147 44.5807 23.5097 49.8845 18.1533C53.4112 14.5918 60.5724 9.3327 61.8953 9.3327C62.2033 9.3327 63.327 10.278 64.3917 11.4331ZM14.387 19.3031C14.7491 19.8893 13.4443 23.9627 12.9505 23.7879C11.7837 23.3742 5.60923 19.5814 5.59534 19.2696C5.5733 18.7792 14.0828 18.8113 14.387 19.3031ZM81.2436 19.2696C81.2283 19.6819 74.3626 23.8502 73.7557 23.8157C73.2442 23.787 72.0951 19.8764 72.4362 19.3247C72.7494 18.8185 81.2632 18.7654 81.2436 19.2696ZM9.49661 24.4019L12.6315 26.3016L12.906 31.5852C13.3078 39.3235 15.6826 45.2957 20.5126 50.7134C22.9132 53.4067 27.8707 57.2651 30.0491 58.1357C31.1593 58.5796 31.145 58.5988 29.6788 58.628C26.6943 58.6874 21.0883 57.1904 17.2513 55.3098C8.69719 51.1166 4.30114 44.0047 2.7162 31.7945C2.18789 27.7273 2.07916 21.1325 2.53275 20.679C2.70135 20.5104 3.63153 20.8519 4.6005 21.4375C5.56899 22.0232 7.77229 23.3569 9.49661 24.4019ZM84.4743 27.4107C84.0485 38.35 81.9123 44.7546 76.8375 50.3059C72.9827 54.523 63.3811 58.6831 57.5912 58.6452L55.6322 58.6328L58.5061 57.0917C62.3072 55.0531 68.1383 49.1877 70.1476 45.381C72.8519 40.2583 73.6585 37.3223 73.9392 31.5814L74.1974 26.2944L79.0446 23.3598C81.7106 21.7459 84.0849 20.4079 84.3206 20.3864C84.5668 20.3639 84.6324 23.3569 84.4743 27.4107ZM20.4139 28.005C29.7013 29.843 38.8776 38.6282 41.1781 47.8832C42.1428 51.766 42.5805 55.8576 42.195 57.3934C41.8108 58.923 40.3298 59.0489 35.996 57.9202C24.2903 54.8716 15.1586 43.2571 15.1586 31.4166C15.1586 29.367 15.2985 27.5505 15.469 27.3796C15.64 27.2086 16.2329 27.1627 16.7862 27.2776C17.3399 27.3925 18.9722 27.7196 20.4139 28.005ZM71.5798 30.8257C72.0659 42.7327 63.3509 54.2567 51.1145 57.8862C49.6838 58.311 47.6903 58.6582 46.6839 58.6582C44.6607 58.6582 44.6128 58.5231 44.8087 53.3904C45.2676 41.3808 55.0613 30.2012 67.2364 27.789C69.0206 27.4356 70.696 27.1962 70.9595 27.257C71.2229 27.3178 71.5022 28.9235 71.5798 30.8257Z"
                fill="white"
              ></path>
            </svg>
            <p className="text-center">
              If you're looking for professional massage therapy to help reduce
              tension, improve mobility, or a general sense of well-being, Emir
              is here to help.
              <br />
              <br />
              Contact us at +387 62 174 135 today to make an appointment with
              Emir and start your journey to better health and well-being.
            </p>
            <div className="rounded-xl border-[1px] min-w-full border-cyan-700 text-2xl">
              <a
                href="tel:+38349176999"
                className="flex items-center justify-center gap-4 min-w-full py-5 px-4"
              >
                Click here to phone us
                <Icon
                  icon={
                    <FaPhoneAlt
                      size="30"
                      className="text-white text-opacity-70"
                    />
                  }
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Appointments;