import { IonCard, IonCardContent, IonCardHeader, IonCardTitle,IonAlert} from '@ionic/react';
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


function getgif(type: string):string{ 
  
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
    else{
      return '';
    }
}


const Card: React.FC<ContainerProps> = (props) => {
  const [loaded, setLoaded] = useState<boolean>(false);
  const [show, setShow] = useState<boolean>(false);
  const [showExpanded, setShowExpanded] = useState<boolean>(false);
  const [gifURL,setGifURL] = useState<string>('');

  function image_loaded(type:string){
    setLoaded(true);
    setGifURL(getgif(type));
  }

  useEffect(
    () => {
      const timeout = setTimeout(() => {setShow(true)}, 2000)
      return () => clearTimeout(timeout)
    }, [show])

  return (
          <IonCard className='Card' onClick={() => setShowExpanded(true)}>
            <IonCardHeader>
              <IonCardTitle>
                {props.data.title}
              </IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              <img src={show&&loaded? getgif(props.data.type): '/thumbnails/loading.gif'} className='ImageGIF' onLoad={()=>image_loaded(props.data.type)}/>
            </IonCardContent>
            <IonAlert
              isOpen={showExpanded}
              onDidDismiss={() => setShowExpanded(false)}
              cssClass='AlertClass'
              header={props.data.title}
              message={'<img src=' + gifURL + ' style=\'size:200%;\' />'}
            />
          </IonCard>
  )};

export default Card;
