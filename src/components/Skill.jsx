import { RiStarSFill } from 'react-icons/ri'
import { FaReact, FaBootstrap, FaNodeJs, FaPowerOff, FaChartBar, FaChartPie, FaBrain, FaDatabase, FaCloud } from 'react-icons/fa'
import { SiTailwindcss, SiBulma, SiArchlinux, SiPython, SiPytorch, SiR, SiJupyter, SiTensorflow, SiMicrosoftexcel, SiSqlite, SiSequelize, SiKeras, SiScikitlearn, SiMicrosoftword, SiMicrosoftsharepoint, SiMicrosoftpowerpoint } from 'react-icons/si'
import { TbBrandNextjs } from 'react-icons/tb'
import { IoLogoHtml5, IoLogoJavascript, IoLogoCss3 } from 'react-icons/io'


const Rate = ({icon, stars, language, self}) => {
  const starLength = parseInt(stars)
  const arr = Array(starLength).fill("mwehe")
  return (
    <div className={`${self} flex justify-between items-center bg-white dark:bg-button2 p-6 rounded-lg`}>
      <div className="flex justify-center items-center">
        {icon}
        <p className="dark:text-dsubtitle">{language}</p>
      </div>
      <div className="flex text-orange-200">
        { arr.map((item, index) => (
          <RiStarSFill key={index} style={{ color: '#FFA500' }}/>
        ))}
      </div>
    </div>
  )
}

const Skill = () => {
  return (
    <div className="mb-20 flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-x-5 w-full gap-y-5 text-sm lg:w-9/12">
      <Rate icon={<SiMicrosoftexcel className="text-green-500 text-3xl mr-2"/>} stars="5" language="Excel"/>
      <Rate icon={<SiMicrosoftword className="text-blue-500 text-3xl mr-2"/>} stars="5" language="Word"/>
      <Rate icon={<SiMicrosoftpowerpoint className="text-orange-500 text-3xl mr-2"/>} stars="5" language="Power Point"/>
      <Rate icon={<SiJupyter className="text-orange-400 text-3xl mr-2"/>} stars="5" language="Jupyter Notebook"/>
      <Rate icon={<SiPython className="text-blue-500 text-3xl mr-2"/>} stars="5" language="Python"/>
      <Rate icon={<FaBrain className="text-orange-600 text-3xl mr-2"/>} stars="5" language="Machine Learning"/>
      <Rate icon={<SiScikitlearn className="text-blue-500 text-3xl mr-2"/>} stars="5" language="Scikit-learn"/>
      <Rate icon={<FaCloud className="text-blue-500 text-3xl mr-2"/>} stars="5" language="NLP"/>
      <Rate icon={<SiPytorch className="text-orange-500 text-3xl mr-2"/>} stars="4" language="Pytorch"/>
      <Rate icon={<SiKeras className="text-red-500 text-3xl mr-2"/>} stars="4" language="Keras"/>
      <Rate icon={<SiTensorflow className="text-orange-500 text-3xl mr-2"/>} stars="4" language="TensorFlow"/>
      <Rate icon={<SiR className="text-blue-500 text-3xl mr-2"/>} stars="4" language="R"/>
      <Rate icon={<FaChartBar className="text-yellow-500 text-3xl mr-2"/>} stars="4" language="Power BI"/>
      <Rate icon={<FaChartPie className="text-blue-500 text-3xl mr-2"/>} stars="3" language="Tableau"/>
      <Rate icon={<FaDatabase className="text-blue-600 text-3xl mr-2"/>} stars="3" language="SQL"/>
      {/* <Rate self="lg:col-end-3" icon={<SiArchlinux className="text-sky-600 text-3xl mr-2"/>} stars="4" language="Arch Linux"/> */}
    </div>
  )
}

export default Skill