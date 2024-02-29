import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';

export default function LoadingAnimation() {
  return (
    <Box sx={{ width: 300 }}>
      <Skeleton />
      <Skeleton animation="wave" />
      <Skeleton animation={false} />
    </Box>
  );
}
