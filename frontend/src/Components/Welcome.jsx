import React from 'react'
import './Welcom.css';

const Welcome = () => {
  return (
    <>
    <div>
        <div class='nav'>
            <img src='rent_nest_logo.jpg' alt='logo'></img>
            
                 <a href='#Home'>Home</a>
                <a href='#OurServices'>Our Services</a>
                 <a href='#signup'>Signup</a>
                 <a href='#signin'>Signin</a>
                 <a href='#OurTeam'>Our Team</a>
                 <a href='#feedback'>Feedback</a>
        </div>
        <div class="welcome_body">
            {/* Home section */}
            <section id='Home'>
                <h1>This is Home</h1>
            </section>

            {/* services Section */}
            <section id='OurServices'>
                <h1>This is Our Services</h1>
            </section>

            

            {/* signup section */}
            <section id="signup">
                <h1>This is signup</h1>

            </section>

            {/* signin section */}
            <section id="signin">
                <h1>This is signin</h1>

            </section>

            {/* our team section */}
            <section id="OurTeam">
                <h1>This is Our team</h1>
            </section>

            {/* feedback */}
            <section id="feedback">
                <h1>This is feedback</h1>

            </section>
        </div>
    </div>
    </>
  )
}

export default Welcome