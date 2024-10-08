import { useState } from "react"
import Card from "./Card"
import Footer from "./Footer"
import { Dark } from "./fragments/dark"
import { ProfileButton, ProfileMenu } from "./fragments/profileButton"
import { Profile,  ProfileInformation } from "./fragments/profileFragments"
import Skill from "./Skill"

const ProfileSection = ({ dark, toggle }) => {
  const [active, setActive] = useState("portfolio")
  const replace = (e) => {
    setActive(e.target.getAttribute("name"))
  }

  return (
    <div className="bg-light dark:bg-dark">
      <div className="container mx-auto p-6 font-poppins min-h-screen">
        <div className="flex flex-col justify-center items-center">
          <Dark dark={dark} toggle={toggle} mb="mb-10"/>
          <div className="flex w-full md:w-3/5 justify-center items-center flex-col md:gap-x-8 md:flex-row">
            <Profile />
            <ProfileInformation />
          </div>
          
          <ProfileButton/>
          <ProfileMenu replace={replace.bind(this)} active={active}/>
          {active === "portfolio" ? <Card /> : <Skill />}
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default ProfileSection