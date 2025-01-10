import React,{ useState , useEffect } from 'react'
import './about.css'
import Me from '../../assets/abt-img.png'
import orgLogo from '../../assets/Tech-Mahindra-Logo.png'
import { FaAward } from 'react-icons/fa'
import { GoOrganization } from "react-icons/go";
import { VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  const abtText="Computer Engineer with honors in AIML, 2023 graduate from Savitribai Phule Pune University. Passionate Software Developer with a strong foundation in software development, gained through training and hands-on experience. Skilled in technologies like PHP, Magento2 and ReactJs, I have worked on diverse projects, delivering innovative solutions. Committed to continuous learning, adaptability, and making impactful contributions in technology.";
  const abtSubHeader="Software Developer | PHP FullStack | MERN Stack | Designer ";

  
    const startDate=new Date('2023-11-30');
    const calcExp=()=>{
      const currDate=new Date();
      let years=currDate.getFullYear()-startDate.getFullYear();
      let months=currDate.getMonth()-startDate.getMonth();

      if(months<0){
        years-=1;
        months+=12;
      }

      return {years, months};
    };

    const [experience, setExperience] = useState({years:0, months:0});
    useEffect(()=>{
      const expData=calcExp();
      setExperience(expData);
    },[]);
  

  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-img'>
            <img src={Me} alt='abt img'/>
          </div>
        </div>

        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>{experience.years} year {experience.months} months</small>
            </article>
            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>15+ Completed</small>
            </article>
            <article className='about__card'>
              <GoOrganization className='about__icon'/>
              <h5>Current Org.</h5>
              <img src={orgLogo} className='orgLogo' alt='Tech Mahindra'></img>
            </article>
            
          </div>

          <p>{abtText} <br/> <br/> <strong>{abtSubHeader}</strong> </p>
          <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>
        
      </div>
    </section>
  )
}

export default About