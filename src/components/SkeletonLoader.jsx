import { Skeleton, Box } from "@mui/material";

const SkeletonLoader = () => {
  return (
    <Box width="100%" padding={2}>
      <Skeleton variant="text" width="80%" height={40} />
      <Skeleton variant="rectangular" width="100%" height={200} />
      <Skeleton variant="text" width="60%" />
      <Skeleton variant="text" width="90%" />
    </Box>
  );
};

export default SkeletonLoader;
