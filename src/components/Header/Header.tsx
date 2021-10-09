import AEDEV from '../../assets/images/AE_dev.jpg'

const Header: React.FC = () => {
    return (
        <header className="bg-gray-900 text-white p-7 lg:p-16">
            <section className="container mx-auto flex flex-row justify-center lg:justify-start lg:items-start">
                <img className="w-24 h-28 lg:w-40 lg:h-48" src={AEDEV} alt="Ezkahan" />

                <main className="flex flex-col ml-5 lg:px-10 lg:ml-7">
                    <aside className="">
                        <h1 className="font-hacker text-3xl lg:text-6xl"> Aymedow Eziz </h1>
                        <h3 className="font-hacker absolute text-lg lg:text-2xl bg-gray-700 px-1"> Fullstack developer </h3>

                        <div className="font-montserrat-medium text-xs lg:text-sm flex justify-between mt-10 lg:mt-16">
                            <div>
                                <p> Phone: </p>
                                <small className="text-gray-400"> +99362673273 </small>
                            </div>
                            
                            <div className="ml-5">
                                <p> Email: </p>
                                <small className="text-gray-400"> ezkahan.dev@gmail.com </small>
                            </div>
                        </div>
                    </aside>
                </main>
            </section>
        </header>
    )
}

export default Header