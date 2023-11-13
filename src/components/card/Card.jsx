import './Card.css'
import picture from '../../assets/images/img-resized.webp'


export default function Card() {
  return (
    <div className="container-card">
      <img src={picture} alt="picture" />
    </div>
  )
}