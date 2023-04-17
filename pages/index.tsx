import './global.css';

import Head from 'next/head';

import { wait } from '@/util';

export default function Home() {
  return (
    <>
      <Head>
        <title>Zowie&apos;s Page</title>
        <meta name="description" content="nil" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <>
        <div>
          <a href="https://www.baidu.com/s?wd=hello" target="_blank">
            a tag to baidu:
            {`<a href="https://www.baidu.com/s?wd=hello" target="_blank">`}
          </a>
        </div>

        <div style={{ height: '30px' }} />

        <div
          onClick={() => {
            const aTag = document.createElement('a');
            aTag.setAttribute('href', 'https://www.baidu.com/s?wd=hello');
            aTag.setAttribute('target', '_blank');
            aTag.setAttribute('download', 'name');
            document.body.appendChild(aTag);
            aTag.click();
            aTag.remove();
          }}
        >
          create element to simulator a tag to baidu:
          {`<a href="https://www.baidu.com/s?wd=hello" target="_blank">`}
        </div>

        <div style={{ height: '30px' }} />

        <div
          onClick={() => {
            window?.open('https://www.baidu.com/s?wd=hello', '_blank');
          }}
        >
          {`click window?.open('https://www.baidu.com/s?wd=hello', '_blank');`}
        </div>

        <div style={{ height: '30px' }} />

        <div
          onClick={async () => {
            await wait(1000);
            window?.open('https://www.baidu.com/s?wd=hello', '_blank');
          }}
        >
          {`click ASYNC to window?.open('https://www.baidu.com/s?wd=hello', '_blank');`}
        </div>

        <div style={{ height: '30px' }} />

        <div
          onClick={() => {
            window.location.href = 'https://www.baidu.com/s?wd=hello';
          }}
        >
          {`click window.location.href = 'https://www.baidu.com/s?wd=hello';`}
        </div>

        <div style={{ height: '30px' }} />

        <div
          onClick={async () => {
            await wait(1000);
            window.location.href = 'https://www.baidu.com/s?wd=hello';
          }}
        >
          {`click ASYNC window.location.href = 'https://www.baidu.com/s?wd=hello';`}
        </div>
      </>
    </>
  );
}
