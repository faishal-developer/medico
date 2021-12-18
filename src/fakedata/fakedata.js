import eye from '../images/services/eye.jpg'
import dental from '../images/services/dental.jpg'
import cardiology from '../images/services/cardiology.png'
import bodyChekup from '../images/services/fullbodyCheckup.jpg'
import laboratory from '../images/services/Laboratory.jpg'
import vaccination from '../images/services/vaccination.jpg'
import { faChild, faEye, faHeartbeat, faMicroscope, faSyringe, faTeeth } from '@fortawesome/free-solid-svg-icons'
let fakeData=[
    {
        name:'Eye Care',
        description:'Your eyes are an important part of your health. Most people rely on their eyes to see and make sense of the world around them. But some eye diseases can lead to vision loss, so it is important to identify and treat eye diseases as early as possible. You should get your eyes checked as often as your health care provider recommends it, or if you have any new vision problems. And just as it is important to keep your body healthy, you also need to keep your eyes healthy.',
        img:eye,
        icon:faEye,
        id:1
    },
    {
        name:'Dental Care',
        description:'The purpose of this interactive course is to provide dental practitioners with strategies to effectively educate patients about oral hygiene during the COVID-19 pandemic including the use of demonstrating a rechargeable electric toothbrush.',
        img:dental,
        icon:faTeeth,
        id:2
    },
    {
        name:'Cardiac',
        description:'The purpose of this interactive course is to provide dental practitioners with strategies to effectively educate patients about oral hygiene during the COVID-19 pandemic including the use of demonstrating a rechargeable electric toothbrush.',
        img:cardiology,
        icon:faHeartbeat,
        id:3
    },
    {
        name:'Full body checkup',
        description:'The purpose of this interactive course is to provide dental practitioners with strategies to effectively educate patients about oral hygiene during the COVID-19 pandemic including the use of demonstrating a rechargeable electric toothbrush.',
        img:bodyChekup,
        icon:faChild,
        id:4
    },
    {
        name:'Laboratory',
        description:'A medical laboratory scientist (MLS) or clinical laboratory scientist (CLS) or medical technologist (MT) performs diagnostic testing of blood and body fluids in clinical laboratories. The scope of a medical laboratory scientists work begins with the receipt of patient or client specimens and terminates with the delivery of test results to physicians and other healthcare providers. The utility of clinical diagnostic testing relies squarely on the validity of test methodology.',
        img:laboratory,
        icon:faMicroscope,
        id:5
    },
    {
        name:'Vaccination',
        description:'Our vaccination dataset uses the most recent official numbers from governments and health ministries worldwide. Population estimates for per-capita metrics are based on the United Nations World Population Prospects. Income groups are based on the World Bank classification. A full list of our country-specific sources is available at the bottom of this page, and we also answer frequently-asked questions there.',
        img:vaccination,
        icon:faSyringe,
        id:6
    }
]

export default fakeData