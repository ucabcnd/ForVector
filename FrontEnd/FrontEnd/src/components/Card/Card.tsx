import { IonCard, IonCardContent, IonCardHeader, IonCardTitle} from '@ionic/react';
import React, { useState, useEffect } from "react";
import './Card.css';
import axios from "axios";
import { waitFor } from '@testing-library/dom';

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
      return 'https://media.giphy.com/media/LHZyixOnHwDDy/giphy.gif'
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
  const [loaded, setLoaded] = useState<boolean>(false);
  const [show, setShow] = useState<boolean>(false)

  useEffect(
    () => {
      const timeout = setTimeout(() => {setShow(true)}, 5000)
      return () => clearTimeout(timeout)
    }, [show])

  return (
          <IonCard className='Card'>
            <IonCardHeader>
              <IonCardTitle>
                {props.data.title}
              </IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              <img src={show&&loaded? getgif(props.data.type): '/thumbnails/loading.gif'} className='ImageGIF' onLoad={()=>setLoaded(true)}/>
            </IonCardContent>
          </IonCard>
  )};

export default Card;
