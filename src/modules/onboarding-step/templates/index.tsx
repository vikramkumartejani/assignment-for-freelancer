import React from 'react'
import OnboardingHeader from '../components/OnboardingHeader'
import FormTimeline from '../components/FormTimeline'
import { Box } from '@mui/material'

const OnboardingStep: React.FC = () => {
  return (
    <Box sx={{ bgcolor: '#E3EAF3' }}>
      <OnboardingHeader />
      <Box sx={{ my: 3 }}>
        <FormTimeline />
      </Box>
    </Box>
  )
}

export default OnboardingStep