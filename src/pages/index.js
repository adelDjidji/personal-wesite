import React,{ useState,useEffect,createRef } from "react";
import { Layout,Row,Col,Tooltip } from "antd";
import * as Antd from "antd";
import {
  LinkedinFilled,
  GithubFilled,
  GitlabFilled,
  FacebookFilled,
  GoogleOutlined
} from '@ant-design/icons';
import Carousel,{ consts } from "react-elastic-carousel";
import Navbar from "../Components/Navbar";
import Particles from 'react-particles-js';

import "react-image-lightbox/style.css"; // This only needs to be imported once in the app
import "../Styles/landing.scss";

const { Header,Content } = Layout;

const LIMIT_IS_MOBILE = 610;

export default function Landing() {
  const [navBarWhite,setnavBarWhite] = useState(false);
  const [isMobile,setisMobile] = useState(window.innerWidth < LIMIT_IS_MOBILE);
  const [draweOpen,setdraweOpen] = useState(false);
  const [indexSlideshow,setindexSlideshow] = useState(1);
  const [pointer,setpointer] = useState({});

  const Refcarousel2 = createRef();
  const Ref1 = createRef(); // Reference to section 2 : Video
  const Ref2 = createRef(); // Reference to section 3 : SlideShow
  const Ref3 = createRef(); // Reference to section 4 : Features
  const Ref4 = createRef(); // Reference to section 5 : Membership

  useEffect(() => {
    setisMobile(window.innerWidth < LIMIT_IS_MOBILE);
    window.addEventListener("scroll",handleScroll);
    window.addEventListener("mousemove",mouseMove);
    window.addEventListener("resize",updateDimensions.bind(this));
    return () => {
      window.removeEventListener("scroll",handleScroll);
      window.removeEventListener("mousemove",mouseMove);
      window.removeEventListener("resize",updateDimensions.bind(this));
    };
  });

  const mouseMove = (e) => {
    // console.log(e.clientY);
    setpointer({ x: e.clientX,y: e.clientY })
  }
  const updateDimensions = () => {
    if (window.innerWidth < LIMIT_IS_MOBILE) {
      setisMobile(true);
    } else {
      setisMobile(false);
    }
  };



  var lastScrollTop = 0;
  const handleScroll = (e) => {
    e.preventDefault();
    const currentScrollTop = e.target.scrollingElement.scrollTop;

    if (currentScrollTop > lastScrollTop) {
      if (currentScrollTop >= 90 && !navBarWhite) {
        setnavBarWhite(true);
      }
    } else {
      if (currentScrollTop <= 90 && navBarWhite) {
        setnavBarWhite(false);
      }
    }
    lastScrollTop = currentScrollTop;
  };




  return (
    <div className="">
      <Content>
        <div className="landing-page-container">
          <Particles style={{
            position: 'absolute',
            height: '100vh',
            backgroundImage: 'linear-gradient(45deg, #65d2a5 0%, #2fbcd8 100%)'
          }} />
          <section className="section1 flex items-center justify-center">
            <div className="text-center" style={{
              transform: `translate(${pointer.x / 80}px, ${pointer.y / 90}px)`
            }}>
              <h2 className="block text-lg font-mono">Hi 👋,  I am</h2>
              <h1 className="block text-3xl font-bold uppercase">Adel DJIDJIK</h1>
              <div className="img-me m-auto mt-6 mb-6 w-44 h-44 rounded-full border-4 border-white shadow-md"></div>
              <h1 className="title block text-2xl font-bold uppercase">Software engineer  <br /> fullstack JS developer</h1>

              <p style={{ width: '50%' }} className="text-md m-auto mt-8">Adel is a skilled web developer with +4 years on building UI web development with ReactJS , +3 years on full stack development ReactJS and nodeJs. I love building cool software solutions and making them as perfect as possible. I care about cleaning my code just as a beautiful piece of art.
   I am Scrum fundamentals Certified, I am motivated on working with Scum methodology for perfect client satisfaction</p>
              <div className="social mt-10">
                <Tooltip title="Email me now!" placement="top">
                  <a href="mailto:djidjik.adel.sp@gmail.com" title="Email"><GoogleOutlined /></a>
                </Tooltip>
                <Tooltip title="LinkedIn profile" placement="top">
                  <a href="https://www.linkedin.com/in/adel-djidjik/" title="LinkedIn profile" target="_black"><LinkedinFilled /></a>
                </Tooltip>
                <Tooltip title="Github profile" placement="top">
                  <a href="https://github.com/adelDjidji" title="Github profile" target="_black"><GithubFilled /></a>
                </Tooltip>
                <Tooltip title="Gitlab profile" placement="top">
                  <a href="https://gitlab.com/adelDJI" title="Gitlab profile" target="_black"><GitlabFilled /></a>
                </Tooltip>
                <Tooltip title="Facebook profile" placement="top">
                  <a href="https://www.facebook.com/adel.doula.507464" title="Facebook profile" target="_black"><FacebookFilled /></a>
                </Tooltip>

              </div>
            </div>


          </section>

          <footer className="footer-landing">
            <Row>
              
              <Col className="text-center text-3xl" xs={24} sm={24} ms={24} lg={24} xl={24}>
                <b>Comming soon! </b>
              </Col>
              
            </Row>
          </footer>
        </div>
      </Content>
    </div>
  );
}
