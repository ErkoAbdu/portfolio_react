import './Body.css'
import * as FaIcon from 'react-icons/fa';

export default function Body() {
  return (
    <body>
      <div className='bodyContent'>
        <h1 className='titleBody'>
          Hi, I'm <span className='name'>Erko Abdurahman</span>
        </h1>
        <h2 className='subTitle'>
          Software Developer
        </h2>
        <p className='paragraph'>
          Im a software developer with expereience in ASP.NET, Node.js, Express.js and PHP. I also do front end work with HTML, CSS, Javascript, and React. I mainly specialize in backend work as I find it very interesting the way APIs and requests and responses work! I completed my undergrad at University of Toronto in political science and history and later pivoted to web development during my postgrad at Humber College. In my free time I love watching MotoGP!
        </p>
        <div className='imgLinks'>
          <a href='https://github.com/ErkoAbdu'><FaIcon.FaGithub/></a>
          <a href='https://www.linkedin.com/in/erko-abdurahman/'><FaIcon.FaLinkedin/></a>
        </div>
        <div className='titleProjects'>
          <h2 className="projectHeading">Projects</h2>
        </div>
      </div>
    </body>
  )
}