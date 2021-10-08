import Header from './components/Header/Header'
import './main.css'

import LaravelLogo from './assets/images/Logos/laravel.svg'
import ReactLogo from './assets/images/Logos/react.svg'
import ReduxLogo from './assets/images/Logos/redux.svg'
import ReduxSagaLogo from './assets/images/Logos/redux-saga.svg'
import VueLogo from './assets/images/Logos/vue.svg'
import TSLogo from './assets/images/Logos/typescript.svg'

const App = () => {
  return (
    <>
      <Header />
      <section className="flex px-10 font-montserrat-medium">
        <main className="container grid grid-cols-12 gap-5 mx-auto">
          <aside className="col-span-12 lg:col-span-4 bg-gray-100 text-gray-800 p-5 lg:p-16">
            <h1 className="text-3xl mb-5 uppercase font-montserrat-bold text-green-500"> Education </h1>
            <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima earum atque, non, assumenda hic eius iure perspiciatis labore ea dolore maiores magni autem dolorum ex voluptate? At dolores officiis adipisci? </p>

            <h1 className="text-3xl mb-5 uppercase font-montserrat-bold text-green-500 mt-20"> Hobbies </h1>
            <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima earum atque, non, assumenda hic eius iure perspiciatis labore ea dolore maiores magni autem dolorum ex voluptate? At dolores officiis adipisci? </p>
          </aside>

          <aside className="col-span-12 lg:col-span-8 text-sm p-5 lg:p-16 font-montserrat-medium">
            <h1 className="text-3xl mb-5 uppercase font-montserrat-bold text-green-500"> Experience </h1>
            <div className="border-l-4 border-gray-800 mb-7 px-5">
              <small className="bg-gray-900 text-white px-2 py-1"> 2019 - 2020 </small>
              <h3 className="font-montserrat-bold text-xl text-gray-700 mt-1"> Junior developer </h3>
              <h4 className="text-md text-gray-500 mt-1"> Tertipli hyzmat </h4>
            </div>

            <div className="border-l-4 border-gray-800 mb-7 px-5">
              <small className="bg-gray-900 text-white px-2 py-1"> 2020 - 2021 </small>
              <h3 className="font-montserrat-bold text-xl text-gray-700 mt-1"> Middle developer </h3>
              <h4 className="text-md text-gray-500 mt-1"> Ucyap software </h4>
            </div>

            <div className="border-l-4 border-gray-800 mb-7 px-5">
              <small className="bg-gray-900 text-white px-2 py-1"> 2021 </small>
              <h3 className="font-montserrat-bold text-xl text-gray-700 mt-1"> Middle developer </h3>
              <h4 className="text-md text-gray-500 mt-1"> TurkmenPortal </h4>
            </div>

            <h1 className="text-3xl mb-5 uppercase font-montserrat-bold text-green-500 mt-10"> Skills </h1>
            <div className="grid grid-cols-12 gap-5">
              <div className="col-span-6 lg:col-span-3 flex flex-col items-center justify-center w-full border px-5 py-3">
                <img src={LaravelLogo} className="h-12" alt="Laravel" />
                <p className="font-montserrat-bold mt-3"> Laravel </p>
              </div>

              <div className="col-span-6 lg:col-span-3 flex flex-col items-center justify-center w-full border px-5 py-3">
                <img src={ReactLogo} className="h-12" alt="React" />
                <p className="font-montserrat-bold mt-3"> React </p>
              </div>

              <div className="col-span-6 lg:col-span-3 flex flex-col items-center justify-center w-full border px-5 py-3">
                <img src={ReduxLogo} className="h-12" alt="Redux" />
                <p className="font-montserrat-bold mt-3"> Redux </p>
              </div>

              <div className="col-span-6 lg:col-span-3 flex flex-col items-center justify-center w-full border px-5 py-3">
                <img src={ReduxSagaLogo} className="h-12" alt="Redux-Saga" />
                <p className="font-montserrat-bold mt-3"> Redux-Saga </p>
              </div>

              <div className="col-span-6 lg:col-span-3 flex flex-col items-center justify-center w-full border px-5 py-3">
                <img src={VueLogo} className="h-12" alt="Vue" />
                <p className="font-montserrat-bold mt-3"> Vue </p>
              </div>

              <div className="col-span-6 lg:col-span-3 flex flex-col items-center justify-center w-full border px-5 py-3">
                <img src={TSLogo} className="h-12" alt="TypeScript" />
                <p className="font-montserrat-bold mt-3"> TypeScript </p>
              </div>
            </div>

          </aside>
        </main>
      </section>
    </>
  );
}

export default App;
