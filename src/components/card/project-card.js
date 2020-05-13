import React from 'react'
import styled from 'styled-components'
import Card from 'components/card'
import PropTypes from 'prop-types'

const LinksContainer = styled.div`
  div {
    display: inline-block;
  }
  div:not(:last-child):after {
    content: '|';
    padding: 0 0.3em;
  }
`

export const ProjectCard = ({ title, image: Image, children, links }) => {
  const linkItems =
    links &&
    links.map((item, index) => (
      <div key={index}>
        <a href={item.href} target="_blank" rel="noopener noreferrer">
          {item.text}
        </a>
      </div>
    ))
  return (
    <Card image={Image}>
      <h2>{title}</h2>
      <p>{children}</p>
      <LinksContainer>{linkItems}</LinksContainer>
    </Card>
  )
}

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.func.isRequired,
  children: PropTypes.string.isRequired,
  links: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
    })
  ),
}

export default ProjectCard
