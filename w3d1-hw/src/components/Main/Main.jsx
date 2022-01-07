import './Main.css'
function Main(){
    
    return (
        <div className="Main">
            <div className="Bedroom1"><p className="text">Bedroom 1</p></div>
            <div className="Bedroom2"><p className="text">Bedroom 2</p></div>
            <div className="Bedroom3"><p className="text">Bedroom 3</p></div>
            <div className="LivingRoom"><p className="text">Living Room</p></div>
            <div className="FullBathroom"><p className="text">Full Bath</p></div>
            <div className="HalfBathroom"><p className="text">Half Bath</p></div>
            <div className="Kitchen">
                <div className="Sink"><p className="text">Sink</p></div>
                <div className="Oven"><p className="text">Oven</p></div>
                <div className="Rest"><p className="text">Kitchen</p></div>
                
            </div>
        </div>
    );
}
export default Main;