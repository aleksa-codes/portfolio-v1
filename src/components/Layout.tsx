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
      <script
        data-name='BMC-Widget'
        data-cfasync='false'
        src='https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js'
        data-id='aleksa'
        data-description='Support me on Buy me a coffee!'
        data-message='Thanks for visiting. Made with 💻 and ☕.'
        data-color='#79D6B5'
        data-position='Right'
        data-x_margin='4'
        data-y_margin='4'
        async
      ></script>
    </>
  );
};

export default Layout;
