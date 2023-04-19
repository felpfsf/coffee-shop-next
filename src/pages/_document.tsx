import { Html, Head, Main, NextScript } from "next/document";
import { getCssText } from "../styles";

export default function Document() {
  return (
    <Html lang='en'>
      <Head>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link
          rel='preconnect'
          href='https://fonts.gstatic.com'
          crossOrigin='anonymous'
        />
        <link
          href='https://fonts.googleapis.com/css2?family=Baloo+2:wght@700;800&family=Roboto:wght@400;700&display=swap'
          rel='stylesheet'
        />
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/apple-touch-icon.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/favicon-32x32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/favicon-16x16.png'
        />
        <link rel='manifest' href='/site.webmanifest'></link>
        <meta
          name='description'
          content='Peça seu café favorito online em nossa loja de café e aproveite a entrega em sua porta. Oferecemos uma ampla seleção de deliciosos sabores de café para você escolher. Compre agora!'
        />
        <meta
          name='keywords'
          content='loja de café, café online, entrega de café, sabores de café'
        />
        <meta name='author' content='Coffee Shop' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta
          property='og:title'
          content='Peça Café Delicioso Online e Receba na Sua Porta | Coffee Shop'
        />
        <meta
          property='og:description'
          content='Peça seu café favorito online em nossa loja de café e aproveite a entrega em sua porta. Oferecemos uma ampla seleção de deliciosos sabores de café para você escolher. Compre agora!'
        />
        <meta
          property='og:image'
          content='https://www.coffee-shop.com.br/images/og-image.jpg'
        />
        <meta property='og:url' content='https://www.coffee-shop.com.br' />
        <meta
          name='twitter:title'
          content='Peça Café Delicioso Online e Receba na Sua Porta | Coffee Shop'
        />
        <meta
          name='twitter:description'
          content='Peça seu café favorito online em nossa loja de café e aproveite a entrega em sua porta. Oferecemos uma ampla seleção de deliciosos sabores de café para você escolher. Compre agora!'
        />
        <meta
          name='twitter:image'
          content='https://www.coffee-shop.com.br/images/twitter-image.jpg'
        />
        <meta name='twitter:card' content='summary_large_image' />
        <style id='stitches' dangerouslySetInnerHTML={{ __html: getCssText }} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
