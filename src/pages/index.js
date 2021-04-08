import React,{ useState,useEffect,useRef } from "react";
import { Layout,Row,Col,Tooltip } from "antd";
import {
  LinkedinFilled,
  GithubFilled,
  GitlabFilled,
  FacebookFilled,
  GoogleOutlined,
  LeftCircleOutlined,
  RightCircleOutlined
} from '@ant-design/icons';
import Carousel,{ consts } from "react-elastic-carousel";
// import Navbar from "../Components/Navbar";
import Particles from 'react-particles-js';
import Card from "../Components/Card"

import "react-image-lightbox/style.css"; // This only needs to be imported once in the app
import "../Styles/landing.scss";

const { Content } = Layout;

const LIMIT_IS_MOBILE = 610;

export default function Landing() {
  // const [isMobile,setisMobile] = useState(window.innerWidth < LIMIT_IS_MOBILE);
  const [pointer,setpointer] = useState({});
  const slider = useRef(null)

  useEffect(() => {
    // setisMobile(window.innerWidth < LIMIT_IS_MOBILE);
    window.addEventListener("mousemove",mouseMove);
    window.addEventListener("resize",updateDimensions.bind(this));
    return () => {
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
      // setisMobile(true);
    } else {
      // setisMobile(false);
    }
  };

  const customArrow = ({ type,onClick }) => {
    const arrow =
      type === consts.PREV ? (
        <div className="">
          <LeftCircleOutlined />
        </div>
      ) : (
        <div className="">
          <RightCircleOutlined />
        </div>
      );
    var offset = type === consts.PREV ? -1 : 1;
    offset = parseInt(offset);
    const handleClick = () => {

      onClick();
      // if (indexSlideshow + offset === 4) {
      //   slider.current.goTo(0);
      //   setindexSlideshow(1);
      // } else {
      //   if (indexSlideshow + offset > 0)
      //     setindexSlideshow(indexSlideshow + offset);

      // }
    };
    return <span onClick={handleClick}>{arrow}</span>;
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
              <div className="social mt-10 mb-6">
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

          <section className="testmonial bg-white">

            <h1 className="text-4xl tex-gray text-center font-bold mb-12">Testimonials</h1>
            <Carousel
              data-aos="fade-down"
              ref={slider}
              className={`slide-show-caroussel`}
              breakPoints={[{ itemsToShow: 1,itemsToScroll: 1 }]}
              showArrows={true}
              pagination={true}
              // renderArrow={customArrow}
              // transitionMs={300}
              enableSwipe={true}
              enableAutoPlay 
              autoPlaySpeed={4000}
            >
              <item>
                <Card
                  content="Adel is the most trustworthy freelancer. He is responsive, cooperative, good responsibility. I highly recommend Adel and I will give him 6 star rating...:)"
                  authName="Jesen Bak"
                  authPic="https://cdn.dribbble.com/users/2436043/avatars/normal/data?1532185867"
                  authRole="CEO/Art Director. PAY N EARN PTE. LTD, Singapore"
                  source="upwork"
                  link="https://www.upwork.com/o/profiles/users/~01dbcd5d17acf61616/"
                  date="09-2020"
                />
              </item>
              <item>
                <Card
                  content="Adel is friendly and worked hard while he was with us."
                  authName="Nick Esposito"
                  authPic="https://www.mtsolar.us/wp-content/uploads/2020/04/avatar-placeholder.png"
                  authRole="CEO Future realities, USA"
                  source="upwork"
                  link="https://www.upwork.com/o/profiles/users/~01dbcd5d17acf61616/"
                  date="07-2020"
                />
              </item>

              <item>
                <Card
                  content="Excellent work. The contractor was willing to solve the issue right away. He also did a zoom call and fixed the problem instantly. very impressive and great communication skills. I highly recommend him for all web work."
                  authName="Joseph Gilbert"
                  authPic="https://www.mtsolar.us/wp-content/uploads/2020/04/avatar-placeholder.png"
                  authRole="Web agency director, USA"
                  source="upwork"
                  link="https://www.upwork.com/o/profiles/users/~01dbcd5d17acf61616/"
                  date="03-2021"
                />
              </item>
              <item>
                <Card
                  content="Adel is a young Engineer with high capabilities and innovative thinking oriented I trained him in project management and he showed an excellent performance in resolving the case studies You will enjoy working with him."
                  authName="Youcef BELOUZ"
                  authPic="https://media-exp1.licdn.com/dms/image/C4E03AQEtiAbf0BSRxw/profile-displayphoto-shrink_800_800/0/1517747166574?e=1622678400&v=beta&t=7i89AQeBMfqWwuQo9-RWo-rbVVOKTUhLYub2ltl6YRw"
                  authRole="CEO & Founder at Connectech & Certipro, Algeria"
                  source="linkedin"
                  link="https://www.linkedin.com/in/youcefbelouz/"
                  date="10-2019"
                />
              </item>
              <item>
                <Card
                  content="I had the chance to work with Adel, a very serious and dynamic person, he brought a great value to the IT team of Unicoorp. I strongly recommend this engineer for your project!"
                  authName="Aghiles DJELLOULI"
                  authPic="https://media-exp1.licdn.com/dms/image/C4D03AQHULMvY8wLSVw/profile-displayphoto-shrink_800_800/0/1616333475380?e=1622678400&v=beta&t=tWcASxbE3cVRT2jDKbOvTxqdY1zGQeqw7UNq-C6Nnd8"
                  authRole="CRM and Digital Marketing Project Manager à Transdev, France"
                  source="linkedin"
                  link="https://www.linkedin.com/in/aghiles-djellouli/"
                  date="07-2020"
                />
              </item>
              <item>
                <Card
                  content="Adel is among the best people I've met during my academic career, he is a brilliant element, he learns quickly and allows to boost his team with his human and professional qualities. I was his Android trainer to develop an application for an association, we worked together in the preparation of events organized by the clubs: CVE and GDG Algiers. I recommend him for his technical skills, his human and professional qualities."
                  authName="Bouzid MEDJDOUB"
                  authPic="https://media-exp1.licdn.com/dms/image/C4D35AQF9ZlQOwkUjQA/profile-framedphoto-shrink_800_800/0/1602534092209?e=1617951600&v=beta&t=LLBThpLysQI4oYuBAkVX_DnTUZxuQCbqIYbCXpjnCRo"
                  authRole="Salesforce Technical Functional Consultant, France"
                  source="linkedin"
                  link="https://www.linkedin.com/in/bouzid-medjdoub/"
                  date="06-2018"
                />
              </item>

            </Carousel>
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
