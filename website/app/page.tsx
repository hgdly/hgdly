import Image from 'next/image'

import linkedin_icon from "@/public/linkedin.svg"
import github_icon from "@/public/github.svg"
import deezer_icon from "@/public/deezer.svg"
import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <div className="homepage">
        <div className='bg-hero'>
          <video autoPlay loop muted className="bg-video">
            <source
              src="clouds.mp4"
              type="video/mp4"
            />
          </video>
        </div>
        <div className="mid-card bg-glass">
          <div className="flex flex-col sm:flex-row gap-14">
            <div>
              <div className="card-name">Hugo</div>
              <div className="card-name pt-1">Deleye</div>
              <div className="card-title pt-4">AI graduated @ Toulouse, France</div>
            </div>
            <div className="flex flex-col justify-between gap-y-4 sm:gap-y-0 pt-4 sm:pt-0">
              <Link href={"https://www.linkedin.com/in/hugo-deleye/"} target='_blank'><div className="social-button"><div className="flex gap-x-4"><Image src={linkedin_icon} alt="Linkedin icon" className='social_icon'/>LinkedIn</div></div></Link>
              <Link href={"https://www.github.com/hgdly/"} target='_blank'><div className="social-button"><div className="flex gap-x-4"><Image src={github_icon} alt="GitHub icon" className='social_icon'/>GitHub</div></div></Link>
              <Link href={"https://www.deezer.com/fr/profile/867246701"} target='_blank'><div className="social-button"><div className="flex gap-x-4"><Image src={deezer_icon} alt="Deezer icon" className='social_icon'/>Deezer</div></div></Link>
              <div className="flex flex-row justify-between pt-10 sm:pt-0 px-16 sm:px-0 sm:gap-x-6">
                <Link href={"./cv"} target='_blank'><div className="social-button">CV</div></Link>
                {/* <Link href={"https://projects.hgdly.me"} target='_blank'><div className="social-button">Projects</div></Link> */}
                <Link href={"mailto:%68%75%67%6f%40%68%67%64%6c%79%2e%6d%65"} target='_blank'><div className="social-button">Mail</div></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
