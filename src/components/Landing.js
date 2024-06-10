import React, { useEffect, useState } from 'react';
import { FaRocket } from 'react-icons/fa';
import { FiCode } from 'react-icons/fi';
import { AiOutlineQuestionCircle } from 'react-icons/ai';
// import { IoFlashOutline } from 'react-icons/io5';
import linesImage from '../asset/lines.png';
import shadowImage from '../asset/shadow.png';
import osxImage from '../asset/aragon osx.png';
import sdkImage from '../asset/aragon sdk & ods.png';
import appImage from '../asset/aragon app.png';
import Page2 from './Page2';

const Landing = () => {
  useEffect(() => {
    // Trigger animation when component mounts
    const app = document.getElementById('app');
    const sdkOds = document.getElementById('sdk-ods');
    const osx = document.getElementById('osx');
    const shadow = document.getElementById('shadow');
    const lines = document.getElementById('lines');


    if (app) app.classList.add('animate-moveTop');
    if (sdkOds) sdkOds.classList.add('animate-moveCenter');
    if (osx) osx.classList.add('animate-moveBottom');
    if (shadow) shadow.classList.add('animate-moveShadow');
    if (lines) lines.classList.add('animate-moveLines');
  }, []);

  const [showFeedbackForm, setShowFeedbackForm] = useState(false);

  const toggleFeedbackForm = () => {
    setShowFeedbackForm(!showFeedbackForm);
  };

  return (
    <div>
      <div className="relative bg-blue-600 text-white min-h-screen p-10 overflow-hidden ">
      <div className="flex justify-between h-full">
        <div className="flex-1 flex flex-col justify-center max-w-4xl ml-6 ">
          <div className=" mt-40 ml-2 mr-60">
            <h1 className="text-8xl font-bold mb-6 stylish-font">Build Better, Together</h1>
            <p className="text-xl mb-12">
              Launch your DAO on the most user-friendly tech stack and experiment with governance at the speed of software.
            </p>
            <div className="flex space-x-4 mb-12">
              <button className="flex items-center px-6 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-200">
                <FaRocket className="mr-2" />
                Launch your DAO
              </button>
              <button className="flex items-center px-6 py-3 bg-blue-600 text-white border border-white rounded-lg hover:bg-blue-700">
                <FiCode className="mr-2" />
                What is a DAO?
              </button>
            </div>
          </div>
          </div>
          <div classname= "mt-40" style={{ marginTop:'6rem'}}>
          <div className="relative w-96 h-[calc(100vh-15rem)] flex flex-col items-center translate-x-20 scale-120 mr-20 mt-20 ">
          <img src={linesImage} alt="Lines" className="absolute w-full h-full z-0 mr-80 mt-48 animate-moveLines" style={{ transform: 'translate3d(-10px, 220px, 10px)' }} />
          <img id="shadow" src={shadowImage} alt="Shadow" className="absolute w-full h-full mr-32 z-1 animate-moveShadow" style={{ transform: 'translate3d(-10px, 200px, 10px)' }}/>
          <img id="osx" src={osxImage} alt="Aragon OSX" className="absolute w-full h-full mr-28 z-2 animate-moveBottom" style={{ transform: 'translate3d(-10px, 80px, 0px)' }}  />
          <img id="sdk-ods" src={sdkImage} alt="Aragon SDK & ODS" className="absolute w-full h-full mr-12 z-3 animate-moveCenter" style={{ transform: 'translate3d(-20px, 40px, 0px)' }} />
          <img id="app" src={appImage} alt="Aragon App" className="absolute w-full h-full z-4 animate-moveTop" style={{ transform: 'translate3d(-40px, 80px, 0px)' }} />
          </div>
          </div>
        </div>
        <div className="absolute bottom-2 right-4" style={{ height: "46rem"}}>
          <button
            className="w-14 h-14 bg-blue-700 rounded-full shadow-lg flex items-center justify-center text-white hover:bg-blue-700"
            onClick={toggleFeedbackForm}
          >
            <AiOutlineQuestionCircle className="w-6 h-6" />
          </button>
        </div>
        {showFeedbackForm && (
          <div className="absolute bottom-16 right-4 bg-white text-black p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-xl mb-4">Contact</h2>
            <form>
              <label className="block mb-2">Tell us, what's on your mind? *</label>
              <textarea className="w-full p-2 mb-4 border rounded" placeholder="Type your message here..."></textarea>
              <label className="block mb-2">Feel free to add more details here</label>
              <textarea className="w-full p-2 mb-4 border rounded" placeholder="Add more details..."></textarea>
              <label className="block mb-2">You can add an attachment here</label>
              <div className="w-full p-2 mb-4 border border-dashed rounded">
                <input type="file" className="w-full" />
              </div>
              <label className="block mb-2">Your contact e-mail *</label>
              <input type="email" className="w-full p-2 mb-4 border rounded" placeholder="Your email address..." />
              <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700">
                Send
              </button>
            </form>
          </div>
        )}
        <Page2/>
      </div>
    </div>
  );
};

export default Landing;
