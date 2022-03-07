import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head lang='en-us'>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Fredoka:wght@400;500;700&display=swap" rel="stylesheet"/>
        <title>Dalveer Singh - Full stack web developer</title>
        <link rel="icon" type="image/x-icon" href="/img/me.jpg"></link>
        <meta name="description" content="Web developer with ability to learn and collaborate in rapidly changing evironments and compositions.
          Worked through 1000+ hours of bootcamp structure, learning Javascript, Node.js, React.js, Next.js, Typescript and many more.
          Eager to tackle web development/design challenges to achieve lasting impact on user experience."/>
        <meta name="keywords" content="Dalveer, Dalveer Singh, Full Stack Web developer, Web developer, Front End, Back End, Node.js Developer, React.js Developer, Next.js Developer"/>
        <meta name="author" content="Dalveer Singh"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument