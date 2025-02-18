// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'

// // import App from './App.tsx'
// // import { MyDocument } from './MyDocument';
// // import { Theme } from '@radix-ui/themes'
// import "@radix-ui/themes/styles.css";
// import { DncTag } from '@escola-dnc/dnc-design-system';
// import Layout from './layout';

// createRoot(document.getElementById('root')!).render(
//   <Layout>
//     <h1>Minha Aplicação React</h1>
//     <DncTag text="design-system"/>
//   </Layout>
// )


// import React from 'react';
// import ReactDOM from 'react-dom';
// import { PDFViewer } from '@react-pdf/renderer';
// import { MyDocument } from './MyDocument';

// const App = () => (
//   <PDFViewer width="100%" height="900">
//     <MyDocument />
//   </PDFViewer>
// );

// ReactDOM.render(<App />, document.getElementById('root'));

// import "./styles/globals.css"
// import { Montserrat } from "next/font/google"

// const montserrat = Montserrat({
//   subsets: ["latin"],
//   display: "swap"
// })

// export default function RootLayout({
//   children
// }: Readonly<{
//   children: React.ReactNode
// }>) {
//   return (
//     <html lang="pt">
//       <body >
//          <Providers><DncTag text="design-system" /></Providers>
//       </body>
//     </html>
//   )
// }

import App from './App.tsx'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './layout.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<App />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  </React.StrictMode>,
)