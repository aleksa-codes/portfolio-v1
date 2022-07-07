import Nav from './Nav';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <div className='container'>
        <main className='main'>
          <Nav />

          {children}
        </main>
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default Layout;
