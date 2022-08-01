import Header from '../Header/Header';
import Footer from '../Footer/Footer';

export default function Layout({
  children,
}) {
  return (
    <div className="layout">
      <Header />
      <main className="container">{children}</main>

      <Footer />
    </div>
  );
}
