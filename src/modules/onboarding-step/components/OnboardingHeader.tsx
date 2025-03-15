import Image from 'next/image'
import React from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';

const OnboardingHeader = () => {
  return (
    <AppBar position="static" style={{ backgroundColor: '#192839', height: '48px' }}>
      <Toolbar style={{ minHeight: '48px', paddingLeft: '12px', paddingRight: '12px' }}>
        <Image src='/assets/form+.svg' alt='form+' width={108} height={28} />
      </Toolbar>
    </AppBar>
  )
}

export default OnboardingHeader