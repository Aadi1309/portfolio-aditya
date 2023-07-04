import React from 'react'

const About = () => {
  return <div name="about"
  className='w-full h-screen bg-gradient-to-b from from-gray-800 to-black text-white'
  
  >
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full '>
                <div className='pb-8 float-both'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
                </div>
                <p className=' font-extrabold text-xl mt-10'>Hey Fellas,</p>

                <p className='text-xl mt-5'>Welcome to my portfolio website! I'm Aditya Shukla, a passionate and dedicated Computer Science undergraduate. I'm excited to share my projects, skills, and experiences with you. Here's a bit more about me:</p>

                <p className='text-xl mt-5'>    
                I am a student of Bachelors in Technology with Computer Science as my major at Pranveer Singh Institute of Technology, Kanpur. I am dedicated to cultivating a progressive , supportive, and empowering workplace environment. Throughout my academic journey, I've developed a strong foundation in programming, algorithms, data structures, and software development methodologies. I consistently strive to stay updated with the latest advancements in the field to expand my knowledge and skills.
                </p>

                <br/>

                <p className=' font-extrabold text-xl mt-5'>
                Skills:</p>

                <ul className='text-xl flex flex-col'>
                    <li>Programming Languages: I have proficiency in languages such as Python and JavaScript. I'm comfortable working with different frameworks and libraries.</li>
                    <li>Web Development: I have hands-on experience with HTML, CSS, and JavaScript, and I've built responsive and user-friendly websites.</li>
                    <li>Data Structures and Algorithms: I enjoy solving complex problems and have a solid understanding of fundamental data structures and algorithms.</li>
                    <li>Databases: I'm familiar with SQL and have worked with databases to store and retrieve information efficiently.</li>
                    <li>Software Development: I've been involved in various software development projects, collaborating with teams to build robust and scalable applications.</li>

                </ul><br/>

                {/* <p className='font-extrabold text-xl mt-5'>Experience:</p>
                    <ul className='text-xl flex flex-col'>I believe in the value of practical experience, and I've had the opportunity to apply my skills in real-world scenarios. I have worked at various mini-projects , where I contributed to Front-End Developer. These experiences have enhanced my ability to work in a team, communicate effectively, and meet project deadlines.</ul>
                    <br/>  */}
                    <p className='font-extrabold text-xl mt-5'>Interests:</p>
                    <ul className='text-xl flex flex-col'> Beyond coding, I have a keen interest in exploring emerging technologies, attending tech conferences, and participating in hackathons. I'm passionate about continuous learning and enjoy tackling new challenges that push me to grow both personally and professionally.
                    I'm excited to connect with industry professionals, collaborate on exciting projects, and contribute to the ever-evolving world of technology. Feel free to explore my portfolio and reach out to me using the provided contact information. Let's create something amazing together!
                    Thank you for visiting!</ul>

                    
                    <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/>    
                    
                    
            </div>

  </div>
}

export default About


