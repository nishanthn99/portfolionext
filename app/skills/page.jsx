const skills = () => {
  return (
    <div className="min-h-screen w-full">
      <div className="p-10">
        <h2 className="mb-4 text-3xl font-bold text-cyan-200">
          Education Details:
        </h2>
        <table className="w-auto border-collapse border-2 border-gray-400 rounded-xl text-wrap sm:min-w-full text-slate-600">
          <thead>
            <tr>
              <th className="border-r border-gray-50 p-2 bg-gray-300 ">
                Degree
              </th>
              <th className="border-r border-gray-50 p-2 bg-gray-300 ">
                School/College
              </th>
              <th className="border-r border-gray-50 p-2 bg-gray-300 ">
                Year Passing
              </th>
              <th className="border-gray-50 p-2 bg-gray-300 ">
                Percentage/CGPA
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="odd:bg-red-200 even:bg-gray-50 hover:bg-gray-200">
              <td className="border-r border-gray-300 p-2">
                Bachelor of Engineering (B.E) in Computer Science (CSE):
              </td>
              <td className="border-r border-gray-300 p-2">
                St Joseph Engineering College Byndoor.
              </td>
              <td className="border-r border-gray-300 p-2">2025</td>
              <td className="border-gray-300 p-2">9.32(CGPA)</td>
            </tr>
            <tr className="odd:bg-red-200 even:bg-gray-50 hover:bg-gray-200">
              <td className="border-r border-gray-300 p-2">
                Pre-University College (PUC):
              </td>
              <td className="border-r border-gray-300 p-2">
                Govt. P. U. College Byndoor.
              </td>
              <td className="border-r border-gray-300 p-2">2021</td>
              <td className="border-gray-300 p-2">95%</td>
            </tr>
            <tr className="odd:bg-red-200 even:bg-gray-50 hover:bg-gray-200">
              <td className="border-r border-gray-300 p-2">SSLC:</td>
              <td className="border-r border-gray-300 p-2">
                Govt. High school Byndoor.
              </td>
              <td className="border-r border-gray-300 p-2">2019</td>
              <td className="border-gray-300 p-2">91.36%</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="p-10 ">
        <span className="font-bold text-3xl text-cyan-300 pb-4">
          Skills Known:
        </span>
        <h1 className="pt-2 font-bold text-2xl">Soft Skills:</h1>
        <ul className="list-disc p-3 text-slate-300 text-lg">
          <li>Problem Solving</li>
          <li>Effective Communication</li>
          <li>Collaborative Working</li>
        </ul>
      </div>
      <div className="p-10 ">
        <h1 className="font-bold text-2xl">Technical Skills:</h1>
        <ul className="list-disc p-3 text-slate-300 text-lg">
          <li>Programming Languages like C, Java, Python</li>
          <li>Web Development with MERN Stack</li>
          <li>Microsoft Excel and Word</li>
          <li>Android UI development</li>
        </ul>
      </div>
    </div>
  );
};

export default skills;
