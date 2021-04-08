import React,{ useState,useEffect,useRef } from "react";
import { Layout,Row,Col,Tooltip } from "antd";
import {
  LinkedinFilled,
  GithubFilled,
  GitlabFilled,
  FacebookFilled,
  GoogleOutlined,
} from '@ant-design/icons';
import Carousel,{ consts } from "react-elastic-carousel";
// import Navbar from "../Components/Navbar";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css"; // This only needs to be imported once in the app

import Particles from 'react-particles-js';
import Card from "../Components/Card"
import CardSlider from "../Components/CardSlider"
import TimeLine from "../Components/TimeLine"

import "react-image-lightbox/style.css"; // This only needs to be imported once in the app
import "../Styles/landing.scss";

const { Content } = Layout;

const LIMIT_IS_MOBILE = 610;

export default function Landing() {
  // const [isMobile,setisMobile] = useState(window.innerWidth < LIMIT_IS_MOBILE);
  const [pointer,setpointer] = useState({});
  const slider = useRef(null)
  const [lightBoxState, setlightBoxState] = useState({
    photoIndex: 0,
    isOpen: false,
  });
  const imagesObj = [
    {
      src:"/img/certifs/guines.jpg",
      alt:"guiness world record hadj hackathon saudi arabia 2018"
    },
    {
      src:"/img/certifs/hajjHackathon.jpeg",
      alt:"hadj hackathon saudi arabia 2018 adel djidjik"
    },
    {
      src:"/img/certifs/770001_SFC_Adel Djidjik.jpg",
      alt:"scrum fundamentals certfied adel djidjik"
    },
    {
      src:"/img/certifs/datasceince.png",
      alt:"data science fundamentals adel djidjik"
    },
    {
      src:"/img/certifs/EFSET.png",
      alt:"english test ef set C2 adel djidjik"
    },
    {
      src:"/img/certifs/itil1.png",
      alt:"itil formation adel djidjik"
    },
    {
      src:"/img/certifs/itil2.png",
      alt:"itil formation adel djidjik"
    },
    {
      src:"/img/certifs/itil3.png",
      alt:"itil formation adel djidjik"
    },
    {
      src:"/img/certifs/webtrainer.png",
      alt:"web training certificat adel djidjik"
    },
  ];

  const images=imagesObj.map(img=>img.src)
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


  return (
    <div className="app">
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

          <section className="timeline bg-white">
            <h1 className="text-4xl tex-gray text-center font-bold mb-12">Work experience</h1>
            <TimeLine />
          </section>
          <section className="testmonial bg-gray-100">

            <h1 className="text-4xl tex-gray text-center font-bold mb-12">Testimonials</h1>

            <Carousel
              data-aos="fade-down"
              ref={slider}
              className={`slide-show-caroussel`}
              breakPoints={[{ itemsToShow: 1,itemsToScroll: 1 }]}
              showArrows={true}
              pagination={true}
              // transitionMs={300}
              enableSwipe={true}
            // enableAutoPlay 
            // autoPlaySpeed={10000}
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

          <section className="portfolio bg-white">
            <h1 className="text-4xl tex-gray text-center font-bold mb-12">Portfolio</h1>
            <div className="flex flex-wrap justify-start">
              <CardSlider
              cover="/img/rwad.png"
              projectName="Rwad platform"
              link="https://rwad.tk/"
              skills={["NEXT.JS","Strapi","React","Responsive","Git"]}
              date="06-2020 - 08-2020"
            />
              <CardSlider
              cover="/img/rwad.png"
              projectName="Media analytics"
              link="https://rwad.tk/"
              skills={["React","Redux","Material-UI","Mongo","NodeJS","Gitlab"]}
              date="12-2020 - 03-2021"
            />
              <CardSlider
              cover="/img/rwad.png"
              projectName="Cash consolidation and reporting"
              link="https://rwad.tk/"
              skills={["React","Redux","Material-UI","Mongo","NodeJS","Gitlab"]}
              date="10-2020 - 12-2020"
            />
              <CardSlider
              cover="/img/wo.png"
              projectName="Wassit online"
              link="https://wassitonline.anem.dz/"
              skills={["AngularJS",".NET core","IdentityServer","SQL server","IIS","TFS","Visual studion","UML", "OAuth2"]}
              date="12-2019 - 09-2020"
            />
              <CardSlider
              cover="/img/sagepdf.png"
              projectName="Pdf extractor"
              link="https://sagepaiemailer.herokuapp.com/"
              skills={["Python","Django","Heroku"]}
              date="12-2019 - 09-2020"
            />
              <CardSlider
              cover="/img/talent.png"
              projectName="Talent performance | CEVITAL"
              link=""
              skills={["React","NodeJS","Antd","MYSQL","SocketIO","Flask","Data mining","Git","UML"]}
              date="10-2018 - 08-2019"
            />
              <CardSlider
              cover="/img/convert-0.png"
              projectName="Convert portal website"
              link="http://convert-website.herokuapp.com/"
              skills={["React","JS","Antd","Responsive","Multi-lang","Heroku","Git"]}
              date="06-2020 - 08-2020"
            />
            <CardSlider
              cover="/img/tethyr_landing.png"
              projectName="Tethyr website redesign"
              link="http://tethyr.io/"
              skills={["React","Redux","ES7","Antd","Responsive","Jenkinze","Git"]}
              date="04-2020 - 06-2020"
            />
            <CardSlider
              cover="/img/startups.Omran.jpg"
              projectName="Omran startups platform"
              link="startups.omran.org"
              skills={["HTML","AJAX","JQuery","Responsive","Php","Git"]}
              date="01-2020 - 03-2020"
            />
            <CardSlider
              cover="/img/VISOR.jpg"
              projectName="Visor web interface"
              link=""
              skills={["HTML","JS","Responsive","CSS","Git"]}
              date="09-2020"
            />
            </div>
            
          </section>
          <section className="certifs bg-gray-100">
            <h1 className="text-4xl tex-gray text-center font-bold mb-12">Certificats and honors</h1>
            {lightBoxState.isOpen && (
              <Lightbox
                mainSrc={images[lightBoxState.photoIndex]}
                nextSrc={images[(lightBoxState.photoIndex + 1) % images.length]}
                prevSrc={
                  images[
                    (lightBoxState.photoIndex + images.length - 1) %
                      images.length
                  ]
                }
                onCloseRequest={() =>
                  setlightBoxState({ ...lightBoxState, isOpen: false })
                }
                onMovePrevRequest={() =>
                  setlightBoxState({
                    ...lightBoxState,
                    photoIndex:
                      (lightBoxState.photoIndex + images.length - 1) %
                      images.length
                  })
                }
                onMoveNextRequest={() =>
                  setlightBoxState({
                    ...lightBoxState,
                    photoIndex:
                    (lightBoxState.photoIndex + 1) % images.length
                  })
                }
              />
            )}
            <Carousel
              data-aos="fade-down"
              // ref={slider}
              className={`slide-show-caroussel`}
              breakPoints={[{ itemsToShow: 3,itemsToScroll: 1 }]}
              showArrows={true}
              pagination={true}
              // transitionMs={300}
              enableSwipe={true}
            // enableAutoPlay 
            // autoPlaySpeed={10000}
            >
              {
                imagesObj.map((img, idx)=><item onClick={() => setlightBoxState({photoIndex:idx, isOpen: true }) }>
                <img src={img.src} alt={img.alt}/>
              </item>)
              }
              
              

            </Carousel>
          </section>

          <footer className="footer-landing">
            <Row>

              <Col className="text-center text-3xl" xs={24} sm={24} ms={24} lg={24} xl={24}>
                
              </Col>

            </Row>
          </footer>
        </div>
      </Content>
    </div>
  );
}
