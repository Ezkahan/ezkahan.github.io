import Header from './components/Header/Header';
import './main.css';

function App() {
  return (
    <>
      <Header />
      <section className="flex px-10 font-montserrat-medium">
        <main className="container grid grid-cols-12 gap-5 mx-auto">
          <aside className="col-span-12 lg:col-span-4 bg-green text-gray-100 p-5 lg:p-16">
            <h1 className="text-3xl mb-5 uppercase text-white font-montserrat-bold"> Education </h1>
            <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima earum atque, non, assumenda hic eius iure perspiciatis labore ea dolore maiores magni autem dolorum ex voluptate? At dolores officiis adipisci? </p>
          </aside>

          <aside className="col-span-12 lg:col-span-8 text-sm p-5 lg:p-16">
            <h1 className="text-3xl mb-5 uppercase font-montserrat-bold"> Experience </h1>
            <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima earum atque, non, assumenda hic eius iure perspiciatis labore ea dolore maiores magni autem dolorum ex voluptate? At dolores officiis adipisci? </p>
            <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima earum atque, non, assumenda hic eius iure perspiciatis labore ea dolore maiores magni autem dolorum ex voluptate? At dolores officiis adipisci? </p>
            <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima earum atque, non, assumenda hic eius iure perspiciatis labore ea dolore maiores magni autem dolorum ex voluptate? At dolores officiis adipisci? </p>
          
            <h1 className="text-3xl mb-5 uppercase font-montserrat-bold mt-10"> Skills </h1>
            <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima earum atque, non, assumenda hic eius iure perspiciatis labore ea dolore maiores magni autem dolorum ex voluptate? At dolores officiis adipisci? </p>
            <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima earum atque, non, assumenda hic eius iure perspiciatis labore ea dolore maiores magni autem dolorum ex voluptate? At dolores officiis adipisci? </p>
            <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima earum atque, non, assumenda hic eius iure perspiciatis labore ea dolore maiores magni autem dolorum ex voluptate? At dolores officiis adipisci? </p>
          </aside>
        </main>
      </section>
    </>
  );
}

export default App;
