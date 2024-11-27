import { memo } from 'react';
import { Box } from '@mui/material';
import BestPhotographs from '../../../components/main/best-photographs';
import About from '../../../components/main/about';
import Support from '../../../components/main/support';
import Footer from '../../../components/main/footer';
import Steps from '../../../components/main/steps';

function MainView() {
  return (
    <Box className="wrapper">
      <BestPhotographs />
      <About />
      <Steps />
      <Support />
      <Footer />
    </Box>
  );
}

export default memo(MainView);
