import React from 'react'
import './Welcom.css';

const Welcome = () => {
  return (
    <>
    <div>
        <div class='nav'>
            <ul>
                 <li><a href='#Home'>Home</a></li>
                <li><a href='#OurServices'>Our Services</a></li>
                 <li><a href='#signup'>Signup</a></li>
                 <li><a href='#signin'>Signin</a></li>
                 <li><a href='#OurTeam'>Our Team</a></li>
                 <li><a href='#feedback'>Feedback</a></li>
            </ul>
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