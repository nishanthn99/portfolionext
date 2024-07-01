import Image from "next/image"

const projects = () => {
  return (
    <div className="w-full min-h-screen text-cyan-300"><div className="p-7 font-sans">
      <h2 className="mb-4 text-3xl">Projects:</h2>
      <ol className="list-decimal ml-5">
        <li className="mb-4">
          <span className="font-bold text-2xl text-lime-600">Travel Management System.</span>
          <p className="ml-5 mt-1 text-gray-400 text-xl">This project is about finding the solution for the tourists in travel planning. The Website with frontend UI connected to the database of MySQL at backend which services for storing the customer data and customers to view and make booking.</p>
          <Image className="p-3"
          src={"/images/projdatabase.png"}
          width={600}
          height={400}
          alt="dbms project"/>
        </li>
        <li className="mb-4">
          <span className="font-bold text-2xl text-lime-600">WordPress Website to show Projects:</span>
          <p className="ml-5 mt-1 text-gray-400 text-xl">The project is about creating a simple WordPress project to show case the academic project done. Using the drag and drop features of the WordPress. The website displays the image of the project with description about the same.</p>
          <Image className="p-3"
          src={"/images/aicteproj.jpg"}
          width={600}
          height={400}
          alt="ideal lab project"/>
        </li>
        <li className="mb-4">
          <span className="font-bold text-2xl text-lime-600">Chicken Disease Prediction</span>
          <p className="ml-5 mt-1 text-gray-400 text-xl">This project is based on Deep Learning concept of training the model to differentiate and predict Disease present in chicken, which takes both healthy and affected images of the Chicken fecal to predict the Disease present in them.</p>
        </li>
      </ol>
    </div>
    <div className="p-7 font-sans">
      <h2 className="mb-4 text-3xl">Internships:</h2>
      <ol className="list-decimal ml-5">
        <li className="mb-4 text-green-400">
        <div className="text-xl font-light">Comapny name: {' '}<span className="font-bold text-gray-300">Vault of Code</span></div>
        <div className="text-xl font-light">Domain: {' '}<span className="font-bold text-gray-300">Frontend Web Development with
        React.</span></div>
        <div className="text-xl font-light">Duration: {' '}<span className="font-bold text-gray-300">1 month</span></div>
        </li>
        <li className="mb-4 text-green-400">
          <span className="text-xl">Yet to be done</span>
          <p className="ml-5 mt-1 text-gray-600">pending....</p>
        </li>
      </ol>
    </div>
    </div>
  )
}

export default projects