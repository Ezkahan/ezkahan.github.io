import AEDEV from '../../assets/images/AE_dev.jpg'

const Header: React.FC = () => {
    return (
        <header className="bg-gray-900 text-white p-7 lg:p-16">
            <main className="container mx-auto flex flex-col items-center lg:items-start lg:flex-row">
                <aside className="relative w-56 h-72 p-5">
                    <img className="absolute top-0 left-0 w-full h-full z-50" src={AEDEV} alt="Ezkahan" />
                    <div className="bg-green w-full h-full absolute -bottom-4 -right-4"></div>
                </aside>

                <main className="flex flex-col lg:px-10 mt-10 lg:mt-0 lg:ml-14">
                    <aside className="font-hacker">
                        <h1 className="text-6xl"> Ezkahan Dev </h1>
                        <h3 className="absolute text-2xl bg-gray-700 px-1"> Fullstack developer </h3>
                    </aside>

                    <aside className="font-montserrat-medium mt-16">
                        <div className="my-3">
                            <p className="text-sm font-bold"> Phone: </p>
                            <small className="text-gray-400"> +99362673273 </small>
                        </div>
                       
                        <div className="my-3">
                            <p className="text-sm font-bold"> Email: </p>
                            <small className="text-gray-400"> ezkahan.dev@gmail.com </small>
                        </div>

                        <div className="my-3">
                            <p className="text-sm font-bold"> Level: </p>
                            <small className="text-gray-400"> Middle developer </small>
                        </div>
                    </aside>
                </main>
            </main>
        </header>
    )
}

export default Header