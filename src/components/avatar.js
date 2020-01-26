import React from 'react'
import styled from 'styled-components'

import { Avatar as AntAvatar } from 'antd'

const StyledAvatar = styled(AntAvatar)`
  margin: 1em 0;
`

const Avatar = () => {
  return (
    <StyledAvatar
      size={128}
      src="https://storage.cloud.google.com/ofstad-io-bucket/11583422.jpeg"
    />
  )
}

export default Avatar
