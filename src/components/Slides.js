import React from 'react';

function Slides({ slides }) {
  const [index, setIndex] = React.useState(0)
  const [isPrevDisabled, setIsPrevDisabled] = React.useState(true)
  const [isNextDisabled, setIsNextDisabled] = React.useState(false)
  const [slide, setSlide] = React.useState(slides[0] || {})
  
  const handleNext = () => {
    console.log(index, slides.length)
    if (index === slides.length-1) {
      setIsNextDisabled(true)
      return
    }
    setIsPrevDisabled(false)
    setSlide(slides[index + 1])
    setIndex(index + 1)
  }

  const handleRestart = () => {
    setIndex(0)
    setIsPrevDisabled(true)
    setIsNextDisabled(false)
    setSlide(slides[0])
  }

  const handlePrev = () => {
    console.log(index, slides.length)
    if (index - 1 > 0) {
      setIsNextDisabled(false)
      setSlide(slides[index - 1])
      setIndex(index - 1)
      return
    }
    else{
      setSlide(slides[index - 1])
      setIndex(index - 1)
     
      setIsPrevDisabled(true)
    }
  }
  return (
    <div>
      <div id="navigation" className="text-center">
        <button data-testid="button-restart" onClick={handleRestart} className="small outlined" disabled={isPrevDisabled}>Restart</button>
        <button data-testid="button-prev" onClick={handlePrev} className="small" disabled={isPrevDisabled}>Prev</button>
        <button data-testid="button-next" onClick={handleNext} className="small" disabled={isNextDisabled}>Next</button>
      </div>
      <div id="slide" className="card text-center">
        <h1 data-testid="title">{slide.title}</h1>
        <p data-testid="text">{slide.text}</p>
      </div>
    </div>
  );

}

export default Slides;
