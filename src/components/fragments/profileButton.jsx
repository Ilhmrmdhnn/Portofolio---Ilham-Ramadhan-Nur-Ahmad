import { HiDownload } from 'react-icons/hi';
import { Link } from 'react-router-dom';

export const ProfileButton = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center lg:w-9/12 mb-10 text-sm md:text-lg font-medium gap-4 lg:gap-0">
      <a href="https://drive.google.com/file/d/1m16I1Hns4F6mKu8K4zrYzZVF3ikaI8ej/view?usp=sharing" download="portfolio" target="_blank" className="bg-button dark:bg-dbutton hover:text-button2 dark:hover:bg-buttonhov duration-300 ease-in-out text-button py-3 rounded-lg flex justify-center items-center lg:w-1/2 xl:w-2/5 2xl:w-2/5">Curriculum Vitae <HiDownload className="ml-2" /></a>
      <a href="https://drive.google.com/file/d/1zNoQe014lhi8lSIoWvqX2NIqhTZ_k2me/view?usp=sharing" download="portfolio" target="_blank" className="bg-button dark:bg-dbutton hover:text-button2 dark:hover:bg-buttonhov duration-300 ease-in-out text-button py-3 rounded-lg flex justify-center items-center lg:w-1/2 xl:w-2/5 2xl:w-2/5 lg:ml-4">About Me <HiDownload className="ml-2" /></a>
    </div>
  );
}

export const ProfileMenu = ({ replace, active }) => {
  return (
    <div className="flex w-full lg:w-9/12 p-2 lg:p-3 bg-white dark:bg-button2 gap-x-5 rounded-lg mb-10 text-sm md:text-lg font-medium">
      <button onClick={replace} name="portfolio" className={`${active === "portfolio" ? "bg-button3 dark:bg-dbutton3 text-button2 dark:hover:text-dtitle duration-300 ease-in-out dark:text-dsubtitle" : "bg-white dark:bg-button2 text-title dark:text-dsubtitle"} hover:text-button2 py-3 rounded-lg w-full flex justify-center items-center`}>Portfolio</button>
      <button onClick={replace} name="skill" className={`${active === "skill" ? "bg-button3 dark:bg-dbutton3 text-button2 dark:hover:text-dtitle duration-300 ease-in-out dark:text-dsubtitle" : "bg-white dark:bg-button2 text-title dark:text-dsubtitle"} hover:text-button2 py-3 rounded-lg w-full`}>Skills</button>
    </div>
  );
}
