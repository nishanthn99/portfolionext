import Image from "next/image";

const Projects = () => {
  return (
    <div className="w-full min-h-screen text-gray-800 p-7 font-sans bg-gradient-to-r from-purple-200 to-pink-400">
      <div className="mb-10">
        <h2 className="mb-4 text-3xl text-gray-900">Projects:</h2>
        <ol className="space-y-8">
          <li className="p-6 bg-white hover:scale-105 rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 flex flex-col sm:flex-row">
            <div className="flex-shrink-0">
              <Image
                className="rounded"
                src="/images/projdatabase.png"
                width={400}
                height={400}
                alt="dbms project"
                layout="intrinsic"
              />
            </div>
            <div className="sm:ml-6 mt-4 sm:mt-0 flex-1">
              <span className="font-bold text-2xl text-lime-600">Travel Management System</span>
              <p className="mt-2 text-gray-600 text-xl">This project is about finding the solution for the tourists in travel planning. The Website with frontend UI connected to the database of MySQL at backend which services for storing the customer data and customers to view and make booking.</p>
            </div>
          </li>
          <li className="p-6 bg-white hover:scale-105 rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 flex flex-col sm:flex-row">
            <div className="flex-shrink-0">
              <Image
                className="rounded"
                src="/images/aicteproj.jpg"
                width={400}
                height={400}
                alt="ideal lab project"
              />
            </div>
            <div className="sm:ml-6 mt-4 sm:mt-0 flex-1">
              <span className="font-bold text-2xl text-lime-600">WordPress Website to Show Projects</span>
              <p className="mt-2 text-gray-600 text-xl">The project is about creating a simple WordPress project to showcase the academic project done. Using the drag and drop features of WordPress. The website displays the image of the project with a description about the same.</p>
            </div>
          </li>
          <li className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 flex flex-col hover:scale-105 sm:flex-row">
            <div className="flex-shrink-0">
              <Image
                className="rounded"
                src="/images/pic6.png"  // Add an appropriate image for this project
                width={300}
                height={400}
                alt="chicken disease project"
              />
              <Image
                className="rounded"
                src="/images/pic1.png"  // Add an appropriate image for this project
                width={300}
                height={400}
                alt="chicken disease project"
              />
            </div>
            <div className="sm:ml-6 mt-4 sm:mt-0 flex-1">
              <span className="font-bold text-2xl text-lime-600">Chicken Disease Prediction</span>
              <p className="mt-2 text-gray-600 text-xl">This project is based on the Deep Learning concept of training a model to differentiate and predict diseases present in chickens.The project uses Keras and Tensor flow library module to build the CNN model which is efficiently predicts the images according to features upon which they are trained. It takes both healthy and affected images of chicken fecal matter to predict the disease present in them.</p>
            </div>
          </li>
          <li className="p-6 bg-white hover:scale-105 rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 flex flex-col sm:flex-row">
            <div className="flex-shrink-0">
              <Image
                className="rounded"
                src="/images/cravecure.jpg"
                width={400}
                height={400}
                alt="major project"
              />
            </div>
            <div className="sm:ml-6 mt-4 sm:mt-0 flex-1">
              <span className="font-bold text-2xl text-lime-600">Crave Cure</span>
              <p className="mt-2 text-gray-600 text-xl">A web-based platform designed to connect donors, NGOs, and recipients seamlessly. 
CraveCure is an innovative web-based platform designed to connect donors with underprivileged communities, focusing on essential items like food, clothing, and gadgets.</p>
            </div>
          </li>
        </ol>
      </div>
      <div>
        <h2 className="mb-4 text-3xl text-gray-900">Internships:</h2>
        <ol className="space-y-8">
          <li className="p-6 bg-white rounded-lg shadow-lg hover:scale-105 hover:shadow-xl transition-transform duration-300 flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-6">
            <Image
              className="rounded"
              src="/images/logo.png"  // Add an appropriate image for this project
              width={200}
              height={200}
              alt="vault of code"
            />
            <div className="flex-1">
              <div className="text-xl font-light text-green-600">Company name: <span className="font-bold text-gray-800">Vault of Code</span></div>
              <div className="text-xl font-light text-green-600">Domain: <span className="font-bold text-gray-800">Frontend Web Development with React</span></div>
              <div className="text-xl font-light text-green-600">Duration: <span className="font-bold text-gray-800">1 month</span></div>
            </div>
          </li>
          <li className="p-6 bg-white rounded-lg shadow-lg hover:scale-105 hover:shadow-xl transition-transform duration-300 flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-6">
            <Image
              className="rounded"
              src="/images/infosys.png"  // Add an appropriate image for this project
              width={200}
              height={200}
              alt="Infosys Limited"
            />
            <div className="flex-1">
              <div className="text-xl font-light text-green-600">Company name: <span className="font-bold text-gray-800">Infosys Limited</span></div>
              <div className="text-xl font-light text-green-600">Role: <span className="font-bold text-gray-800">System Engineer</span></div>
              <div className="text-xl font-light text-green-600">Duration: <span className="font-bold text-gray-800">Jan 2025 -Present</span></div>
            </div>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Projects;
