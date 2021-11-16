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


// import React from 'react';
// import Kitchen from './Kitchen';
// import LivingRoom from './LivingRoom';
// import BedRoom from './Bedroom';
// import Bath from './Bath';

// function FloorPlan(props) {
//     return (
//         <div class = 'FloorPlan'>
//             <section class= 'bed1'>
//                 <BedRoom bedNum='1'/>
//             </section>

//             <Kitchen/>

//             <section class= 'bath1'>
//                 <Bath size='Full'/>
//             </section>

//             <LivingRoom/>

//             <section class= 'bed2'>
//                 <BedRoom bedNum='2'/>
//             </section>

//             <section class= 'bath2'>
//                 <Bath size='Half'/>
//             </section>

//             <section class= 'bed3'>
//                 <BedRoom bedNum='3'/>
//             </section>
//         </div>
//     );
// }


// export default FloorPlan;