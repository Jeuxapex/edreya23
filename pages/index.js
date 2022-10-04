import Hakkinda from "../src/components/About";
import Iletisim from "../src/components/Contact";
import Anasayfa from "../src/components/Home";
import News from "../src/components/News";
import Portfolyo from "../src/components/Portfolio";
import Layout from "../src/layouts/Layout";

const Index = () => {
  return (
    <Layout>
      {/* HOME */}
      <Anasayfa />
      {/* /HOME */}
      {/* ABOUT */}
      <Hakkinda />
      {/* /ABOUT */}
      {/* PORTFOLIO */}
      <Portfolyo />
      {/* /PORTFOLIO */}
      {/* NEWS */}
      <News />
      {/* /NEWS */}
      {/* CONTACT */}
      <Iletisim />
    </Layout>
  );
};
export default Index;
