import React, { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { useHistory } from 'react-router'
import PurpleBg from './../Assets/purple-bg.jpg'
import PurpleLogo from './../Assets/color-logo-white.png'
import OrangeBg from './../Assets/orange-bg.jpg'
import OrangeLogo from './../Assets/color-logo-white.png'

/**
* @author
* @function Quiz
**/

// We are going to have a list of questions
// from this list we're going to randomly select an index
// this index will be stored in memory and deleted from the other array
// we then run an conditional statement to determine what are the answers
// we then concatinate when the answer is correct or do nothing if it is not.
// we're nor going to call and random search function on the old array for another question.

const Quiz = (props) => {
    var completed = []
    var points = 0
    var counter = 0
    const titleContainerRef = useRef()
    const question = useRef()
    const questionNumber = useRef()
    const orangeLogoRef = useRef()
    const purpleLogoRef = useRef()
    const a = useRef()
    const b = useRef()
    const c = useRef()
    const d = useRef()
    const e = useRef()
    const bg = useRef()
    const showA = useRef()
    const showB = useRef()
    const showC = useRef()
    const showD = useRef()
    const showE = useRef()
    const keyMap = ['a', 'b', 'c', 'd', 'e']
    const questionaire_limit = 5
    const list_of_questions = [
      {
        question: 'The bud structure of Space Cake can be described as:',
        options: {
          a: 'A. Dark purple buds with blazing orange pistils, caked with trichomes',
          b: 'B. Bright green, airy buds',
          c: 'C. Dark green with orange pistils'
        },
        answer: 'a',
        bg: `url(${OrangeBg})`
      },
      {
        question: 'What THC range is Space Cake dried flower?',
        options: {
          a: 'A. 16-22% THC',
          b: 'B. 18-24% THC',
          c: 'C. 20-26% THC'
        },
        answer: 'c',
        bg: `url(${PurpleBg})`
      },
      {
        question: "What is the flavour and aroma profile of Space Cake?",
        options: {
          a: 'A. Fruity & Spicy',
          b: 'B. Musk & Creamy Diesel',
          c: 'C. Cheesy & Sour'
        },
        answer: 'b',
        bg: `url(${OrangeBg})`
      },
      {
        question: "What is the cultivar lineage cross for Space Cake?",
        options: {
          a: "A. GSC x Snow Leopard",
          b: "B. GSC x Snow Lotus",
          c: "C. Mac 1 x Snow Lotus"
        },
        answer: 'b',
        bg: `url(${PurpleBg})`
      },
      {
        question: 'Space Cake is what plant type?',
        options: {
          a: 'A. Hybrid Indica-dominant',
          b: 'B. Hybrid Sativa-dominant ',
          c: 'C. CBD dominant'
        },
        answer: 'a',
        bg: `url(${OrangeBg})`
      }
    ]
    const history = useHistory()

    useEffect(() => {
        randList()
    }, [])

    const randList = () => {
      let selectedColor = completed.length % 2 === 0 ? '#6045B9' : '#E25640'

      keyMap.forEach(key => {
        // Set answer colors to orange or purple depending on odd or even question index
        if (completed.length % 2 === 0) { // Orange
          eval(`show${key.toUpperCase()}`).current.style = "background-color: " + selectedColor
          titleContainerRef.current.className = 'orange'
          orangeLogoRef.current.className = 'logo'
          purpleLogoRef.current.className = 'logo displayNone'
        } else { // Purple
          eval(`show${key.toUpperCase()}`).current.style = "background-color: " + selectedColor
          titleContainerRef.current.className = 'purple'
          orangeLogoRef.current.className = 'logo displayNone'
          purpleLogoRef.current.className = 'logo'
        }
      })

      if (completed.length >= questionaire_limit) {
        if(points < 4){
          localStorage.setItem('points', points)
          history.push('/points')
        }
        else{
          localStorage.setItem('points', points)
          history.push('/data-capture')
        }
      } else {
        let random = counter++
        const check_completed = completed.find(element => element == random)

        // For some reason zero is being ignored. That why it's in the conditional statement below.
        if (check_completed || check_completed === 0) {
          randList()
        }
        else {
          completed.push(random)
          question.current.textContent = list_of_questions[random].question
          bg.current.style.backgroundImage = list_of_questions[random].bg
          // bg.current.style.backgroundSize = '100% 100%'

          keyMap.forEach(key => {
            eval(key).current.className = `ans`
            if (list_of_questions[random].options[key]) {
              eval(key).current.textContent = list_of_questions[random].options[key]
              eval(`show${key.toUpperCase()}`).current.className = `option ${key}`
            } else {
              eval(`show${key.toUpperCase()}`).current.className = 'displayNone'
            }
          })
        }
      }
    }

    const selected_answer = (selected_data) => {

      let index = completed[completed.length -1]
      let selectedColor = completed.length % 2 === 0 ? '#E25640' : '#6045B9'

      if(selected_data == list_of_questions[index].answer) {
        gsap.to(`.${selected_data}`, {backgroundColor: selectedColor, duration: 0.5})
        eval(selected_data).current.textContent = 'Correct.';
        eval(selected_data).current.className = `ans correct`;
        points++;
      } else{
        gsap.to(`.${selected_data}`, {backgroundColor: selectedColor, duration: 0.5})
        eval(selected_data).current.className = `ans incorrect`;
        eval(selected_data).current.textContent = 'Incorrect';
      }

      setTimeout(()=>{
        questionNumber.current.textContent = completed.length + 1
        randList()
      }, 1000)
    }

    return (
      <div className="quiz-container" ref={bg}>
        <div id='quizHolder'>
            <div id='titleHolder' ref={titleContainerRef}>
              <div className="questionNumber" ref={questionNumber}>1</div>
              <h1 ref={question}></h1>
            </div>
            <div id='answer_list'>
                <div ref={showA} className='displayNone' onClick={() => selected_answer('a')}><p className='ans' ref={a}></p></div>
                <div ref={showB} className='displayNone' onClick={() => selected_answer('b')}><p className='ans' ref={b}></p></div>
                <div ref={showC} className='displayNone' onClick={() => selected_answer('c')}><p className='ans' ref={c}></p></div>
                <div ref={showD} className='displayNone' onClick={() => selected_answer('d')}><p className='ans' ref={d}></p></div>
                <div ref={showE} className='displayNone' onClick={() => selected_answer('e')}><p className='ans' ref={e}></p></div>
            </div>
            <img ref={orangeLogoRef} className="colorLogo" src={OrangeLogo} alt="Color Cannabis Orange Logo" />
            <img ref={purpleLogoRef} className="colorLogo displayNone" src={PurpleLogo} alt="Color Cannabis Orange Logo" />
            <p className="legal_copy">
              All product images and labels provided for information and illustrative purposes
              only, and do not represent the actual cannabis product, product label or it’s appearance.
            </p>
        </div>
      </div>
    )

}

export default Quiz
