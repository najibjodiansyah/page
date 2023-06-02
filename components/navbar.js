import { forwardRef } from 'react'
import Logo from './logo'
import NextLink from 'next/link'
import {
    Box,
    Flex,
    Container,
    Link,
    Stack,
    Heading,
    Menu,
    MenuItem,
    MenuList,
    MenuButton,
    IconButton,
    useColorModeValue
} from '@chakra-ui/react'
import ThemeToggleButton from './theme-toggle-button'
import { HamburgerIcon } from '@chakra-ui/icons'

const LinkItem = ({href, path, target, children, props}) => {
    const active = path === href
    const inactiveColor = useColorModeValue('gray.800', 'whiteAlpha.900')
    return (
        <NextLink href={href}>
            <Link
                as={NextLink}
                href={href}
                scroll={false}
                p={2}
                bg={active ? 'glassTeal' : undefined}
                color={active ? '#202023' : inactiveColor}
                target={target}
                {...props}
                >
                    {children}
                </Link>
        </NextLink>
    )
}

const MenuLink = forwardRef((props, ref) => (
    <Link ref={ref} as={NextLink} {...props} />
  ))

const Navbar = props => {
    const { path } = props
    return (
        <Box
            position="fixed"
            as="nav"
            w="100%"
            bg={useColorModeValue('#ffffff40', '#20202380')}
            css={{ backdropFilter: 'blur(10px)' }}
            zIndex={2}
            {...props}
        >
            <Container
                display="flex"
                p={2}
                maxW="container.md"
                wrap="wrap"
                align="center"
                justify="space-between"
            >
                <Flex align="center" mr={5}>
                    <Heading as="h1" size="lg" letterSpacing={'tighter'}>
                        <Logo />
                    </Heading>
                </Flex>

                <Stack
                    direction={{ base: 'column', md: 'row' }}
                    display={{ base: 'none', md: 'flex' }}
                    width={{ base: 'full', md: 'auto' }}
                    alignItems="center"
                    flexGrow={1}
                    mt={{ base: 4, md: 0 }}
                >
                        <LinkItem href="/works" path={path}>
                            Works
                        </LinkItem>
                        <LinkItem href="/posts" path={path}>
                            Posts
                        </LinkItem>
                        <LinkItem href="/" path={path}>
                            Abouts
                        </LinkItem>
                </Stack>

                <Box align="right" flex={1}>
                <ThemeToggleButton />
                    <Box flex={20} display={{ base: 'inline-block', md: 'none' }}>
                        <Menu isLazy id="navbar-menu">
                            <MenuButton
                                as={IconButton}
                                icon={<HamburgerIcon />}
                                variant="outline"
                                aria-label="Options"
                            />
                            <MenuList>
                                <NextLink href="/works" passHref>
                                    <MenuItem as={Link}>Works</MenuItem>
                                </NextLink>
                                <NextLink href="/posts" passHref>
                                    <MenuItem as={Link}>Posts</MenuItem>
                                </NextLink>
                                <NextLink href="/" passHref>
                                    <MenuItem as={Link}>Abouts</MenuItem>
                                </NextLink>
                            </MenuList>
                        </Menu>
                    </Box> 
                </Box>
            </Container>
        </Box>
    )
}

export default Navbar