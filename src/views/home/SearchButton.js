// @flow
import * as React from 'react'
import styles from 'src/consts/styles'

type searchButtonProps = {
  placeholder: string,
}
const SearchButton = (props: searchTextInputProps) => {
  const {home} = styles
  return (
      <div className='search-buton-wrapper'>
        {/*language=SCSS*/}
        <style jsx>{`
          .search-button-wrapper {
          }

          .download-button-container {
            position: fixed;
            width: 300px;
            height: 70px;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            text-align: center;
          }

          .download-button-container.downloading .download-button {
            width: 70px;
          }

          .download-button-container.downloading .button-text-download {
            top: 80%;
            transform: translateY(-50%) scale(1);
            opacity: 0;
          }

          .download-button-container.downloading .button-wave {
            left: -10px;
          }

          .download-button-container.downloading .button-wave:before {
            background-color: transparent;
            transform: scale(1.6);
          }

          .download-button-container.downloading .button-icon-svg {
            transform: rotate(0deg);
          }

          .download-button-container.downloading .button-icon-path-square {
            fill: white;
          }

          .download-button-container.progressing .button-icon {
            left: 50%;
            transform: translate(-50%, -50%);
          }

          .download-button-container.progressing .button-ball {
            left: -9px;
            top: -9px;
            width: 18px;
            height: 18px;
          }

          .download-button-container.completed .download-button {
            width: 230px;
          }

          .download-button-container.completed .button-icon {
            left: 50%;
            transform: translate(-50%, -50%);
          }

          .download-button-container.completed .button-icon, .download-button-container.completed .button-svg {
            opacity: 0;
            transition: 0.3s;
          }

          .download-button-container.completed .button-text-done {
            transform: translate(-50%, -50%);
            opacity: 1;
            transition: 0.8s 1s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            /* easeOutBack */
          }

          .download-button-container.completed .border-path {
            stroke: #00FF8D;
          }

          .download-button-container.completed .button-ball {
            left: 50%;
            transition: none;
            animation: ball-throw-up 0.5s ease-out forwards, ball-throw-down 0.5s 0.5s ease-in forwards, ball-rubber 1s forwards;
          }


          @keyframes ball-throw-up {
            from {
              -webkit-transform: translate(-50%, 17.5px);
              transform: translate(-50%, 17.5px);
            }
            to {
              -webkit-transform: translate(-50%, -60px);
              transform: translate(-50%, -60px);
              background-color: #00FF8D;
            }
          }



          @keyframes ball-throw-down {
            from {
              -webkit-transform: translate(-50%, -60px);
              transform: translate(-50%, -60px);
            }
            to {
              -webkit-transform: translate(-50%, 80px);
              transform: translate(-50%, 80px);
            }
          }



          @keyframes ball-rubber {
            from {
              width: 18px;
            }
            25% {
              width: 13.5px;
            }
            50% {
              width: 18px;
            }
            to {
              width: 9px;
            }
          }

          .download-button {
            position: relative;
            display: inline-block;
            width: 300px;
            height: 70px;
            background-color: #2C2E2F;
            border: none;
            box-shadow: 0 0 0 3px #02D1FF;
            border-radius: 100px;
            cursor: pointer;
            transition: 1s width, 0.3s box-shadow;
          }

          .download-button, .download-button:focus {
            padding: 0;
            outline: none;
          }

          .download-button::-moz-focus-inner {
            border: 0;
          }

          .download-button:hover, .download-button:active, .download-button:focus {
            box-shadow: 0 0 0 3px #02D1FF, 0 0 20px 3px #007f9b;
          }

          .download-button.button-hidden {
            box-shadow: 0 0 0 3px transparent;
          }

          .download-button.button-hidden:hover, .download-button.button-hidden:active, .download-button.button-hidden:focus {
            box-shadow: 0 0 0 3px transparent, 0 0 20px 3px #007f9b;
          }

          .button-icon {
            position: absolute;
            left: 5px;
            top: 50%;
            transform: translateY(-50%);
            width: 60px;
            height: 60px;
            background-color: #02D1FF;
            border-radius: 100%;
          }

          .button-icon-svg {
            width: 100%;
            height: 100%;
            transform: rotate(-225deg);
            transition: 1s -webkit-transform;
            transition: 1s transform;
            transition: 1s transform, 1s -webkit-transform;
          }

          .button-icon-path {
            fill: transparent;
            stroke-linecap: round;
            stroke-linejoin: round;
            stroke-width: 3px;
            stroke: white;
          }

          .button-icon-path-square {
            transition: 0.8s 0.2s fill;
          }

          .button-text {
            position: absolute;
            top: 50%;
            color: white;
            font-size: 1.3em;
            pointer-events: none;
          }

          .button-text-download {
            left: 120px;
            transform: translateY(-50%);
            transition: transform 1s, top 0.3s 0.2s, opacity 0.3s 0.2s;
          }

          .button-text-done {
            left: 50%;
            transform: translate(-50%, 35px);
            opacity: 0;
            transition: 0.5s opacity, 1s transform;
          }

          .button-wave {
            position: absolute;
            display: flex;
            align-items: center;
            justify-content: center;
            left: -9999em;
            top: 50%;
            transform: translateY(-50%);
            width: 90px;
            height: 90px;
            border-radius: 100%;
            overflow: hidden;
            pointer-events: none;
          }

          .button-wave:before {
            content: '';
            width: 60px;
            height: 60px;
            background-color: white;
            border: 5px solid white;
            border-radius: 100%;
            transition: 0.5s background, 1s transform;
            transition-timing-function: ease-out;
          }

          .button-progress-container {
            position: absolute;
            width: 100px;
            height: 100px;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            pointer-events: none;
          }

          .button-svg {
            width: 100%;
            height: 100%;
          }

          .button-svg .button-circular-progress {
            fill: none;
            stroke-width: 5px;
            stroke: white;
          }

          .button-ball {
            position: absolute;
            left: 0;
            top: 0;
            width: 0;
            height: 0;
            background-color: white;
            border-radius: 100%;
            pointer-events: none;
            transition: 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.875);
            /* easeOutBackModified */
            transition-property: left, top, width, height;
          }

          .button-linear-progress {
            position: absolute;
            width: 50px;
            height: 50px;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            background-color: #00AFD7;
            border-radius: 100%;
            overflow: hidden;
          }

          .button-linear-progress-bar {
            display: inline-block;
            width: 100%;
            height: 100%;
            background-color: #02D1FF;
          }

          .border-svg {
            position: absolute;
            top: -5px;
            left: 50%;
            transform: translateX(-50%);
            pointer-events: none;
          }

          .border-path {
            fill: #2C2E2F;
            stroke-width: 3px;
            stroke: #02D1FF;
            transition: 0.3s 1s stroke;
          }

          .hidden {
            visibility: hidden !important;
            opacity: 0 !important;
          }
        `}</style>
        {/* Button container */}
        <div class="download-button-container">
          {/* The real button */}
          <button class="download-button">
            <span class="button-text-real hidden">download</span>
            {/* Extra elements to perform the animations */}
            <span class="button-icon">
            <span class="button-linear-progress">
                <span class="button-linear-progress-bar"></span>
            </span>
            <svg class="button-icon-svg" viewBox="0 0 60 60">
                <path class="button-icon-path button-icon-path-square" d="M 20 40 l 0 -20 l 20 0 l 0 20 Z"></path>
                <path class="button-icon-path button-icon-path-line" d="M 40 20 l -20 20"></path>
            </svg>
        </span>
          </button>
          {/* Extra elements to perform the animations */}
          <svg class="border-svg" width="240px" height="100px" viewBox="0 0 240 100">
            <path class="border-path hidden"
                  d="M 40 3.5 a 36.5 36.5 0 0 0 -36.5 36.5 a 36.5 36.5 0 0 0 36.5 36.5 C 70 76.5 90 76.5 120 76.5 S 170 76.5 200 76.5 a 36.5 36.5 0 0 0 36.5 -36.5 a 36.5 36.5 0 0 0 -36.5 -36.5 Z"></path>
          </svg>
          <span class="button-text button-text-download">download</span>
          <span class="button-text button-text-done">done!</span>
          <div class="button-wave"></div>
          <div class="button-progress-container">
            <svg class="button-svg">
              <path class="button-circular-progress"
                    d="M 50 50 m 0 -32.5 a 32.5 32.5 0 0 1 0 65 a 32.5 32.5 0 0 1 0 -65"></path>
            </svg>
            <span class="button-ball"></span>
          </div>
        </div>

      </div>
  )
}

SearchButton.propTypes = {}

export default SearchButton