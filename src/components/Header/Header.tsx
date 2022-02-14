import AEDEV from "../../assets/images/AE_dev.jpg";

const Header: React.FC = () => {
  return (
    <header className="bg-gray-900 text-gray-100 px-10 pt-5 pb-10 rounded-xl">
      <section className="flex flex-col justify-center lg:justify-start lg:items-start">
        <div className="flex items-center">
          <img className="h-20 rounded-lg mr-3" src={AEDEV} alt="Ezkahan" />
          <div className="flex flex-col">
            <h1 className="font-montserrat-bold text-2xl"> Aymedow Eziz </h1>
            <h3 className="font-montserrat-bold text-md text-gray-300">
              Fullstack developer
            </h3>
          </div>
        </div>

        <main className="flex flex-col">
          <aside>
            <div className="font-montserrat-medium text-xs lg:text-sm flex justify-between mt-10">
              <div>
                <p> Phone: </p>
                <small className="text-gray-400"> +99362673273 </small>
              </div>

              <div className="ml-5">
                <p> Email: </p>
                <small className="text-gray-400"> ezkahan.dev@gmail.com </small>
              </div>
            </div>

            <div className="font-montserrat-medium text-xs lg:text-sm flex flex-col xl:flex-row justify-between mt-2 xl:mt-5">
              <div>
                <p> Github: </p>
                <small className="text-gray-400">
                  https://github.com/ezkahan
                </small>
              </div>

              <div className="xl:ml-5 mt-2 xl:mt-0">
                <p> Location: </p>
                <small className="text-gray-400">Ashgabat, Turkmenistan</small>
              </div>
            </div>
          </aside>
        </main>
      </section>
    </header>
  );
};

export default Header;
