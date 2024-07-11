const Skills = () => {
  return (
    <div className="min-h-screen w-full bg-gray-100 p-10 space-y-10">
      {/* Education Details Section */}
      <div className="bg-white p-6 rounded-xl shadow-lg transition-transform duration-300 hover:scale-105">
        <h2 className="mb-4 text-3xl font-bold text-cyan-600">Education Details:</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Card for Bachelor of Engineering */}
          <div className="bg-gray-200 p-4 rounded-lg shadow-md hover:bg-gray-300 transition-colors duration-300">
            <h3 className="text-lg font-semibold">Bachelor of Engineering (B.E)</h3>
            <p className="text-sm">Computer Science (CSE)</p>
            <p className="text-sm">St Joseph Engineering College Byndoor</p>
            <p className="text-sm">2025</p>
            <p className="text-sm">9.32(CGPA)</p>
          </div>
          {/* Card for Pre-University College */}
          <div className="bg-gray-200 p-4 rounded-lg shadow-md hover:bg-gray-300 transition-colors duration-300">
            <h3 className="text-lg font-semibold">Pre-University College (PUC)</h3>
            <p className="text-sm">Govt. P. U. College Byndoor</p>
            <p className="text-sm">2021</p>
            <p className="text-sm">95%</p>
          </div>
          {/* Card for SSLC */}
          <div className="bg-gray-200 p-4 rounded-lg shadow-md hover:bg-gray-300 transition-colors duration-300">
            <h3 className="text-lg font-semibold">SSLC</h3>
            <p className="text-sm">Govt. High School Byndoor</p>
            <p className="text-sm">2019</p>
            <p className="text-sm">91.36%</p>
          </div>
        </div>
      </div>

      {/* Skills Section with Accuracy Levels */}
      <div className="bg-white p-6 rounded-xl shadow-lg transition-transform duration-300 hover:scale-105">
        <h2 className="text-3xl font-bold text-cyan-500 pb-4">Skills Known:</h2>

        {/* Soft Skills */}
        <div className="flex items-start space-x-4">
  <ul className="list-disc pl-5 text-slate-600 text-lg space-y-4 flex-1">
    <h3 className="text-2xl font-bold text-gray-700 mb-4">Soft Skills:</h3>
    <li className="flex items-center space-x-2 transition-transform duration-300 hover:scale-105">
      <span>Problem Solving</span>
    </li>
    <li className="flex items-center space-x-2 transition-transform duration-300 hover:scale-105">
      <span>Effective Communication</span>
    </li>
    <li className="flex items-center space-x-2 transition-transform duration-300 hover:scale-105">
      <span>Collaborative Working</span>
    </li>
  </ul>
  <img
    src="/images/soft-skills.png"
    alt="Collaborative Working"
    className="w-40 h-auto hover:scale-110 pr-0.5 flex-shrink-0"
  />
</div>

      </div>

      {/* Technical Skills Section with Accuracy Levels */}
      <div className="bg-white p-6 rounded-xl shadow-lg transition-transform duration-300 hover:scale-105">
        <h3 className="text-2xl font-bold text-gray-700">Technical Skills:</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Card for C Programming */}
          <div className="bg-gray-200 p-4 rounded-lg shadow-md hover:bg-gray-300 transition-colors duration-300">
            <div className="flex items-center mb-4">
              <img src="/images/java.png" alt="Java Programming" className="w-12 h-12 mr-4" />
              <div>
                <h4 className="text-lg font-semibold">Java Programming</h4>
                <p className="text-sm">90% Proficiency</p>
              </div>
            </div>
            <div className="relative pt-1">
              <div className="flex mb-2 items-center justify-between">
                <div className="text-xs font-semibold inline-block py-1 px-2 rounded-full text-teal-600 bg-teal-200">
                  90%
                </div>
              </div>
              <div className="relative flex mb-2 items-center justify-between">
                <div className="flex-grow h-2 bg-teal-200 rounded-full">
                  <div className="h-full text-center text-xs text-white bg-teal-500 rounded-full" style={{ width: '90%' }}></div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-200 p-4 rounded-lg shadow-md hover:bg-gray-300 transition-colors duration-300">
            <div className="flex items-center mb-4">
              <img src="/images/python.png" alt="Python Programming" className="w-12 h-12 mr-4" />
              <div>
                <h4 className="text-lg font-semibold">Python Programming</h4>
                <p className="text-sm">90% Proficiency</p>
              </div>
            </div>
            <div className="relative pt-1">
              <div className="flex mb-2 items-center justify-between">
                <div className="text-xs font-semibold inline-block py-1 px-2 rounded-full text-teal-600 bg-teal-200">
                  90%
                </div>
              </div>
              <div className="relative flex mb-2 items-center justify-between">
                <div className="flex-grow h-2 bg-teal-200 rounded-full">
                  <div className="h-full text-center text-xs text-white bg-teal-500 rounded-full" style={{ width: '90%' }}></div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-200 p-4 rounded-lg shadow-md hover:bg-gray-300 transition-colors duration-300">
            <div className="flex items-center mb-4">
              <img src="/images/atom.png" alt="React Framework" className="w-12 h-12 mr-4" />
              <div>
                <h4 className="text-lg font-semibold">React Framework</h4>
                <p className="text-sm">90% Proficiency</p>
              </div>
            </div>
            <div className="relative pt-1">
              <div className="flex mb-2 items-center justify-between">
                <div className="text-xs font-semibold inline-block py-1 px-2 rounded-full text-teal-600 bg-teal-200">
                  90%
                </div>
              </div>
              <div className="relative flex mb-2 items-center justify-between">
                <div className="flex-grow h-2 bg-teal-200 rounded-full">
                  <div className="h-full text-center text-xs text-white bg-teal-500 rounded-full" style={{ width: '90%' }}></div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-200 p-4 rounded-lg shadow-md hover:bg-gray-300 transition-colors duration-300">
            <div className="flex items-center mb-4">
              <img src="/images/letter-c.png" alt="C Programming" className="w-12 h-12 mr-4" />
              <div>
                <h4 className="text-lg font-semibold">C Programming</h4>
                <p className="text-sm">90% Proficiency</p>
              </div>
            </div>
            <div className="relative pt-1">
              <div className="flex mb-2 items-center justify-between">
                <div className="text-xs font-semibold inline-block py-1 px-2 rounded-full text-teal-600 bg-teal-200">
                  90%
                </div>
              </div>
              <div className="relative flex mb-2 items-center justify-between">
                <div className="flex-grow h-2 bg-teal-200 rounded-full">
                  <div className="h-full text-center text-xs text-white bg-teal-500 rounded-full" style={{ width: '90%' }}></div>
                </div>
              </div>
            </div>
          </div>
          {/* Card for MERN Stack */}
          <div className="bg-gray-200 p-4 rounded-lg shadow-md hover:bg-gray-300 transition-colors duration-300">
            <div className="flex items-center mb-4">
              <img src="/images/web-development.png" alt="MERN Stack" className="w-12 h-12 mr-4" />
              <div>
                <h4 className="text-lg font-semibold">MERN Stack</h4>
                <p className="text-sm">85% Proficiency</p>
              </div>
            </div>
            <div className="relative pt-1">
              <div className="flex mb-2 items-center justify-between">
                <div className="text-xs font-semibold inline-block py-1 px-2 rounded-full text-blue-600 bg-blue-200">
                  85%
                </div>
              </div>
              <div className="relative flex mb-2 items-center justify-between">
                <div className="flex-grow h-2 bg-blue-200 rounded-full">
                  <div className="h-full text-center text-xs text-white bg-blue-500 rounded-full" style={{ width: '85%' }}></div>
                </div>
              </div>
            </div>
          </div>
          {/* Card for Microsoft Excel */}
          <div className="bg-gray-200 p-4 rounded-lg shadow-md hover:bg-gray-300 transition-colors duration-300">
            <div className="flex items-center mb-4">
              <img src="/images/office.png" alt="Microsoft Office" className="w-12 h-12 mr-4" />
              <div>
                <h4 className="text-lg font-semibold">Microsoft Office</h4>
                <p className="text-sm">80% Proficiency</p>
              </div>
            </div>
            <div className="relative pt-1">
              <div className="flex mb-2 items-center justify-between">
                <div className="text-xs font-semibold inline-block py-1 px-2 rounded-full text-gray-600 bg-gray-200">
                  80%
                </div>
              </div>
              <div className="relative flex mb-2 items-center justify-between">
                <div className="flex-grow h-2 bg-gray-200 rounded-full">
                  <div className="h-full text-center text-xs text-white bg-gray-500 rounded-full" style={{ width: '80%' }}></div>
                </div>
              </div>
            </div>
          </div>
          {/* Card for Android UI Development */}
          <div className="bg-gray-200 p-4 rounded-lg shadow-md hover:bg-gray-300 transition-colors duration-300">
            <div className="flex items-center mb-4">
              <img src="/images/mobile-coding.png" alt="Android UI Development" className="w-12 h-12 mr-4" />
              <div>
                <h4 className="text-lg font-semibold">Android UI Development</h4>
                <p className="text-sm">75% Proficiency</p>
              </div>
            </div>
            <div className="relative pt-1">
              <div className="flex mb-2 items-center justify-between">
                <div className="text-xs font-semibold inline-block py-1 px-2 rounded-full text-green-600 bg-green-200">
                  75%
                </div>
              </div>
              <div className="relative flex mb-2 items-center justify-between">
                <div className="flex-grow h-2 bg-green-200 rounded-full">
                  <div className="h-full text-center text-xs text-white bg-green-500 rounded-full" style={{ width: '75%' }}></div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-200 p-4 rounded-lg shadow-md hover:bg-gray-300 transition-colors duration-300">
            <div className="flex items-center mb-4">
              <img src="/images/code.png" alt="Git" className="w-12 h-12 mr-4" />
              <div>
                <h4 className="text-lg font-semibold">Git</h4>
                <p className="text-sm">90% Proficiency</p>
              </div>
            </div>
            <div className="relative pt-1">
              <div className="flex mb-2 items-center justify-between">
                <div className="text-xs font-semibold inline-block py-1 px-2 rounded-full text-teal-600 bg-teal-200">
                  90%
                </div>
              </div>
              <div className="relative flex mb-2 items-center justify-between">
                <div className="flex-grow h-2 bg-teal-200 rounded-full">
                  <div className="h-full text-center text-xs text-white bg-teal-500 rounded-full" style={{ width: '90%' }}></div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-200 p-4 rounded-lg shadow-md hover:bg-gray-300 transition-colors duration-300">
            <div className="flex items-center mb-4">
              <img src="/images/data-science.png" alt="DataBase" className="w-12 h-12 mr-4" />
              <div>
                <h4 className="text-lg font-semibold">DataBase Management</h4>
                <p className="text-sm">80% Proficiency</p>
              </div>
            </div>
            <div className="relative pt-1">
              <div className="flex mb-2 items-center justify-between">
                <div className="text-xs font-semibold inline-block py-1 px-2 rounded-full text-teal-600 bg-teal-200">
                  80%
                </div>
              </div>
              <div className="relative flex mb-2 items-center justify-between">
                <div className="flex-grow h-2 bg-teal-200 rounded-full">
                  <div className="h-full text-center text-xs text-white bg-teal-500 rounded-full" style={{ width: '80%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
