import React from "react";
import Header from "./Header";
import { Container } from "semantic-ui-react";

import Head from "next/head"; //this will move it to the head of the html.

export default function Layout(props) {
  return (
    <Container>
      <Head>
        <link
          rel="stylesheet"
          href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css"
        />
      </Head>
      <Header />
      {props.children}
    </Container>
  );
}
