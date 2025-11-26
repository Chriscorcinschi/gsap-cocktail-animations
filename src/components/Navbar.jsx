import { useGSAP } from "@gsap/react";
import { navLinks } from "../../constants/index.js";
import gsap from "gsap";
import logo from "/images/logo.png" 

const Navbar = () => {
    useGSAP(()=>{
        const navTween = gsap.timeline({
            scrollTrigger: {
                trigger: 'nav',
                start: 'bottom sop'
            }
        });

        navTween.fromTo( 'nav', 
                { backgroundColor: 'transparent',
                    backdropFilter: 'blur(0px)'
                },
                
                {
                    backgroundColor:'#00000050',
                    backdropFilter: 'blur(7px)',
                    duration: 1,
                    ease: 'power1.inOut'
                })
    })
  return (
    <nav>
        <div>
                    <a href="#hero" className="flex gap-2">
                        <img src={logo} alt="logo" />
                        <p>Velvet Pour</p>
                    </a>

            <ul>
                {navLinks.map((link) => (
                    <li key={link.id}>
                        <a href={`#${link.id}`}>{link.title}</a>
                    </li>
                ))}
            </ul>
        </div>
    </nav>
  )
}

export default Navbar;