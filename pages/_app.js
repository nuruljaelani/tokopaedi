/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/no-extraneous-dependencies */
import 'tailwindcss/tailwind.css';
import 'swiper/swiper.min.css';
import 'swiper/components/pagination/pagination.min.css';
import 'swiper/components/navigation/navigation.min.css';

import '../public/style/style.css';
import LoginContextProvider from '../context/LoginContext';

function MyApp({ Component, pageProps }) {
  return (
    <LoginContextProvider>
      <Component {...pageProps} />
      ;
    </LoginContextProvider>
  );
}

export default MyApp;
