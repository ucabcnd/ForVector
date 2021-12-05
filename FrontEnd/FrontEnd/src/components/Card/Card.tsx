import { IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonAlert, IonItem, useIonViewWillEnter} from '@ionic/react';
import React, { useState, useEffect } from "react";
import axios from "axios";
import './Card.css';
import { square } from 'ionicons/icons';

interface Data {
  type: string,
  title: string,
  position: number
}

interface ContainerProps {
  data: Data;
  index: number;
}


function getgif(type: string): string {

  if (type.includes('bank-draft')) {
    return 'https://media.giphy.com/media/cPxRDvlSj9QKA/giphy.gif'
  }
  else if (type.includes('bill-of-lading')) {
    return 'https://media.giphy.com/media/l0ExdMHUDKteztyfe/giphy.gif'
  }
  else if (type.includes('invoice')) {
    return 'https://media.giphy.com/media/LHZyixOnHwDDy/giphy.gif'
  }
  else {
    return '';
  }
}

async function get_gif(type: string) {
  try {
    const url = "http://127.0.0.1:8000/get_GIF/" + type;
    let response = await axios.get(url);
    console.log(response);
    return response.data;
  } catch (e) {
    console.log("Error getting GIF URL from database: ", e);
    return [];
  }
}

async function load_url_gif(type: string,seturl:React.Dispatch<React.SetStateAction<string>>){
  let url = await get_gif(type);
  seturl(url);
}


const Card: React.FC<ContainerProps> = (props) => {
  const [showExpanded, setShowExpanded] = useState<boolean>(false);
  const [gifURL, setGifURL] = useState<string>('/thumbnails/loading.gif');

  useEffect(
    ()=>{
      console.log("card");
      load_url_gif(props.data.type,setGifURL);
    },[]);

  useIonViewWillEnter(
    ()=>{
      console.log("card");
      load_url_gif(props.data.type,setGifURL);
    }
  );

  return (
    <IonItem className="Item">
    <IonCard className='Card' onClick={() => setShowExpanded(true)}>
        <IonCardHeader>
          <IonCardTitle>
            {props.data.title + " " + props.data.position}
          </IonCardTitle>
        </IonCardHeader>
        <IonCardContent>
          <img src={gifURL} className='ImageGIF'/>
        </IonCardContent>
        <IonAlert
          isOpen={showExpanded}
          onDidDismiss={() => setShowExpanded(false)}
          cssClass='AlertClass'
          header={props.data.title}
          message={'<img src=' + gifURL + ' style=\'size:200%;\' />'}
        />
      </IonCard>
    </IonItem>
  )
};

export default Card;
