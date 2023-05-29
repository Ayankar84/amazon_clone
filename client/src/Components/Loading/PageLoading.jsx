import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';

const PageLoading = () => {
  return (
    <div className="circle">
      <CircularProgress />
      <h2> Loading....</h2>
    </div>
  )
}

export default PageLoading
