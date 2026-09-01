import Navbar from '@/components/Navbar/Navbar';
import Hero from '@/components/Hero/Hero';
import About from '@/components/About/About';
import Treatments from '@/components/Treatments/Treatments';
import Payments from '@/components/Payments/Payments';
import Faq from '@/components/Faq/Faq';
import Contact from '@/components/Contact/Contact';
import Footer from '@/components/Footer/Footer';
import Galery from '@/components/Galery/Galery';
import WhatsAppBubble from '@/components/WhatsAppBubble/WhatsAppBubble';
import {
  hero,
  about,
  treatments,
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
      <Galery />
      <Payments data={payments} />
      <Faq data={faq} />
      <Contact data={contact} />
      <Footer contact={contact} />
      <WhatsAppBubble phone="523336429896" />
    </main>
  );
}
