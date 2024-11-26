import React, { useState, useEffect, useMemo } from 'react';
import "./App.css";


function Portfolio(){
    const [index, setIndex] = useState(0);
    const [subIndex, setSubIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
  
    const fullTexts = useMemo(() => [
      'You are welcome to my World!',
      'Glad to have you here!',
      'Your satisfaction is my priority!',
      'Looking forward to better partnership!',
      
    ], []);
  
    useEffect(() => {
        const typingSpeed = 150;
        const deletingSpeed = 100;
        const delayAfterCompleteWord = 2000;
    
        const handleTyping = () => {
          if (isDeleting) {
            if (subIndex > 0) {
              setSubIndex(subIndex - 1);
            } else {
              setIsDeleting(false);
              setIndex((index + 1) % fullTexts.length);
            }
          } else {
            if (subIndex < fullTexts[index].length) {
              setSubIndex(subIndex + 1);
            } else {
              setTimeout(() => {
                setIsDeleting(true);
              }, delayAfterCompleteWord);
            }
          }
        };
    
        const timer = setTimeout(handleTyping, isDeleting ? deletingSpeed : typingSpeed);
        return () => clearTimeout(timer);
    
      },  [subIndex, isDeleting, index, fullTexts]);
    return(
  <body>
    <div className="Overlap">
        <p className="Mayeloye">Mr Coded</p>

     <div className="links">
        <a className="link1" href="#">Home</a>
        <a className="link2"href="#">About Us</a>
        <a className="link3"href="#">Services</a>
        <button className="buttonlink5" >
        <a className="link4" href="#">Contact Us</a>
        </button>
        </div>
     </div><br></br>
<div ClassName="flex">
    <p className="intro">Hy! I am<br></br> Mayeloye Sunday </p>
    <img className="imgprofile" src="./coded.jpeg" alt="avatar"/>
         
           
    </div>
    <p className="explain">Website developer and Mobile Developer working in programming <br></br>field for 2 years specialized in flutter, reactjs, nodejs</p>
    
    <center>
    <div className='changetext'>  
    <h1  ClassName="tchange">{`${fullTexts[index].substring(0, subIndex)}|`}</h1>
    </div>

    <button className="buttonlink6" >
        <a className="link7" href="#">Hire Me</a>
        </button>
    </center>





<div className="Overlap2">
<div className="left-side">
    <p className="work">Work For All This Brand & Client </p><br></br>
    <div className="belowclient">
   <div className="circleavatar">
    <img  className="imgcomp" src="/edurex.jpeg" alt="edurexlogo" />
   </div>
   <div className="circleavatar2">
   <img  className="imgcomp2" src="/edurex.jpeg" alt="edurexlogo" />
   </div>
   <div className="circleavatar3">
   <img  className="imgcomp3" src="/edurex.jpeg" alt="edurexlogo" />
   </div>
   <div className="circleavatar4">
   <img  className="imgcomp4" src="/edurex.jpeg" alt="edurexlogo" />
   </div>
   <div className="circleavatar5">
   <img  className="imgcomp5" src="/edurex.jpeg" alt="edurexlogo" />
   </div>
    </div>
</div>
<div>
</div>


    </div><br></br><br></br>
   <footer className="fbgc">
<section className="section">
<div className='firstsec'>

  <a className='dev' href="#">
<div className='one'>
  <img  className="avawriteup" src="/binary.jpeg" alt="binarylogo" />
  <p  className='columndev'><b>Developer</b><br></br>Hi there! I'm Mayeloye Sunday J.S, a dedicated and passionate developer with a strong background in <br></br>creating efficient and innovative software solutions.Over the years, I’ve honed my skills in both front-end <br></br>and back-end development,enabling me to tackle complex challenges and deliver exceptional results.</p>
</div> 
</a><br></br>

<a className='dev' href="#">
<div className='two'>
<img  className="avawriteup" src="/flutter.jpeg" alt="flutterlogo" />
<p className='columndev'><b>Mobile Developer</b><br></br>Create apps for platforms like iOS, Android, or cross-platform solutions.Write clean and maintainable code using <br></br> framework like Flutter.<br></br>Work with designers, product managers, and other developers to deliver polished products. Ensure applications run smoothly and efficiently on all devices. Keep up with the latest trends and updates in mobile development.
  </p>
</div>
</a><br></br>


<a className='dev' href="#">
<div className='three'>
<img  className="avawriteup" src="/datatechnology.jpg" alt="datatechlogo" />
<p className='columndev'><b>Data Science</b><br></br>????????????????????????????????<br></br>???????????????????????????????????????????<br></br>??????????????????????????
  </p>
</div>
</a><br></br>
</div>

<div className='secondsec'>
  <div className='containerawesome'>
<h1 className='awesome'>My Awesome<br></br><span className='services'>Services</span></h1>
<p>Tailored software solutions to meet specific business needs. End-to-end development from concept to deployment.<br></br>Full-stack development including front-end, back-end, and database management.

Responsive and mobile-first design to ensure compatibility across devices.<br></br>
Building native and cross-platform mobile applications. Focus on user experience, performance, and security.
Designing and implementing robust APIs. Integrating third-party APIs to enhance functionality.
</p>
<button className="buttonlink9" >
        <a className="link4" href="/My CV.docx">View CV</a>
        </button>
</div>
<br></br><br></br><br></br><br></br><br></br>


</div>

</section>

<div className='project'>
  <center>
<h1 className="recent">Recent Project</h1>
</center>

<div className='projectflex'>


<a href="#">
<div className='projone'>
<img  className="imgcomp6" src="/edurex.jpeg" alt="edurexlogo" />
</div> 
</a><br></br>

<a href="#">
<div className='projtwo'>
<img  className="imgcomp7" src="/edurex.jpeg" alt="edurexlogo" />
</div>
</a><br></br>


<a href="#">
<div className='projthree'>
<img  className="imgcomp8" src="/edurex.jpeg" alt="edurexlogo" />
</div>
</a><br></br>
</div>

</div><br></br><br></br>

<div className='social'>
<a href="tel:+2349053504636">
<img  className="socialimg" src="/phonecall.webp" alt="whatsapplogo" />
</a>

<a  href="https://github.com/Sammycoded" target="_blank" rel="noopener noreferrer">
<img  className="socialimg" src="/github.webp" alt="githublogo" />
</a>


<a href="https://wa.me/+2349053504636" target="_blank" rel="noopener noreferrer">
<img  className="socialimg" src="/whatsapp.webp" alt="whatsapplogo" />
</a>
</div> <br></br><br></br>

<center>
<div className="copy">
&copy; {new Date().getFullYear()} Coded Portfolio. All rights reserved.
</div>
</center>
</footer>
   






    </body>
    );
}
export default Portfolio;