import Kitchen from "./Kitchen"
import Bedroom from "./Bedroom"
import Bath from "./Bath"
import LivingRoom from "./LivingRoom"
import Oven from "./Oven"
import Sink from "./Sink"

function FloorPlan(props) {
return (
  <div>
  <Bath size = "Half" />
  <Bedroom bedNum={1} />
  <Bedroom bedNum={2} />
  <Kitchen/>
  <LivingRoom/>
  <Bath size = "Full"/>
  <Bedroom bedNum={3} />
  
</div>
)
}




export default FloorPlan 