import React from 'react';
import { Avatar } from '@mui/material';

interface AvatarIconProps {
  src: string;
}

const AvatarIcon: React.FC<AvatarIconProps> = ({ src }) => (
  <Avatar sx={{ width: 24, height: 24 }} src={src} />
);

export default AvatarIcon;
