import React from 'react'
import PropTypes from 'prop-types'
import Particles from 'react-particles-js'
import styled from 'styled-components'
import { colors, sizes } from 'constants/theme'

const particlesConfig = {
  particles: {
    number: {
      value: 50,
      density: {
        enable: true,
        value_area: 800,
      },
    },
    color: {
      value: colors.primary,
    },
    shape: {
      type: 'circle',
      stroke: {
        width: 0,
        color: '#000000',
      },
    },
    size: {
      value: 3,
      random: true,
    },
    line_linked: {
      enable: true,
      distance: 120,
      color: '#ffffff',
      opacity: 0.4,
      width: 0.8,
    },
  },
  interactivity: {
    detect_on: 'canvas',
    events: {
      onhover: {
        enable: true,
        mode: 'grab',
      },
      resize: true,
    },
    modes: {
      repulse: {
        distance: 100,
        duration: 0,
      },
      grab: {
        distance: 200,
        // duration: 2,
      },
    },
  },
  retina_detect: true,
}

const Wrapper = styled(Particles)`
  top: 0px;
  position: absolute;
  width: 100%;
  background-color: ${colors.headerBackground};
  z-index: 1;
  height: ${sizes.headerHeight};
`

const Component = ({ height }) => (
  <Wrapper params={particlesConfig} height={height} />
)

Component.propTypes = {
  height: PropTypes.string.isRequired,
}

export default Component
