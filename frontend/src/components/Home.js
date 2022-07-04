import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll';
import { Link } from 'react-router-dom';
import Transitions from './Transition';

export const Home = () => {
  return (
    <>
    <Transitions>
    <div className='container-fluid mt-5 ' style={{fontFamily:'Yanone Kaffeesatz, sans-serif',color:'#646262',width:'100%',aspectRatio:'100/29',textArea:'100%',textAlign:'justify'}}>
    <ScrollAnimation animateIn='fadeIn' >
     <h3 style={{fontSize:'calc(10rem )',marginTop:'15%',paddingBottom:'80%',textAlign:'center'}}>Welcome to Notesapp!</h3> <br />
     </ScrollAnimation>
     <ScrollAnimation animateIn='fadeIn'  >
     <p className='para mt-5'style={{fontSize:'calc(1em + 5vw)'}}>“Note taking apps - why do you even need them? Can't you just write it down using a pen and paper?” </p> <br /> <br />
     </ScrollAnimation>
     <ScrollAnimation animateIn='fadeIn' >
     <p  style={{fontSize:'calc(1em + 5vw)'}}>First of all, you should know that taking notes isn't just about writing down everything that you think or hear. Taking notes is about staying focused, being interactive, and recalling information that otherwise is lost. </p> 
    </ScrollAnimation>
    <ScrollAnimation animateIn='fadeIn'  >
<p  style={{fontSize:'calc(1em + 5vw)'}}> Typically when we get an idea or we hear one, we tend to look for a piece of paper to jot it down. However, the times are changing. We now live in an era of information overload. And, sadly, it has made it quite easy for us to lose information on a daily basis. As a result, it becomes even easier to forget to check out the information or share it with your team. Or worse, lose the information that you jotted down. This is where Notesapp come in handy. 
The good thing is that we have a dizzying array of tools and apps for creating, organizing, saving, and sharing notes—at home, at work, and even on the go.</p> <br /> <br />
</ScrollAnimation>
<Link to="/login" style={{textAlign:'center',textDecoration:'none',fontFamily:'Lobster, cursive'}}>
<h3  style={{fontSize:'calc(1rem + 4vw)'}} className='text-primary'>Log in now to find out!</h3>
</Link>

</div>
</Transitions>
    </>
   
  )
}
