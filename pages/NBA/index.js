import Head from 'next/head';
import React from 'react';
import Footer from '../../common/footer';
import Sidebar from '../../common/sidebar';
import Topbar from '../../common/Topbar';

function NBA() {
  return (
    <div class="p-0">
      <Head>
        <title>Onyx</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <body id="page-top">
        <div id="wrapper">
          <Sidebar />
          <div id="content-wrapper" class="d-flex flex-column">
            <div id="content">
              <div id="content-wrapper" class="d-flex flex-column">
                <Topbar />
              </div>

              Coming soon!

              
            </div>
          </div>
        </div>
      </body>

      <Footer />
    </div>
  );
}

export default NBA;