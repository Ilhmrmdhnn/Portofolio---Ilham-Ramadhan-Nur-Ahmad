import profile from '../../assets/poto.png'
import { BsLinkedin, BsGithub, BsInstagram, BsFacebook } from "react-icons/bs"

export const Profile = () => {
  return (
    <div class="w-36 md:w-44 h-36 md:h-44 bg-white rounded-full p-1 border-4 border-profile mb-10">
    <img src={profile} id="profileImage" class="w-full h-full object-cover rounded-full hover:drop-shadow-pink-shadow duration-300 ease-in-out cursor-pointer" alt="profile" onclick="showImage()" />
  </div>
  )
}

export const ProfileInformation = () => {
  return (
    <div className="flex justify-center items-center md:items-start md:tracking-widest flex-col text-center mb-10">
      <h1 className="text-title dark:text-dtitle text-2xl font-medium mb-3">Ilham Ramadhan Nur Ahmad</h1>
      <p className="text-subtitle dark:text-dsubtitle tracking-wider text-base md:text-lg text-base mb-3">Business Mathematics - Industrial Mathematics</p>
      <div className="flex text-subtitle w-full dark:text-dsubtitle justify-center items-center space-x-4"> {/* Menggunakan space-x-4 untuk memberikan jarak horizontal */}
        <a href="https://github.com/Ilhmrmdhnn" target="_blank" className="flex justify-center items-center"><BsGithub className="cursor-pointer text-xl hover:text-title dark:hover:text-dtitle duration-300 ease-in-out"/></a>
        <a href="https://instagram.com/ilham_ramadhann_/" target="_blank" className="flex justify-center items-center"><BsInstagram className="cursor-pointer text-xl hover:text-title dark:hover:text-dtitle duration-300 ease-in-out"/></a>
        <a href="https://linkedin.com/in/ilhamramadhannurahmad/" target="_blank" className="flex justify-center items-center"><BsLinkedin className="cursor-pointer text-xl hover:text-title dark:hover:text-dtitle duration-300 ease-in-out"/></a>
        {/* <a href="https:/  /web.facebook.com/profile.php?id=100073858291280" target="_blank" className="flex justify-center items-center"><BsFacebook className="cursor-pointer text-xl hover:text-title dark:hover:text-dtitle duration-300 ease-in-out"/></a> */}
      </div>
    </div>
  )
}

export const ProfileFact = () => {
  return (
    <div className="flex text-sm md:text-lg md:w-3/5 lg:w-1/2 xl:w-2/5 2xl:w-2/5 md:gap-x-2 justify-center items-center mb-10">
      <div className="w-full flex-1 flex flex-col justify-center items-center text-center px-1">
        <h2 className="text-fact dark:text-dfact text-xl">1</h2>
        <p className="text-subtitle dark:text-dsubtitle">Year of work experience</p>
      </div>
      <div className="w-full flex-1 flex flex-col justify-center items-center text-center px-1">
        <h2 className="text-fact dark:text-dfact text-xl">0</h2>
        <p className="text-subtitle dark:text-dsubtitle">Client side projects</p>
      </div>
      <div className="w-full flex-1 flex flex-col justify-center items-center text-center px-1">
        <h2 className="text-fact dark:text-dfact text-xl">0</h2>
        <p className="text-subtitle dark:text-dsubtitle">Personal side projects</p>
      </div>
    </div>
  )
}