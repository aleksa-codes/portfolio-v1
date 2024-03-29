import styles from '../styles/Contact.module.css';
import { Send, Eraser } from 'tabler-icons-react';
import PageTransition from './PageTransition';
import Avatar from './Avatar';

// const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//   e.preventDefault();
//   console.log('submit');
// };

const Contact = () => {
  return (
    <PageTransition>
      <section id='contact' className={styles.contact}>
        <h2 className='aboutMeTitle'>Contact me</h2>
        <div className={styles.contactWrap}>
          <div className={styles.contactInfo}>
            <Avatar width={181} height={192} />
            <p>
              Feel free to reach out to me at any time, I am always interested
              in <span className='underline'>new stuff</span>!
            </p>
          </div>
          {/* <div className={styles.avatar}>
          <Image src='/contact.png' alt='Avatar' width={140} height={140} />
        </div>
        <strong>Aleksa</strong>
        <a href='mailto:'>
          <span className='underline'>stojsic.aleksa@gmail.com</span>
        </a> */}
          <form
            className={styles.form}
            target='_blank'
            action='https://formsubmit.co/9f2e38d7a97aa8e4fad043b4b83b9558'
            method='POST'
            // onSubmit={handleSubmit}
          >
            <div className={styles.nameEmail}>
              <div className={styles.name}>
                <label htmlFor='name-field'>
                  Name
                  <div id='name-field'>
                    <input
                      type='text'
                      name='name'
                      className={styles.input}
                      placeholder='e.g. Bon Jovi'
                      required
                    ></input>
                  </div>
                </label>
              </div>
              <div className={styles.email}>
                <label htmlFor='email-field'>
                  Email
                  <div id='email-field'>
                    <input
                      type='email'
                      name='email'
                      className={styles.input}
                      placeholder='e.g. bon.jovi@gmail.com'
                      required
                    ></input>
                  </div>
                </label>
              </div>
            </div>
            <div>
              <label htmlFor='subject-field'>
                Subject
                <div id='subject-field'>
                  <input
                    type='text'
                    name='_subject'
                    className={styles.input}
                    placeholder="e.g. Let's Connect!"
                    required
                  ></input>
                </div>
              </label>
            </div>
            <div>
              <label htmlFor='message-field'>
                Message
                <div id='message-field'>
                  <textarea
                    placeholder='Your Message Here'
                    className={styles.input}
                    name='message'
                    rows={8}
                    required
                  ></textarea>
                </div>
              </label>
            </div>
            <div className={styles.formBtns}>
              <button type='submit' className={styles.submit}>
                Send
                <Send size={20} strokeWidth={2} />
              </button>
              <button type='reset' className={styles.reset}>
                Clear
                <Eraser size={20} strokeWidth={2} />
              </button>
            </div>
          </form>
          {/* <div className='social'>
          <a href='https://github.com/aleksa-codes' target='_noblank'>
            <svg
              version='1.1'
              role='img'
              fill='#000000'
              xmlns='http://www.w3.org/2000/svg'
              x='0px'
              y='0px'
              viewBox='262 -262 1024 1024'
            >
              <path
                d='M774-249.4c-282.9,0-512,229.1-512,512c0,226.6,146.6,417.9,350.1,485.8c25.6,4.5,35.2-10.9,35.2-24.3
 c0-12.2-0.6-52.5-0.6-95.4c-128.6,23.7-161.9-31.4-172.2-60.2c-5.8-14.7-30.7-60.2-52.5-72.3c-17.9-9.6-43.5-33.3-0.6-33.9
 c40.3-0.6,69.1,37.1,78.7,52.5c46.1,77.4,119.7,55.7,149.1,42.2c4.5-33.3,17.9-55.7,32.6-68.5c-113.9-12.8-233-57-233-252.8
 c0-55.7,19.8-101.8,52.5-137.6c-5.1-12.8-23-65.3,5.1-135.7c0,0,42.9-13.4,140.8,52.5c41-11.5,84.5-17.3,128-17.3
 c43.5,0,87,5.8,128,17.3c97.9-66.6,140.8-52.5,140.8-52.5c28.2,70.4,10.2,122.9,5.1,135.7c32.6,35.8,52.5,81.3,52.5,137.6
 c0,196.5-119.7,240-233.6,252.8c18.6,16,34.6,46.7,34.6,94.7c0,68.5-0.6,123.5-0.6,140.8c0,13.4,9.6,29.4,35.2,24.3
 c202.2-67.8,348.8-259.8,348.8-485.8C1286-20.2,1056.9-249.4,774-249.4z'
              ></path>
            </svg>{' '}
            Gitub
          </a>
          <a
            href='https://www.linkedin.com/in/aleksa-stojsic/'
            target='_noblank'
          >
            <svg
              version='1.1'
              xmlns='http://www.w3.org/2000/svg'
              role='img'
              fill='#000000'
              x='0px'
              y='0px'
              width='430.117px'
              height='430.117px'
              viewBox='0 0 430.117 430.117'
            >
              <g>
                <path
                  d='M430.117,261.543V420.56h-92.188V272.193c0-37.271-13.334-62.707-46.703-62.707
 c-25.473,0-40.632,17.142-47.301,33.724c-2.432,5.928-3.058,14.179-3.058,22.477V420.56h-92.219c0,0,1.242-251.285,0-277.32h92.21
 v39.309c-0.187,0.294-0.43,0.611-0.606,0.896h0.606v-0.896c12.251-18.869,34.13-45.824,83.102-45.824
 C384.633,136.724,430.117,176.361,430.117,261.543z M52.183,9.558C20.635,9.558,0,30.251,0,57.463
 c0,26.619,20.038,47.94,50.959,47.94h0.616c32.159,0,52.159-21.317,52.159-47.94C103.128,30.251,83.734,9.558,52.183,9.558z
 M5.477,420.56h92.184v-277.32H5.477V420.56z'
                ></path>
              </g>
            </svg>{' '}
            Linkedin
          </a>
          <a href='https://aleksa-codes.github.io/resume/' target='_noblank'>
            <svg
              role='img'
              fill='#000000'
              className='svg-icon'
              x='0px'
              y='0px'
              width='430.117px'
              height='430.117px'
              viewBox='0 0 20 20'
            >
              <path
                fill='#000000'
                d='M17.222,5.041l-4.443-4.414c-0.152-0.151-0.356-0.235-0.571-0.235h-8.86c-0.444,0-0.807,0.361-0.807,0.808v17.602c0,0.448,0.363,0.808,0.807,0.808h13.303c0.448,0,0.808-0.36,0.808-0.808V5.615C17.459,5.399,17.373,5.192,17.222,5.041zM15.843,17.993H4.157V2.007h7.72l3.966,3.942V17.993z'
              ></path>
              <path
                fill='#000000'
                d='M5.112,7.3c0,0.446,0.363,0.808,0.808,0.808h8.077c0.445,0,0.808-0.361,0.808-0.808c0-0.447-0.363-0.808-0.808-0.808H5.92C5.475,6.492,5.112,6.853,5.112,7.3z'
              ></path>
              <path
                fill='#000000'
                d='M5.92,5.331h4.342c0.445,0,0.808-0.361,0.808-0.808c0-0.446-0.363-0.808-0.808-0.808H5.92c-0.444,0-0.808,0.361-0.808,0.808C5.112,4.97,5.475,5.331,5.92,5.331z'
              ></path>
              <path
                fill='#000000'
                d='M13.997,9.218H5.92c-0.444,0-0.808,0.361-0.808,0.808c0,0.446,0.363,0.808,0.808,0.808h8.077c0.445,0,0.808-0.361,0.808-0.808C14.805,9.58,14.442,9.218,13.997,9.218z'
              ></path>
              <path
                fill='#000000'
                d='M13.997,11.944H5.92c-0.444,0-0.808,0.361-0.808,0.808c0,0.446,0.363,0.808,0.808,0.808h8.077c0.445,0,0.808-0.361,0.808-0.808C14.805,12.306,14.442,11.944,13.997,11.944z'
              ></path>
              <path
                fill='#000000'
                d='M13.997,14.67H5.92c-0.444,0-0.808,0.361-0.808,0.808c0,0.447,0.363,0.808,0.808,0.808h8.077c0.445,0,0.808-0.361,0.808-0.808C14.805,15.032,14.442,14.67,13.997,14.67z'
              ></path>
            </svg>{' '}
            Resume
          </a>
        </div> */}
        </div>
      </section>
    </PageTransition>
  );
};

export default Contact;
