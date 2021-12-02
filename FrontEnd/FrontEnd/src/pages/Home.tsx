import { IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonContent, IonHeader, IonPage, IonReorderGroup, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';
import SampleData from '../sampleinput.json';
import { Console } from 'console';
import Card from '../components/Card/Card';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Cat GIFS</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonReorderGroup>
          {SampleData.map((info, i) => (
            <Card key={i} data={info} index={i} />
          ))}
        </IonReorderGroup>
      </IonContent>
    </IonPage>
  );
};

export default Home;
