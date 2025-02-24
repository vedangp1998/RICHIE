import './App.css'
import { useEffect, useState } from 'react';
import { motion, useAnimation } from "framer-motion";
import { IconButton } from '@mui/material';
import TopLayerImage from './assets/DotShade.svg';
import DottedShadeTwo from './assets/DottedShadeTwo.svg';
import MiddleLayer from './assets/MiddleLayer.svg';
import Logo from './assets/Logo.svg';
import IpadImage from './assets/ipad.svg'
import HorizontalLine from './assets/line.svg';
import ellipse from './assets/ellipse.svg';
import RobotImage from './assets/Toy.svg';
// import TopRightLine from './assets/TopRightLine.svg';
// import BottomRightLine from './assets/BottomRightLine.svg';
// import LeftCenterLine from './assets/LeftCenterLine.svg';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import EmojiOne from './assets/EmojiOne.svg';
import EmojiTwo from './assets/EmojiTwo.svg';
import EmojiThree from './assets/EmojiThree.svg';
import ArrowIcon from './assets/ArrowIcon.svg';
import FacebookLogo from './assets/logo_facebook.svg';
import LinkedinLogo from './assets/logo_linkedin.svg';
import TwitterLogo from './assets/logo_twitter.svg';
import CardOne from './assets/Card1.svg';
import CardTwo from './assets/Card2.svg';
import CardThree from './assets/Card3.svg';
import StarFilledIcon from './assets/starfilled.svg';
import StarlineIcon from './assets/starline.svg';
import HorizontalShade from './assets/HorizontalShade.svg';
// import CardFour from './assets/Card4.svg';

const images = [CardOne, CardTwo, CardThree];
const totalStars = 5;

const App = () => {
  const controls = useAnimation();
  const [rating, setRating] = useState(0);

  useEffect(() => {
    controls.start({
      x: [0, -800],
      transition: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 40,
        ease: "linear",
      },
    });
  }, [controls]);
  return <>

    {/* First Section*/}
    <section
      className="w-full px-4 md:px-[80px] bg-no-repeat bg-center bg-fill"
      style={{
        backgroundImage: `url(${TopLayerImage})`,
        backgroundPosition: "top center",
      }}
    >
      <div className="w-full flex items-center justify-between pt-8 px-6 md:px-12 gap-x-4">
        <img src={Logo} alt="Logo" className="w-[120px] md:w-auto" />
        <button className="bg-[#48BF84] w-[171px] h-[36px] rounded-[20px] border-1 font-[700]">
          Get My Free Plan
        </button>
      </div>
      <div className="flex flex-col items-center justify-center gap-4 relative z-10">
        <div className="flex flex-col items-center text-center justify-center mt-20 md:mt-40 px-4">
          <span className="text-[32px] md:text-[56px] font-bold bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent leading-[60px]">
            Take Control of Your<br className="hidden md:block" /> Finances - In Just Minutes!
          </span>
          <span className="text-[16px] md:text-[19.8px] font-[500] text-[#A1A1AA] mt-3 md:mt-4 leading-[32px]" >
            Say goodbye to financial stress. Get a step-by-step, expert-approved plan tailored to your goals.
          </span>
        </div>
        <div className="w-full flex flex-col items-center relative">
          <img
            src={IpadImage}
            alt="Ipad"
            className="w-[280px] md:w-[600px] lg:w-[600px] xl:w-auto max-w-full z-10"
          />
          <img
            src={ellipse}
            alt="Ellipse"
            className="w-[250px] sm:w-[300px] md:w-[557px] mt-[-100px] md:mt-[-250px] z-[-1000]"
          />
        </div>
      </div>
    </section>

    {/* Second Section */}
    <section className="w-full flex justify-center items-center px-4 md:px-6 py-0 text-center">
      <span className="text-[28px] md:text-[40px] font-[700] bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent md:leading-[44px] mt-[-100px] leading-[44px]">
        No more guesswork. No more financial stress.<br className="hidden md:block" />
        Richie creates expert-approved financial plans<br className="hidden md:block" />
        designed just for you—helping you save, invest,<br className="hidden md:block" />
        and secure your future with confidence.
      </span>
    </section>

    {/* Third Section */}
    <section className='flex items-center justify-center'>
      <img src={RobotImage} alt="RoboteImage" />
    </section>

    {/* Fourth Section  */}
    <section>
      <div
        className="w-full flex flex-col items-center justify-center gap-12 bg-fill bg-top bg-no-repeat md:px-[80px] lg:px-16 px-4 "
        style={{ backgroundImage: `url(${DottedShadeTwo})` }}
      >
        <div className="flex flex-col items-center justify-center gap-4 mb-12 mt-[20px]">
          <button className="bg-[#48BF84] w-[171px] h-[36px] font-[700] rounded-[20px] border-1 md:w-[200px] md:h-[42px] lg:w-[220px] lg:h-[48px]">
            Get My Free Plan
          </button>
          <div className="flex flex-col items-center justify-center">
            <button className="text-[13.9px] font-[400] text-[#A1A1AA] md:text-[16px] lg:text-[18px]">
              Learn More
            </button>
            <IconButton>
              <ArrowDownwardIcon
                sx={{
                  color: "#A1A1AA",
                  width: "18px",
                  height: "18px",
                }}
              />
            </IconButton>
          </div>
        </div>

        <div className="flex text-center flex-col items-center justify-center mt-[-55px]">
          <span className="text-[30px] md:text-[36px] lg:text-[40px] font-bold bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">
            What If You Had a Clear Financial Roadmap?
          </span>
          <span className="text-[16px] md:text-[18px] lg:text-[19.8px] font-[500] text-[#A1A1AA]">
            Instead of second-guessing money decisions, imagine having a simple,
            expert- <br className="hidden md:block" />
            approved plan—built for your lifestyle.
          </span>
        </div>

        <div className="flex flex-col items-center justify-center gap-10">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <div
              className="flex flex-col items-center gap-2 justify-center w-[177px] h-[167px] rounded-[20px] bg-white/10 backdrop-blur-[1px] p-5"
              style={{ border: "1px solid rgba(34, 211, 238, 0.9)" }}
            >
              <img src={EmojiOne} alt="Emoji" className="w-[56px] h-[56px]" />
              <span className="text-[16px] italic text-center">No complex jargon</span>
            </div>

            <div
              className="flex flex-col items-center gap-2 justify-center w-[177px] h-[167px] rounded-[20px] bg-white/10 backdrop-blur-[1px] p-5"
              style={{ border: "1px solid rgba(34, 211, 238, 0.9)" }}
            >
              <img src={EmojiTwo} alt="Emoji" className="w-[56px] h-[56px]" />
              <span className="text-[16px] italic text-center">No guesswork</span>
            </div>
            <div
              className="flex flex-col items-center gap-2 justify-center w-[177px] h-[167px] rounded-[20px] bg-white/10 backdrop-blur-[1px] p-5"
              style={{ border: "1px solid rgba(34, 211, 238, 0.9)" }}
            >
              <img src={EmojiThree} alt="Emoji" className="w-[56px] h-[56px]" />
              <span className="text-[16px] italic text-center">Just results!</span>
            </div>
          </div>

          <div>
            <span className="text-[18px] md:text-[20px] italic font-medium leading-6 text-center">
              Join thousands taking control of their financial future today!
            </span>
          </div>

          <div>
            <button className="bg-[#48BF84] w-[171px] font-[700] h-[36px] rounded-[20px] border-1 md:w-[200px] md:h-[42px] lg:w-[220px] lg:h-[48px]">
              Get My Free Plan
            </button>
          </div>
        </div>

        <div>
          <img src={HorizontalLine} alt="Separator" className="w-full mt-[-60px] mb-[-80px]" />
        </div>

        <div>
          <span className="text-[30px] md:text-[36px] lg:text-[40px] font-bold bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">
            How it Works (Fast & Simple)
          </span>
        </div>
      </div>

      <div className="overflow-hidden w-full max-w-[1280px] mx-auto relative mt-8">
        <motion.div
          className="flex items-center gap-6 sm:gap-12 cursor-grab p-6"
          drag="x"
          dragConstraints={{ left: -800, right: 0 }}
          animate={controls}
          onDragStart={() => controls.stop()}
          onDragEnd={() =>
            controls.start({
              x: [0, -800],
              transition: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 20,
                ease: "linear",
              },
            })
          }
        >
          {[...images, ...images].map((src, index) => (
            <motion.img
              key={index}
              src={src}
              className="w-full sm:w-[300px] md:w-[384px] h-[400px] sm:h-[480px] shrink-0"
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
            />
          ))}
        </motion.div>
      </div>
    </section >

    {/* Fifth Section  */}
    <section>
      <div
        className="w-full h-[900px] flex flex-col items-center justify-center gap-12 bg-fill bg-top bg-no-repeat md:px-[80px] lg:px-16 px-4 mt-[-150px] "
        style={{ backgroundImage: `url(${MiddleLayer})` }}
      >
        <div className='flex flex-col items-center gap-14'>
          <div className="text-center">
            <span className="text-[20px] italic font-[500] leading-6">
              Your personalized plan is just a few clicks away!
            </span>
          </div>

          <div className="flex flex-col items-center">
            <button className="bg-[#48BF84] w-[171px] h-[36px] rounded-[20px] border-1 text-[700]">
              Start Plan Today
            </button>
            <div>
              <img src={HorizontalLine} className="w-full max-w-[600px] mt-[-60px] mb-[-50px]" alt="Divider" />
            </div>
            <span className="text-[40px] font-bold bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent text-center">
              Why Richie?
            </span>
          </div>

          <div className="flex flex-col items-center justify-center gap-12">
            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
              <div className='flex flex-col items-center'>
                <div
                  className="flex flex-col items-center justify-center w-[219px] h-[139px] rounded-[20px] bg-white/10 backdrop-blur-[4px] p-5 text-center"
                  style={{ border: "1px solid rgba(34, 211, 238, 1)" }}
                >
                  <span className="text-[17px] font-bold leading-6">Expert Backed</span>
                  <span className="text-[14px] font-medium leading-6">
                    Every strategy is reviewed by professionals.
                  </span>
                </div>
                <img src={HorizontalShade} className='w-[159px] h-[1px] mt-[2px]' />
              </div>
              <div className='flex flex-col items-center'>
                <div
                  className="flex flex-col items-center justify-center w-[219px] h-[139px] rounded-[20px] bg-white/10 backdrop-blur-[4px] p-5 text-center"
                  style={{ border: "1px solid rgba(34, 211, 238, 1)" }}
                >
                  <span className="text-[17px] font-bold leading-6">Easy to Understand</span>
                  <span className="text-[14px] font-medium leading-6">
                    No jargon—just clear, simple steps.
                  </span>
                </div>
                <img src={HorizontalShade} className='w-[159px] h-[1px] mt-[2px]' />
              </div>
              <div className='flex flex-col items-center'>
                <div
                  className="flex flex-col items-center justify-center w-[219px] h-[139px] rounded-[20px] bg-white/10 backdrop-blur-[4px] p-5 text-center"
                  style={{ border: "1px solid rgba(34, 211, 238, 1)" }}
                >
                  <span className="text-[17px] font-bold leading-6">Data Stays Yours</span>
                  <span className="text-[14px] font-medium leading-6">
                    We prioritize security & privacy.
                  </span>
                </div>
                <img src={HorizontalShade} className='w-[159px] h-[1px] mt-[2px]' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Sixth Section  */}
    <section className='flex flex-col items-center justify-center gap-12 lg:mt-[-180px] sm:mt-[-150px] md:mt-[-180px]'>
      <div>
        <div
          className="flex flex-col items-center justify-center w-[113px] h-[66px] rounded-[20px] border bg-black/10 backdrop-blur-[16px] p-5 text-center relative top-[430px]"
          style={{ border: "1px solid rgba(34, 211, 238, 0.9)" }}
        >
          <span className="text-[14px] font-small leading-6">
            100% Personalized
          </span>
        </div>
        <img src={ArrowIcon} alt="ArrowIcon" className='w-[315px] h-[482px] ' />
      </div>
      <img src={HorizontalLine} className='mb-[0px] mt-[-100px]' />
    </section>

    {/* Seventh Section  */}
    <section className='flex flex-col items-center justify-center gap-[80px] flex-wrap'>
      <div className="flex items-center justify-center max-w-[1280px] mx-auto text-center md:text-left px-4">
        <span className="text-[40px] font-[700] bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">
          Success Stories from Real Users
        </span>
      </div>

      <div className='w-full max-w-[1280px] flex flex-wrap items-center justify-center gap-8 p-4'>
        <div className="bg-white/5 w-full sm:w-[280px] p-[30px] gap-[16px] rounded-[14px] h-auto sm:h-[368px] flex flex-col items-start justify-start">
          <div className="flex items-center gap-4 justify-between">
            <div className="w-[56px] h-[56px] flex items-center justify-center bg-[#669966] rounded-full text-white font-bold text-xl">
              V
            </div>
            <div className="flex flex-col items-start justify-center gap-[4px]">
              <span className="text-[18px] font-semibold leading-[21px] text-white">Jessica Chani</span>
              <span className="text-[14px] font-medium leading-[17px] text-gray-400">Teacher</span>
            </div>
          </div>

          <div className="text-left flex flex-col text-white text-[14px] font-medium w-full sm:w-[200px] leading-[20px]">
            <span>
              Security is very important in online financial management, and Financy uses high-level encryption to protect users sensitive data, so users can feel safe.
            </span>
            <br />
            <span>
              Not only that, but Financy also provides various additional features, investment options, and even personalized financial advice.
            </span>
          </div>
        </div>

        <div className="w-full sm:w-auto flex flex-col items-center sm:items-start gap-4">
          <div className="bg-white/5 w-full sm:w-[280px] p-[30px] gap-[16px] rounded-[14px] h-auto sm:h-[168px] flex flex-col items-start justify-start">
            <div className="flex items-center gap-4 justify-between">
              <div className="w-[56px] h-[56px] flex items-center justify-center bg-[#6699] rounded-full text-white font-bold text-xl">
                Y
              </div>
              <div className="flex flex-col items-start justify-center gap-[4px]">
                <span className="text-[18px] font-semibold leading-[21px] text-white">Charles Leclerc</span>
                <span className="text-[14px] font-medium leading-[17px] text-gray-400">Businessman</span>
              </div>
            </div>

            <div className="flex items-center justify-center gap-2">
              {[...Array(totalStars)].map((_, index) => {
                const starValue = index + 1;
                return (
                  <img
                    key={index}
                    src={starValue <= rating ? StarFilledIcon : StarlineIcon}
                    alt="star"
                    className="cursor-pointer"
                    onClick={() => setRating(starValue)}
                  />
                );
              })}
            </div>
          </div>

          <div className="w-full sm:w-[268px] flex flex-col items-center sm:items-start p-[30px]">
            <div className="flex items-center justify-center gap-0">
              <span className='text-[52px] font-[700] leading-[93px] text-[#FFFFFF]'>420.000 </span>
              <span className="text-[#5D74F1] text-[52px] font-[700] leading-[93px]">+</span>
            </div>
            <span className='text-[18px] font-[500] leading-[36px] text-[#95969B]'>Financy users.</span>
          </div>
        </div>

        <div className="w-full sm:w-auto flex flex-col items-center sm:items-start gap-4">
          <div className="w-full sm:w-[268px] flex flex-col items-center sm:items-start p-[30px]">
            <div className="flex items-center justify-center gap-0">
              <span className='text-[52px] font-[700] leading-[93px] text-[#FFFFFF]'>200.000 </span>
              <span className="text-[#5D74F1] text-[52px] font-[700] leading-[93px]">+</span>
            </div>
            <span className='text-[18px] font-[500] leading-[36px] text-[#95969B]'>Good reviews from users.</span>
          </div>

          <div className="bg-white/5 w-full sm:w-[280px] p-[30px] gap-[16px] rounded-[14px] h-auto sm:h-[168px] flex flex-col items-start justify-start">
            <div className="flex items-center gap-4 justify-between">
              <div className="w-[56px] h-[56px] flex items-center justify-center bg-[#F8F9] rounded-full text-white font-bold text-xl">
                S
              </div>
              <div className="flex flex-col items-start justify-center gap-[4px]">
                <span className="text-[18px] font-semibold leading-[21px] text-white">Agnes Florence</span>
                <span className="text-[14px] font-medium leading-[17px] text-gray-400">Doctor</span>
              </div>
            </div>

            <div className="flex items-center justify-center gap-2">
              {[...Array(totalStars)].map((_, index) => {
                const starValue = index + 1;
                return (
                  <img
                    key={index}
                    src={starValue <= rating ? StarFilledIcon : StarlineIcon}
                    alt="star"
                    className="cursor-pointer"
                    onClick={() => setRating(starValue)}
                  />
                );
              })}
            </div>
          </div>
        </div>

        <div className="bg-white/5 w-full sm:w-[280px] p-[30px] gap-[16px] rounded-[14px] h-auto sm:h-[368px] flex flex-col items-start justify-start">
          <div className="flex items-center gap-4 justify-between">
            <div className="w-[56px] h-[56px] flex items-center justify-center bg-[#669966] rounded-full text-white font-bold text-xl">
              V
            </div>
            <div className="flex flex-col items-start justify-center gap-[4px]">
              <span className="text-[18px] font-semibold leading-[21px] text-white">Jessica Chani</span>
              <span className="text-[14px] font-medium leading-[17px] text-gray-400">Teacher</span>
            </div>
          </div>

          <div className="text-left flex flex-col text-white text-[14px] font-medium w-full sm:w-[200px] leading-[20px]">
            <span>
              Security is very important in online financial management, and Financy uses high-level encryption to protect users sensitive data, so users can feel safe.
            </span>
            <br />
            <span>
              Not only that, but Financy also provides various additional features, investment options, and even personalized financial advice.
            </span>
          </div>
        </div>

      </div>


    </section>

    {/* Eight  Section  */}
    <section className="w-full">
      <div className='flex items-center justify-center'>
        <img src={HorizontalLine} />
      </div>

      <div className="max-w-[1280px] mx-auto flex flex-col items-center justify-center gap-6 text-center px-4">
        <span className="text-[31.9px] font-[700] bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">
          Take the First Step Towards Financial Freedom
        </span>
        <span className="text-[17.9px] font-[400] text-[#A1A1AA]">
          Your future deserves a plan—and it starts here!
        </span>
        <button className="bg-[#48BF84] w-[171px] h-[36px] rounded-[20px] border-1">
          Get My Free Plan
        </button>
      </div>

      <div className="flex items-center justify-center gap-4 p-10">
        <img src={FacebookLogo} alt="Facebook" className="w-6 h-6 sm:w-8 sm:h-8" />
        <img src={LinkedinLogo} alt="LinkedIn" className="w-6 h-6 sm:w-8 sm:h-8" />
        <img src={TwitterLogo} alt="Twitter" className="w-6 h-6 sm:w-8 sm:h-8" />
      </div>

      <div className="w-full max-w-[1280px] flex flex-col md:flex-row items-center justify-between mx-auto px-4 sm:px-6 py-6 border-t border-cyan-300">
        <div className="mb-4 md:mb-0">
          <img src={Logo} alt="Logo" className="w-[93.29px] h-[21.83px]" />
        </div>

        <div className="flex-1 flex justify-center">
          <span className="text-[16px] font-[500] text-[#95969B] sm:ml-[0px] md:ml-[100px] lg:ml-[100px]">
            © Richie All Rights Reserved
          </span>

        </div>

        <div className="flex justify-end w-[200px] gap-8">
          <span className="text-[16px] font-[500] text-[#95969B]">Terms</span>
          <span className="text-[16px] font-[500] text-[#95969B]">Privacy</span>
          <span className="text-[16px] font-[500] text-[#95969B]">Security</span>
        </div>
      </div>
    </section>
  </>
}

export default App;