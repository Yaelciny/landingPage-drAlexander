import Navbar from '@/components/Navbar/Navbar';
import Hero from '@/components/Hero/Hero';
import About from '@/components/About/About';
import Treatments from '@/components/Treatments/Treatments';
import CommonCases from '@/components/CommonCases/CommonCases';
import Payments from '@/components/Payments/Payments';
import Faq from '@/components/Faq/Faq';
import Contact from '@/components/Contact/Contact';
import Footer from '@/components/Footer/Footer';
import Galery from '@/components/Galery/Galery';
import WhatsAppBubble from '@/components/WhatsAppBubble/WhatsAppBubble';
import CallBubble from '@/components/CallBubble/CallBubble';
import {
  hero,
  about,
  treatments,
  commonCases,
  payments,
  faq,
  contact,
} from '@/data/nat';

export default function Page() {
  return (
    <main>
      <Navbar />
      <Hero data={hero} />
      <About data={about} />
      <Treatments data={treatments} />
      <CommonCases data={commonCases} />
      <Galery />
      <Payments data={payments} />
      <Faq data={faq} />
      <Contact data={contact} />
      <Footer contact={contact} />
      <CallBubble phone="523323881703" />
      <WhatsAppBubble phone="523323881703" />
    </main>
  );
}
