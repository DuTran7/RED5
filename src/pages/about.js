import DefaultLayout from 'components/layouts/DefaultLayput';
import AboutPage from 'components/pages/About/AboutPage';

export default function About({ isMobile }) {
  console.log(isMobile);
  return (
    <DefaultLayout>
      <AboutPage isMobile={isMobile} />
    </DefaultLayout>
  );
}
