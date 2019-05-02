/* eslint-disable react/prefer-stateless-function */
import React from 'react'
import Particles from 'react-particles-js';
import './index.less'

class Login extends React.Component {

  render () {
    return (
      <div className="login">
        <Particles
              params={{
                "particles": {
                    "number": {
                        "value": 500,
                        "density": {
                            "enable": true,
                            "value_area": 1500
                        }
                    },
                    "line_linked": {
                        "enable": true,
                        "opacity": 0.02
                    },
                    "move": {
                        "direction": "right",
                        "speed": 0.05
                    },
                    "size": {
                        "value": 1
                    },
                    "opacity": {
                        "anim": {
                            "enable": true,
                            "speed": 1,
                            "opacity_min": 0.05
                        }
                    }
                },
                "interactivity": {
                    "events": {
                        "onclick": {
                            "enable": true,
                            "mode": "push"
                        }
                    },
                    "modes": {
                        "push": {
                            "particles_nb": 1
                        }
                    }
                },
                "retina_detect": true}}
              className="login"
              />
      </div>
    )
  }
}

export default Login