import Header from "./components/Header/Header";
import Skill from "./components/Skill/Skill";
import Experience from "./components/Experience/Experience";
import "./tailwind.css";

import LaravelLogo from "./assets/images/Logos/laravel.svg";
import ReactLogo from "./assets/images/Logos/react.svg";
import ReduxLogo from "./assets/images/Logos/redux.svg";
import ReduxSagaLogo from "./assets/images/Logos/redux-saga.svg";
import TSLogo from "./assets/images/Logos/typescript.svg";
import Docker from "./assets/images/Logos/docker.svg";
import Github from "./assets/images/Logos/github.svg";
import Linux from "./assets/images/Logos/linux.svg";
import Rabbitmq from "./assets/images/Logos/rabbitmq.svg";
import PHPUnit from "./assets/images/Logos/phpunit.svg";
import Composer from "./assets/images/Logos/composer.svg";
import Apollo from "./assets/images/Logos/apollo.svg";
import GraphQL from "./assets/images/Logos/graphql.svg";
import Redis from "./assets/images/Logos/redis.svg";

const App = () => {
  const skills = [
    {
      logo: LaravelLogo,
      title: "Laravel",
      year: 3,
    },
    {
      logo: ReactLogo,
      title: "React",
      year: 3,
    },
    {
      logo: ReduxLogo,
      title: "Redux",
      year: 3,
    },
    {
      logo: ReduxSagaLogo,
      title: "ReduxSaga",
      year: 1,
    },
    {
      logo: TSLogo,
      title: "TypeScript",
      year: 1,
    },

    {
      logo: Docker,
      title: "Docker",
      year: 1,
    },

    {
      logo: Github,
      title: "Github",
      year: 1,
    },
    {
      logo: Linux,
      title: "Linux",
      year: 6,
    },
    {
      logo: Rabbitmq,
      title: "Rabbitmq",
      year: 1,
    },
    {
      logo: PHPUnit,
      title: "PHPUnit",
      year: 1,
    },
    {
      logo: Composer,
      title: "Composer",
      year: 1,
    },
    {
      logo: Apollo,
      title: "Apollo",
      year: 1,
    },
    {
      logo: GraphQL,
      title: "GraphQL",
      year: 1,
    },
    {
      logo: Redis,
      title: "Redis",
      year: 1,
    },
  ];

  const experiences = [
    {
      company: "Ucyap software",
      level: "Backend developer",
      date: "2019 - 2021",
    },
    {
      company: "Takyk cesme",
      level: "Fullstack developer",
      date: "September 2021",
    },
  ];

  return (
    <>
      <Header />
      <section className="flex flex-col items-center px-2 xl:px-10 font-montserrat-medium">
        <main className="container grid grid-cols-12 gap-5 mx-auto">
          <aside className="col-span-12 lg:col-span-4 bg-gray-100 text-gray-800 p-5 lg:p-12 h-68 xl:h-96 rounded-b-xl">
            <h1 className="text-lg lg:text-2xl mb-2 lg:mb-5 uppercase font-montserrat-bold text-green-500">
              Experience
            </h1>
            {experiences.map((experience) => {
              return (
                <Experience
                  company={experience.company}
                  level={experience.level}
                  date={experience.date}
                />
              );
            })}
          </aside>

          <aside className="col-span-12 lg:col-span-8 px-5 lg:p-12 font-montserrat-medium">
            <h1 className="text-lg lg:text-2xl mb-2 lg:mb-5 uppercase font-montserrat-bold text-green-500">
              About
            </h1>
            <p className="text-sm lg:text-md text-gray-600">
              Имею огромный опыт в веб-разработке по самым разным направлениям:
              сайты, плагины, интернет-магазины, CRM и прочие системы,
              веб-сервисы, игры. В моем портфолио более 30 выполненных работ.
              Профессионально занимаюсь веб-разработкой в течение последних
              десяти лет. Умею писать качественный, масштабируемый код. Уважаю
              ООП и шаблоны проектирования, но понимаю, где и когда уместно их
              применять. Стремлюсь к эффективности, поэтому знаю особенности и
              тонкости языков, которые использую. Активно изучаю новые
              инструменты и подходы, но при разработке всегда исхожу из
              соображений целесообразности. Стараюсь быть максимально
              продуктивным разработчиком. Основные компетенции: clientside
              (front-end), back-end, верстка, интерфейсы. Есть навыки в области
              настройки/администрирования *.NIX систем. Используемые языки,
              фреймворки, инструменты: PHP 7, JavaScript, Python 3, MySQL,
              mongodb, Symfony. Laravel, Yii, react, Vue, angular
            </p>

            <hr className="my-5" />

            <h1 className="text-lg lg:text-2xl mb-2 lg:mb-5 uppercase font-montserrat-bold text-green-500 mt-5 lg:mt-10">
              Languages
            </h1>
            <div className="flex">
              <p className="bg-gray-100 px-3 py-1 rounded-lg mr-3">Turkmen</p>
              <p className="bg-gray-100 px-3 py-1 rounded-lg mr-3">Russian</p>
              <p className="bg-gray-100 px-3 py-1 rounded-lg mr-3">English</p>
            </div>

            <hr className="my-5" />

            <h1 className="text-lg lg:text-2xl mb-2 lg:mb-5 uppercase font-montserrat-bold text-green-500 mt-5 lg:mt-10">
              Skills
            </h1>
            <div className="grid grid-cols-12 gap-3 xl:gap-5">
              {skills.map((skill, index) => {
                return (
                  <Skill
                    key={index}
                    logo={skill.logo}
                    title={skill.title}
                    year={skill.year}
                  />
                );
              })}
            </div>
          </aside>
        </main>

        <footer className="flex items-center p-5">
          <svg
            class="w-6 h-6 m-2 text-red-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            ></path>
          </svg>
          Oguzly team. 2021
        </footer>
      </section>
    </>
  );
};

export default App;
