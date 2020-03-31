import React from 'react'
import styled from 'styled-components'

import { Avatar as AntAvatar } from 'antd'

const StyledAvatar = styled(AntAvatar)`
  /* margin: 2em 0; */
  margin-top: 1em;
`

const Avatar = () => {
  return (
    <StyledAvatar
      size={128}
      src="https://storage.googleapis.com/ofstad-io-bucket/11583422.jpeg"
    />
  )
}

export default Avatar
