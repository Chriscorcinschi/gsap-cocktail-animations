import { useRef, useState } from "react";
import { allCocktails } from "../../constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import leftLeaf from "/images/slider-left-leaf.png";
import rightLeaf from "/images/slider-right-leaf.png";
import rightArrow from "/images/right-arrow.png" ;
import leftArrow from "/images/left-arrow.png";

const DrinksMenu = () => {
  const contentRef = useRef();
  const [currentIndex, setCurrentIndex] = useState(0);

useGSAP(()=>{
    gsap.fromTo('#title', 
      //from
      { opacity: 0 }, 
      //to
      { opacity: 1, duration: 1 }
      );

    gsap.fromTo('.cocktail img', 
      //from
      { opacity: 0, xPercent: -100 }, 
      //to
      { xPercent: 0, 
        opacity: 1, 
        duration: 1, 
        ease: 'power1.inOut'}
      )
    gsap.fromTo('.details h2', 
      { yPercent: 100, opacity: 0 }, 
        { yPercent: 0, 
          opacity: 100, 
          ease: 'power1.inOut'}
        )  
    gsap.fromTo('.details p', 
      { yPercent: 100, 
        opacity: 0 }, 
        { yPercent: 0, 
          opacity: 100, 
          ease: 'power1.inOut'}
        )
        
        
        
      },[currentIndex])
      
      

  const totalCocktails = allCocktails.length;

  const goToSlide = (index) => {
    const newIndex = (index + totalCocktails) % totalCocktails;
    
    setCurrentIndex(newIndex);
  }

  const getCocktailAt = (indexOffset) => {
    return allCocktails[(currentIndex + indexOffset + totalCocktails)% totalCocktails]
  }

  const currentCocktail = getCocktailAt(0);
  const prevCocktail = getCocktailAt(-1);
  const nextCocktail = getCocktailAt(1);

  
  
    
  return (
    <section 
      id="drinksmenu"
      aria-labelledby="drinksmenu-heading">
      
        <img 
          src={leftLeaf}
          alt="left-leaf" 
          id="dm-left-leaf" />

        <img 
          src={rightLeaf} 
          alt="right-leaf" 
          id="dm-right-leaf" />

          <h2 
            id="drinksmenu-heading"
            className="sr-only">
              Cocktail Menu
          </h2>

          <nav
            className="cocktail-tabs"
            aria-label="Cocktail Navigation">

              {allCocktails.map((cocktail, index) => {
                const isActive = index === currentIndex

                return (
                  <button key={cocktail.id} className={`
                          ${isActive 
                            ? 'text-white border-white'
                            :'text-white/50 border-white/50'
                          }`}
                          onClick={() => goToSlide(index)}
                    >  
                    {cocktail.name}
                  </button>
                )
              })}
          </nav>

          <div className="content">
            <div className="arrows">

              <button 
                className="text-left" 
                onClick={() => goToSlide(currentIndex - 1)}>
                  <span>{prevCocktail.name}</span>
                  <img 
                      src={rightArrow}
                      alt="right-arrow" 
                      aria-hidden="true" />
              </button>
              
              <button 
                className="text-left" 
                onClick={() => goToSlide(currentIndex + 1)}>
                <span>{nextCocktail.name}</span>
                <img 
                    src={leftArrow} 
                    alt="left-arrow" 
                    aria-hidden="true" />
              </button>
            </div>
            
            <div className="cocktail">
              <img 
                  src={currentCocktail.image} 
                  className="object-contain"/>
            </div>
            
            <div className="recipe">
              
              <div ref={contentRef} className="info">
                <p>Recipe for:</p>
                <p id="title">
                    {currentCocktail.name}
                </p>
              </div>
              
              <div className="details">
                <h2>{currentCocktail.title}</h2>
                <p>{currentCocktail.description}</p>
              </div>

            </div>
          </div>
            </section>
          )
        }

export default DrinksMenu;