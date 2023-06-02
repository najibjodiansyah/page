import NextLink from "next/link"
import { 
    Container, 
    Box, 
    Button,
    GridItem,
    Link,
    List,
    ListItem,
    Heading, 
    Image,
    SimpleGrid,
    useColorModeValue 
} from "@chakra-ui/react"
import { BioSection, BioYear } from '../components/bio'
import { ChevronRightIcon, EmailIcon } from '@chakra-ui/icons'
import { IoLogoInstagram, IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5'
import Section from "../components/section"
import Paragraph from "../components/paragraph"
import Layout from '../components/layouts/article'

const Page = () => {
    return (
    <Layout>
    <Container>
        <Box 
            margin={4}
            borderRadius="lg"
            bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} 
            w="100%"
            p={3} 
            mb={6} 
            textAlign="center"
            css={{ backdropFilter: 'blur(10px)' }}
        >
            Assalamualaikum, Hello ! I&apos;m a Software Engineer based in Indonesia!
        </Box>

        <Box display={{ md: "flex" }}>
            <Box flexGrow={1}>
                <Heading as="h2" variant="page-title">
                    Najib Jodiansyah
                </Heading>
                <p>Software Engineer, Digital Designer</p>
            </Box>
            <Box 
                flexShrink={0}
                mt={{ base: 4, md: 0 }}
                ml={{ md: 6 }}
                align="center"
            >
                <Image
                    borderWidth={2}
                    borderRadius="full"
                    borderStyle={"solid"}
                    borderColor="whiteAlpha.800"
                    maxWidth="100px"
                    display="inline-block"
                    src="/images/najib.jpg"
                    alt="Profile Image"
                />
            </Box>
        </Box>

        <Section delay={0.1}>
            <Heading as="h3" variant="section-title">
                 Work
            </Heading>
            <Paragraph>
          Najib is a freelance and a full-stack developer based in Bogor with a
          passion for building digital services/stuff that can help others problem.
          Graduated from Telkom University School of Electrical Engineering. Publish his 
          paper in Open Library Telkom University in 2021 with title {' '}
          <Link as={NextLink} href="https://openlibrary.telkomuniversity.ac.id/home/
          catalog/id/174185/slug/sistem-pemantauan-dan-pengelompokan-data-penggunaan
          -listrik-menggunakan-k-means-clustering-pada-gedung-telkom-university.html" passHref scroll={false}>
          ELECTRICITY USAGE MONITORING AND DATA GROUPING SYSTEM USING K-MEANS++
          CLUSTERING IN THE TELKOM UNIVERSITY BUILDING
          </Link>. 
          </Paragraph>
          
          <Paragraph>
          He is a lifetime learner who is passionate about technology. Adaptation is his
          main value to have problem-solving traits. Had strong organizational experience
          and accustomed to working more creativly.
            </Paragraph>
        <Box align="center" my={4}>
          <Button
            as={NextLink}
            href="https://drive.google.com/file/d/1t9wqHZ3MvI2Frh-s16f9hG1m4XrZHQ_x/view?usp=sharing"
            scroll={false}
            rightIcon={<ChevronRightIcon />}
            colorScheme="teal"
          >
            My Curriculum Vitae
          </Button>
        </Box>
        </Section>
        <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>1999</BioYear>
          Born in Bogor, Indonesia.
        </BioSection>
        <BioSection>
          <BioYear>2021</BioYear>
          Completed the Bachelor&apos;s Program in the Graduate School of
          Electrical Engineering at Telkom University.
        </BioSection>
        <BioSection>
          <BioYear>2022</BioYear>
          Worked at Sirclo Commerce
        </BioSection>
        <BioSection>
          <BioYear>2019 - present</BioYear>
          Working as a freelancer
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Hoby
        </Heading>
        <Paragraph>
          Learn, Art, Tech,{' '}
          <Link href="/" target="_blank">
            Drawing
          </Link>
          , {' '}
          <Link href="/" target="_blank">
            Photography
          </Link>
        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>
        <List>
        <ListItem>
            <Link href="/" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<EmailIcon />}
              >
                najibjodiansyah11@gmail.com
              </Button>
            </Link>
          </ListItem>
        <ListItem>
            <Link href="https://linkedin.com/in/najibjodiansyah" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoLinkedin />}
              >
                Najib Jodiansyah
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://github.com/najibjodiansyah" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoGithub />}
              >
                @najibjodiansyah
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://instagram.com/j0diansvah" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoInstagram />}
              >
                @j0diansvah
              </Button>
            </Link>
          </ListItem>
        </List>

        {/* <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            href="https://www.youtube.com/devaslife"
            title="Dev as Life"
            // thumbnail={thumbYouTube}
          >
            My YouTube channel (&gt;150k subs)
          </GridItem>
          <GridItem
            href="https://www.inkdrop.app/"
            title="Inkdrop"
            // thumbnail={thumbInkdrop}
          >
            A Markdown note-taking app
          </GridItem>
        </SimpleGrid> */}

        {/* <Heading as="h3" variant="section-title">
          Newsletter
        </Heading>
        <p>
          Join me on a behind-the-scenes coding journey. Weekly updates on
          projects, tutorials, and videos
        </p> */}

        {/* <Box align="center" my={4}>
          <Button
            as={NextLink}
            href="https://www.devas.life/"
            scroll={false}
            leftIcon={<EmailIcon />}
            colorScheme="teal"
          >
            Sign up my newsletter here
          </Button>
        </Box> */}
      </Section>
    </Container>
    </Layout>
    )
}

export default Page
