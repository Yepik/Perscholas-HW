import './Main.css'
import Bedroom from './Bedroom/Bedroom'
import Bathroom from './Bathroom/Bathroom'
import Livingroom from './Livingroom/Livingroom'
function Main(){
    
    return (
        <div className="Main">
            <Bedroom number={1} />
            <Bedroom number={2} />
            <Bedroom number={3} />
           
            <Livingroom/>
            <Bathroom size={"Full"} name={"Full"}/>
            <Bathroom size={"Half "} name={"Half"}/>
            <div className="Kitchen">
                <div className="Sink"><p className="text">Sink</p></div>
                <div className="Oven"><p className="text">Oven</p></div>
                <div className="Rest"><p className="text">Kitchen</p></div>
                
            </div>
        </div>
    );
}
export default Main;