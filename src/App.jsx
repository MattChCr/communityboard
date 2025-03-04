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
import TenOne from './images/TenOne.jpg'
import Coffee from './images/Coffeecups.png'


const App = () => {

  return (
    <div className="App">
      <body>
        <img src={Coffee}></img>
        <h1> Nearby Cafes!</h1>
        <div className="cardDeck">
          <div className="cardRow"> 
            <Card image={Tatte} name='Tatte' style='Coffee Shop' link='https://tattebakery.com/'/>
            <Card image={TeaDo} name='Tea-Do' style='Boba Shop' link='https://tea-do-neu-fenway.square.site/'/> 
            <Card image={Dunkin} name='Dunkin' style='Coffee Shop' link='https://www.dunkindonuts.com/'/> 
            <Card image={Starbucks} name='Starbucks' style='Coffee Shop' link='https://www.starbucks.com/'/> 
          </div>
          <div className="cardRow">
            <Card image={CafeMaiko} name='Matcha Cafe Maiko' style='Matcha Shop' link='https://matchamaikobos.com/'/>
            <Card image={KungFuTea} name='Kung Fu Tea' style='Boba Shop' link='https://www.kungfutea.com/'/> 
            <Card image={GreenHaus} name='Green Haus' style='Coffee Shop' link='https://www.greenhaus.cafe/'/>
            <Card image={Pressed} name='Pressed Cafe' style='Coffee Shop' link='https://www.pressedcafe.com/'/>  
          </div>
          <div className="cardRow">
            <Card image={FarmersHorse} name='Farmers Horse' style='Coffee Shop' link='https://order.toasttab.com/online/farmershorsecoffee'/>
            <Card image={GongCha} name='Gong Cha' style='Boba Shop' link='https://gongchausa.com/'/> 
            <Card image={PhinCoffee} name='Phin Coffee' style='Coffee Shop' link='https://www.phincoffeehouse.com/'/> 
            <Card image={TenOne} name='Ten One Tea House' style='Boba Shop' link='https://www.tenoneteahouse.com/'/> 
          </div>
        </div>
      </body>
      
      
      

    </div>
      
  )
}

export default App
