const Experience: React.FC<any> = ({company, level, date}) => {
    return (
        <div className="border-l-4 border-gray-800 mb-4 lg:mb-7 px-5 py-2">
            <small className="bg-gray-900 text-white px-2 py-1"> {date} </small>
            <h3 className="font-montserrat-bold text-md lg:text-xl text-gray-700 mt-1"> {level} </h3>
            <h4 className="text-sm lg:text-md text-gray-500"> {company} </h4>
        </div>
    )
}

export default Experience