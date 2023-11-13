import './Info.css'
import Network from '../Network/Network.jsx'
import { BsFillTelephoneFill } from "react-icons/bs"
import { SiGmail } from "react-icons/si"


export default function Info() {
  return (
    <div className="container-info">
      <h1>Yannick Yanga</h1>
      <p><strong>Junior developer</strong> in training at BeCode.</p>
      <p>HTML/CSS | JavaScript | React | Bootstrap | PHP | MySQL | Git/Github</p>
      <div className="about">
        <p>
          In search of expertise in the world of web development, I am currently 
          undergoing professional training as a junior web developer. My passion 
          for programming and digital creation encourages me to explore new frontiers 
          in this constantly evolving world. I am motivated to acquire the skills 
          needed to take my first steps as a web developer.
        </p>
      </div>
      <div className="contact">
        <p><BsFillTelephoneFill /> &nbsp;0465 62 96 52</p>
        <p><SiGmail /> &nbsp;cleps2012@gmail.com</p>
      </div>
      <Network />
    </div>
  )
}