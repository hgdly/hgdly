import Image from 'next/image'

import linkedin_icon from "@/public/linkedin.svg"
import github_icon from "@/public/github.svg"
import spotify_icon from "@/public/spotify.svg"
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
          <div className="grid grid-cols-2 gap-14">
            <div>
              <div className="card-name">Hugo<br/>Deleye</div>
              <div className="card-title pt-6">AI student @ Toulouse, France</div>
            </div>
            <div className="flex flex-col justify-between">
              <Link href={"https://www.linkedin.com/in/hugo-deleye/"} target='_blank'><div className="social-button"><div className="flex gap-x-4"><Image src={linkedin_icon} alt="Linkedin icon"/>LinkedIn</div></div></Link>
              <Link href={"https://www.github.com/hgdly/"} target='_blank'><div className="social-button"><div className="flex gap-x-4"><Image src={github_icon} alt="GitHub icon"/>GitHub</div></div></Link>
              <Link href={"https://open.spotify.com/user/i5yqjtdeo8855bsjb4oubsqyz"} target='_blank'><div className="social-button"><div className="flex gap-x-4"><Image src={spotify_icon} alt="Spotify icon"/>Spotify</div></div></Link>
              <div className="flex flex-row justify-between">
                <Link href={"https://cv.hgdly.me"} target='_blank'><div className="social-button">CV</div></Link>
                <Link href={"https://projects.hgdly.me"} target='_blank'><div className="social-button">Projects</div></Link>
                <Link href={"mailto:hugo@hgdly.me"} target='_blank'><div className="social-button">Mail</div></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
