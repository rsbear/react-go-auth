import Document, { Head, Main, NextScript } from "next/document";
import { extractCritical } from "@emotion/server";

interface GetProps<P = {}> extends React.SFC<P> {
  getInitialProps?: (context: any) => Promise<P>;
}

const DocFC: GetProps<any> = props => {
  return (
    <html>
      <Head>
        <style
          // data-emotion-css={props.ids.join(" ")}
          dangerouslySetInnerHTML={{ __html: props.css }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </html>
  );
};

DocFC.getInitialProps = ({ renderPage }) => {
  const page = renderPage();
  const styles = extractCritical(page.html);
  return { ...page, ...styles };
};

export default class MyDocument extends Document {
  render() {
    return <DocFC />;
  }
}
