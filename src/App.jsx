import './App.css'
import Card from './components/Card'
import Tatte from './images/Tatte.jpg'
import TeaDo from './images/TeaDo.jpg'
import Dunkin from './images/Dunkin.jpg'
import Starbucks from './images/Starbucks.jpg'
import CafeMaiko from './images/CafeMaiko.jpg'
import KungFuTea from './images/KungFuTea.jpg'
import GreenHaus from './images/Greenhaus.jpeg'
import Pressed from './images/Pressed.jpeg'
import FarmersHorse from './images/FarmersHorse.jpg'
import GongCha from './images/GongCha.jpg'
import PhinCoffee from './images/PhinCoffee.jpg'
import Crossing from './images/Crossing.jpg'



const App = () => {

  return (
    <div className="App">
      <body>
        <h1> Nearby Cafes!</h1>
        <div className="cardDeck">
          <div className="cardRow">
            <Card image={Tatte} name='Tatte' style='Coffee Shop' link='https://www.kungfutea.com/'/>
            <Card image={TeaDo} name='Tea-Do' style='Boba Shop'/> 
            <Card image={Dunkin} name='Dunkin' style='Coffee Shop'/> 
            <Card image={Starbucks} name='Starbucks' style='Coffee Shop'/> 
          </div>
          <div className="cardRow">
            <Card image={CafeMaiko} name='Cafe Maiko' style='Matcha Shop'/>
            <Card image={KungFuTea} name='Kung Fu Tea' style='Boba Shop'/> 
            <Card image={GreenHaus} name='Green Haus' style='Coffee Shop'/>
            <Card image={Pressed} name='Pressed Cafe' style='Coffee Shop'/>  
          </div>
          <div className="cardRow">
            <Card image={FarmersHorse} name='Farmers Horse' style='Coffee Shop'/>
            <Card image={GongCha} name='Gong Cha' style='Boba Shop'/> 
            <Card image={PhinCoffee} name='Phin Coffee' style='Coffee Shop'/> 
            <Card image={Crossing} name='Cafe Crossing' style='Coffee Shop'/> 
          </div>
        </div>
      </body>
      
      
      

    </div>
      
  )
}

export default App
