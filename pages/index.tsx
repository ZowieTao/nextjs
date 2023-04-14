import Head from 'next/head';

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
          <a href="https://www.baidu.com" target="_blank">
            a tag to baidu:{`<a href="https://www.baidu.com" target="_blank">`}
          </a>
        </div>
        <div style={{ height: '30px' }} />
        <div
          onClick={() => {
            window?.open('https://www.baidu.com', '_blank');
          }}
        >
          {`click window?.open('https://www.baidu.com', '_blank');`}
        </div>
        <div style={{ height: '30px' }} />
        <div
          onClick={() => {
            window.location.href = 'https://www.baidu.com';
          }}
        >
          {`click window.location.href = 'https://www.baidu.com';`}
        </div>
      </>
    </>
  );
}
