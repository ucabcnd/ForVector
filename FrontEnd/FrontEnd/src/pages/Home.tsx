import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Home.css';
import SampleData from '../sampleinput.json';
import { ItemReorderEventDetail } from '@ionic/core';
import {DragDropContext,Droppable,Draggable, DropResult} from 'react-beautiful-dnd';
import { useState } from 'react';
import Card from '../components/Card/Card';

function doReorder(event: CustomEvent<ItemReorderEventDetail>) {
  // The `from` and `to` properties contain the index of the item
  // when the drag started and ended, respectively
  console.log('Dragged from index', event.detail.from, 'to', event.detail.to);

  // Finish the reorder and position the item in the DOM based on
  // where the gesture ended. This method can also be called directly
  // by the reorder group
  event.detail.complete();
}

const Home: React.FC = () => {
  const [cards,updateCards] = useState(SampleData);

  function handleOnDragEnd(result: DropResult){
    if (!result.destination) return;
    console.log(result);
    const items = Array.from(cards);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination!.index, 0,reorderedItem);
    updateCards(items);
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Cat GIFS</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <DragDropContext onDragEnd={handleOnDragEnd}>
          <Droppable droppableId="cards" direction='horizontal'>
            {(provided)=>(
              <ul {...provided.droppableProps} ref={provided.innerRef}>
                {cards.map((info, i) => (
                <Draggable key={info.title} draggableId={info.title} index={i}>
                    {(provided)=>(
                      <li {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef} className="CardList"><Card data={info} index={i} /></li>
                    )} 
                </Draggable>
                ))}
                {provided.placeholder}
              </ul>
            )}
          </Droppable>
        </DragDropContext>
      </IonContent>
    </IonPage>
  );
};

export default Home;
