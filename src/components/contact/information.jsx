import { FaPhoneAlt } from 'react-icons/fa'
import { IoMdMail } from 'react-icons/io'
import { ImLocation2 } from 'react-icons/im'
import { BsLinkedin, BsGithub, BsInstagram } from "react-icons/bs"

export const Title = () => {
  return (
    <div className="flex flex-col">
      <h1 className="text-title dark:text-dtitle text-2xl mb-4">About Me</h1>
      <p className="text-subtitle dark:text-dsubtitle lg:w-4/5"></p>
    </div>
  )
}

export const Contact = () => {
  return (
    <div className="flex flex-col items-start justify-center gap-y-4 text-subtitle dark:text-dcontact">
      <div className="flex justify-center items-center gap-x-4">
        <FaPhoneAlt className="text-xl" />
        <p>+62 822 1523 0404</p>
      </div>
      <div className="flex justify-center items-center gap-x-4">
        <IoMdMail className="text-xl" />
        <p>ilhamramadhann0711@gmail.com</p>
      </div>
      <div className="flex justify-center items-center gap-x-4">
        <ImLocation2 className="text-xl" />
        <p>Jakarta - Indonesia</p>
      </div>
    </div>
  )
}

export const Logo = () => {
  return (
    <div className="flex justify-around lg:justify-between lg:w-2/5 text-subtitle dark:text-dtitle">
      <div className="p-4 cursor-pointer rounded-full hover:bg-button duration-300 ease-in-out"><BsInstagram /></div>
      <div className="p-4 cursor-pointer rounded-full hover:bg-button duration-300 ease-in-out"><BsGithub /></div>
      <div className="p-4 cursor-pointer rounded-full hover:bg-button duration-300 ease-in-out"><BsLinkedin /></div>
    </div>
  )
}