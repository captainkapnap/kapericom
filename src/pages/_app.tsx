// import '/src/styles/scss/main.scss';
import '../styles/scss/main.scss';
import { type AppType } from "next/dist/shared/lib/utils";
import "~/styles/globals.css";
import "~/styles/app.css";
import '~/styles/portfolio.css'


const MyApp: AppType = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default MyApp;
