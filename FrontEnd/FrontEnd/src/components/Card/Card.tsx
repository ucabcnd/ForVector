import { IonCard, IonCardContent, IonCardHeader, IonCardTitle} from '@ionic/react';
import './Card.css';
import axios from "axios";

interface Data{
    type: string,
    title: string,
    position:number
}

interface ContainerProps {
    data: Data;
    index: number;
}

function getgif(type: string){
    if (type.includes('bank-draft'))
    {
        return 'https://media.giphy.com/media/cPxRDvlSj9QKA/giphy.gif'
    }
    else if (type.includes('bill-of-lading'))
    {
        return 'https://media.giphy.com/media/l0ExdMHUDKteztyfe/giphy.gif'
    }
    else if (type.includes('invoice'))
    {
        return 'https://media.giphy.com/media/E0cyxhawhe9dm/giphy.gif'
    }
}

async function get_gif(url:string) {
  try {
    let response = await axios.get(url);
    return response.data;
  } catch (e) {
    console.log("Error getting slides: ", e);
    return [];
  }
}


const Card: React.FC<ContainerProps> = (props) => {
  return (
          <IonCard className='Card'>
            <IonCardHeader>
              <IonCardTitle>
                {props.data.title}
              </IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              <img src={getgif(props.data.type)} className='ImageGIF'/>
            </IonCardContent>
          </IonCard>
  )};

export default Card;
