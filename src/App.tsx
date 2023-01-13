import { FC, useState } from 'react';
import './App.css';
import { Modal } from './Components/UI';


const App: FC = () => {
  const [error, setError] = useState<any>(null);
  const onActionHandler = () => {
    setError(null);
  };

  return (
    <div className="App">
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi odio,
        laboriosam quaerat velit nihil saepe natus dolores modi quia, fugit cum,
        enim molestias error id! Veniam mollitia tempore dignissimos velit cupiditate
        omnis excepturi doloribus, ducimus quis sapiente totam voluptas deleniti nesciunt quasi,
        nulla veritatis assumenda natus! In commodi unde eaque doloremque voluptatum.
        Necessitatibus, vero. Praesentium expedita quis quisquam magnam, eligendi unde,
        possimus ullam cupiditate voluptatem delectus asperiores minima accusamus vitae,
        id deleniti in porro reprehenderit harum similique! Rerum, labore reiciendis,
        quia maxime dolor cupiditate, eius autem repellat impedit ipsa dicta iusto
        eligendi quos inventore harum. Maxime deserunt corrupti atque voluptatibus,
        incidunt soluta! Debitis quidem quod nihil nesciunt dolore ipsam numquam laborum
        ipsum, cupiditate perspiciatis quae consequatur harum nisi rerum eius minima
        dolorum delectus beatae at et ad cum voluptatibus fugit? Incidunt commodi soluta
        esse atque suscipit eaque, exercitationem sapiente. Modi praesentium voluptatibus,
        pariatur commodi, molestiae ullam fuga nam quasi cupiditate ratione, inventore quia!
        Aspernatur totam placeat, pariatur sequi a consequatur harum earum nisi eligendi
        possimus cum recusandae facere quod obcaecati? Iste, reiciendis quia? Laudantium nulla
        aspernatur obcaecati, aliquam labore doloremque neque animi modi iure sit porro, aliquid
        repellendus odit dolore quam id. Tempore blanditiis nemo dolorem illo sunt dolor
        voluptatibus ipsum, similique libero! Fugit, voluptate. Delectus dicta repudiandae,
        facilis explicabo praesentium quisquam tempora pariatur laboriosam doloribus eos?
        Doloribus eligendi non iusto, labore at pariatur odio optio sapiente similique ab?
        Quasi ad vero totam modi eveniet beatae optio ratione eligendi et itaque perferendis
        ullam quo quis commodi, nulla maiores culpa nam voluptatibus quam asperiores atque,
        excepturi possimus earum at. Distinctio, accusamus repudiandae? Maxime accusamus
        numquam mollitia placeat ullam? Quas assumenda labore id iusto recusandae asperiores
        accusamus quasi voluptatem. Aperiam consequuntur, blanditiis fugiat eaque maiores
        harum ipsam in dolorem velit inventore adipisci, eum soluta, voluptatibus architecto?
        Eum pariatur quis omnis vel soluta.
      </p>

      <button onClick={_ => {
        setError({});
      }}>Open Modal</button>

      {error &&
        <Modal
          title='Warning'
          body={<>This is warning</>}
          onAction={onActionHandler}
        />}
    </div>
  )
}

export default App;
