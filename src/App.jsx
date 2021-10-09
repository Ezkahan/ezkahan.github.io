import Header from './components/Header/Header'
import './main.css'

import LaravelLogo from './assets/images/Logos/laravel.svg'
import ReactLogo from './assets/images/Logos/react.svg'
import ReduxLogo from './assets/images/Logos/redux.svg'
import ReduxSagaLogo from './assets/images/Logos/redux-saga.svg'
import VueLogo from './assets/images/Logos/vue.svg'
import TSLogo from './assets/images/Logos/typescript.svg'
import Skill from './components/Skill/Skill'
import Experience from './components/Experience/Experience'

const App = () => {
  const skills = [
    {
      logo: LaravelLogo,
      title: 'Laravel'
    },
    {
      logo: ReactLogo,
      title: 'React'
    },
    {
      logo: ReduxLogo,
      title: 'Redux'
    },
    {
      logo: ReduxSagaLogo,
      title: 'ReduxSaga'
    },
    {
      logo: VueLogo,
      title: 'Vue'
    },
    {
      logo: TSLogo,
      title: 'TypeScript'
    },
  ]

  const experiences = [
    {
      company: 'Tertipli hyzmat',
      level: 'Junior developer',
      date: '2019 - 2020'
    },
    {
      company: 'Ucyap software',
      level: 'Middle developer',
      date: '2020 - 2021'
    },
    {
      company: 'Tasin cesme',
      level: 'Middle developer',
      date: '2021'
    },
  ]

  return (
    <>
      <Header />
      <section className="flex px-10 font-montserrat-medium">
        <main className="container grid grid-cols-12 gap-5 mx-auto">
          <aside className="col-span-12 lg:col-span-4 bg-gray-100 text-gray-800 p-5 lg:p-16">
          <h1 className="text-lg lg:text-2xl mb-2 lg:mb-5 uppercase font-montserrat-bold text-green-500"> Experience </h1>
            {
              experiences.map(experience => {
                return (
                  <Experience
                    company={experience.company}
                    level={experience.level}
                    date={experience.date}
                  />
                )
              })
            }
          </aside>

          <aside className="col-span-12 lg:col-span-8 px-5 lg:p-16 font-montserrat-medium">
              
            <h1 className="text-lg lg:text-2xl mb-2 lg:mb-5 uppercase font-montserrat-bold text-green-500"> Education </h1>
            <p className="text-sm lg:text-md text-gray-600"> Lorem ipsum, dolor sit amet consectetur adipisicing elit. At dolores officiis adipisci? </p>

            <h1 className="text-lg lg:text-2xl mb-2 lg:mb-5 uppercase font-montserrat-bold text-green-500 mt-5 lg:mt-10"> Hobbies </h1>
            <p className="text-sm lg:text-md text-gray-600"> Lorem ipsum, dolor sit amet consectetur adipisicing elit. At dolores officiis adipisci? </p>


            <h1 className="text-lg lg:text-2xl mb-2 lg:mb-5 uppercase font-montserrat-bold text-green-500 mt-5 lg:mt-10"> Skills </h1>
            <div className="grid grid-cols-12 gap-5 mb-7">
              {
                skills.map((skill, index) => {
                  return (
                    <Skill key={index} logo={skill.logo} title={skill.title} />
                  )
                })
              }
            </div>

          </aside>
        </main>
      </section>
    </>
  );
}

export default App;
