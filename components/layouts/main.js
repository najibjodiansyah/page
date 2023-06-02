import Head from 'next/head'
import {Box, Container} from '@chakra-ui/react'
import Navbar from '../navbar'
import Footer from '../footer'

const Main = ({ children, router }) => {
   return (
        <Box as="main" pb = {8}>
            <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="description" content="Jodiansyah's homepage" />
            <meta name="author" content="Muhammad Najibuddin Jodiansyah" />
            <meta name="author" content="craftzdog" />
            <link rel="apple-touch-icon" href="apple-touch-icon.png" />
            <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
            <meta name="twitter:title" content="Najib Vanjodi" />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:site" content="@najibvanjody" />
            <meta name="twitter:creator" content="@najibvanjody" />
            <meta property="og:site_name" content="Najib Jodiansyah" />
            <meta name="og:title" content="Muhammad Najibuddin Jodiansyah" />
            <meta property="og:type" content="website" />
            <meta property="og:image" content="https://www.craftz.dog/card.png" />
               <title> Najib Jodiansyah's - site</title>
            </Head>

            <Navbar path={router.asPath} />

            <Container maxW="container.md" pt={14}>
                {children}
               <Footer />
            </Container>
        </Box>
   )
}

export default Main