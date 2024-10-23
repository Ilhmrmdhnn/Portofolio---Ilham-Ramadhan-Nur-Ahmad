import { RiStarSFill } from 'react-icons/ri'
import { FaReact, FaBootstrap, FaNodeJs, FaPowerOff, FaChartBar, FaChartPie, FaBrain, FaDatabase, FaCloud } from 'react-icons/fa'
import { SiTailwindcss, SiBulma, SiArchlinux, SiPython, SiPytorch, SiR, SiJupyter, SiTensorflow, SiMicrosoftexcel, SiSqlite, SiSequelize, SiKeras, SiScikitlearn, SiMicrosoftword, SiMicrosoftsharepoint, SiMicrosoftpowerpoint, SiPandas, SiNumpy } from 'react-icons/si'
import { TbBrandNextjs } from 'react-icons/tb'
import { IoLogoHtml5, IoLogoJavascript, IoLogoCss3 } from 'react-icons/io'


const Rate = ({ icon, level, language, self }) => {
  return (
    <div className={`${self} flex justify-between items-center bg-white dark:bg-button2 p-6 rounded-lg`}>
      <div className="flex justify-center items-center">
        {icon}
        <p className="dark:text-dsubtitle ml-2">{language}</p>
      </div>
      <div className="flex text-gray-500"> {/* Mengubah warna teks menjadi hitam */}
        <p className="text-sm">{level}</p> {/* Menampilkan level */}
      </div>
    </div>
  )
}

const Skill = () => {
  return (
    <div className="mb-20 flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-x-5 w-full gap-y-5 text-sm lg:w-9/12">
      <Rate icon={<SiMicrosoftexcel className="text-green-500 text-3xl mr-2"/>} stars="5" language="Excel" level="Intermediate"/>
      <Rate icon={<SiMicrosoftword className="text-blue-500 text-3xl mr-2"/>} stars="5" language="Word" level="Intermediate"/>
      <Rate icon={<SiMicrosoftpowerpoint className="text-orange-500 text-3xl mr-2"/>} stars="5" language="Power Point" level="Intermediate"/>
      <Rate icon={<SiJupyter className="text-orange-400 text-3xl mr-2"/>} stars="5" language="Jupyter Notebook" level="Intermediate"/>
      <Rate icon={<SiPython className="text-blue-500 text-3xl mr-2"/>} stars="5" language="Python - Data Analyst" level="Intermediate"/>
      <Rate icon={<SiPython className="text-blue-500 text-3xl mr-2"/>} stars="5" language="Python - Data Science" level="Intermediate"/>
      <Rate icon={<FaBrain className="text-orange-600 text-3xl mr-2"/>} stars="5" language="Machine Learning" level="Intermediate"/>
      <Rate icon={<SiScikitlearn className="text-blue-500 text-3xl mr-2"/>} stars="5" language="Scikit-learn" level="Intermediate"/>
      <Rate icon={<FaCloud className="text-blue-500 text-3xl mr-2"/>} stars="5" language="NLP" level="Intermediate"/>
      <Rate icon={<SiPandas className="text-[#0b0153] text-3xl mr-2"/>} stars="5" language="Pandas" level="Intermediate"/>
      <Rate icon={<SiNumpy className="text-blue-500 text-3xl mr-2"/>} stars="5" language="NumPy" level="Intermediate"/>
      <Rate icon={<SiPytorch className="text-orange-500 text-3xl mr-2"/>} stars="4" language="Pytorch" level="Intermediate"/>
      <Rate icon={<SiKeras className="text-red-500 text-3xl mr-2"/>} stars="4" language="Keras" level="Intermediate"/>
      <Rate icon={<SiTensorflow className="text-orange-500 text-3xl mr-2"/>} stars="4" language="TensorFlow" level="Intermediate"/>
      <Rate icon={<SiR className="text-blue-500 text-3xl mr-2"/>} stars="4" language="R" level="Intermediate"/>
      <Rate icon={<FaChartBar className="text-yellow-500 text-3xl mr-2"/>} stars="4" language="Power BI" level="Intermediate"/>
      <Rate icon={<FaDatabase className="text-blue-600 text-3xl mr-2"/>} stars="3" language="SQL" level="Intermediate"/>
      <Rate icon={<FaChartPie className="text-[#264a82] text-3xl mr-2"/>} stars="3" language="Tableau" level="Basic"/>
      {/* <Rate self="lg:col-end-3" icon={<SiArchlinux className="text-sky-600 text-3xl mr-2"/>} stars="4" language="Arch Linux"/> */}
    </div>
  )
}

export default Skill