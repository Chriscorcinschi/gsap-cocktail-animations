import { useGSAP } from "@gsap/react";
import { openingHours, socials } from "../../constants";
import { SplitText } from "gsap/SplitText";
import gsap from "gsap";
import footerRightLeaf from "/images/footer-right-leaf.png" 
import footerLeftLeaf from "/images/footer-left-leaf.png" 

const Contact = () => {
    useGSAP(()=>{
        const titleSplit = SplitText.create('#contact h2', {type: 'words'});

        const timeline = gsap.timeline({
            scrollTrigger: {
                trigger: '#contact',
			    start: 'top center',
            },
            ease: "power1.inOut"
        })
        
        timeline
            .from(titleSplit.words, {
                opacity: 0, 
                yPercent: 100,
                stagger: 0.02
            })
            .from('#contact h3,#contact p', {
                opacity: 0, 
                yPercent: 100,
                stagger: 0.02
            })
            .to ('#f-right-leaf', {
                x: '50',
                duration: 3,
                ease: 'power1.inOut'
            })
            .to ('#f-left-leaf', {
                y: '50',
                duration: 2,
                ease: 'power1.inOut'
            }, '<')
    })

  return (
    <footer id="contact">
        <img 
            src={footerRightLeaf}
            alt="leaf-right" 
            id="f-right-leaf" />
	    <img 
            src={footerLeftLeaf}
            alt="leaf-left" 
            id="f-left-leaf" />
        
        <div className="content">
            <h2>Where to Find Us</h2>
            
            <div>
                <h3>Visit Our Bar</h3>
		        <p>456, Raq Blvd. #404, Los Angeles, CA 90210</p>
            </div>

            <div>
                <h3>Contact us</h3>
                <p>(555) 987-6543</p>
                <p>hello@jsmcocktail.com</p>
            </div>

            <div>
                <h3>Open every day</h3>
                {openingHours.map((time)=>(
                <p key={time.day}>
                    {time.day} : {time.time}
                </p>
                ))}
            </div>
            
            <div>
                <h3>Socials</h3>
                <div className="flex-center gap-5">
                    {socials.map((social)=>(
                        <a 
                            key={social.name}
                            href={social.url}
                            target="_blank"
                            rrel="noopener noreferrer"
                            aria-label={social.name}>
                                <img 
                                    src={social.icon}/>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Contact;