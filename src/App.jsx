import {
  AspectRatio,
  Box,
  Button,
  ButtonGroup,
  Container,
  Flex,
  Grid,
  GridItem,
  HStack,
  Heading,
  Icon,
  Image,
  Link,
  Select,
  SimpleGrid,
  Tag,
  Text,
  VStack,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react'
import { ArrowForwardIcon, DownloadIcon, EmailIcon, ExternalLinkIcon, MoonIcon, SunIcon } from '@chakra-ui/icons'
import { useMemo, useState } from 'react'
import { FaFacebookF, FaGithub, FaInstagram, FaLinkedinIn } from 'react-icons/fa'
import { CONTENT } from './data/content'
import { skillGroups } from './data/skillGroups'
import { achievements } from './data/achievements'
import { photoTilesByLang } from './data/photoTiles'
import { experiencesByLang } from './data/experiences'
import { projectsByLang } from './data/projects'
import { socialLinks } from './data/socialLinks'

const LANGUAGES = [
  { code: 'en', label: 'English' },
  { code: 'mya', label: '\u1019\u103c\u1014\u103a\u1019\u102c' },
  { code: 'th', label: '\u0e44\u0e17\u0e22' },
  { code: 'zh', label: '\u4e2d\u6587' },
]

function Rating({ value }) {
  return (
    <HStack spacing={1}>
      {[1, 2, 3, 4, 5].map((point) => (
        <Text key={point} fontSize="sm" aria-label={`${value}/5`}>
          {point <= value ? '\u2605' : '\u2606'}
        </Text>
      ))}
      <Text fontSize="xs" color="gray.400">{value}/5</Text>
    </HStack>
  )
}

function ProjectImageSlot({ src, title, proofLabel, addPhotoText, height = { base: '140px', md: '160px' } }) {
  const [broken, setBroken] = useState(false)
  const borderColor = useColorModeValue('gray.300', 'whiteAlpha.400')
  const bg = useColorModeValue('gray.100', 'whiteAlpha.100')

  if (!broken) {
    return (
      <Box borderWidth="1px" borderColor={borderColor} borderRadius="lg" overflow="hidden" bg={bg} h={height}>
        <Image
          src={src}
          alt={`${title} proof`}
          w="100%"
          h="100%"
          objectFit="cover"
          objectPosition="center"
          transition="transform 0.35s ease"
          _hover={{ transform: 'scale(1.04)' }}
          onError={() => setBroken(true)}
        />
      </Box>
    )
  }

  return (
    <Box
      borderWidth="1px"
      borderStyle="dashed"
      borderColor={borderColor}
      borderRadius="lg"
      h={height}
      bg={bg}
      display="grid"
      placeItems="center"
      textAlign="center"
      p={3}
    >
      <VStack spacing={2}>
        <Text fontWeight="semibold">{proofLabel}</Text>
        <Text color="gray.400" fontSize="sm">{addPhotoText}</Text>
      </VStack>
    </Box>
  )
}

export default function App() {
  const [lang, setLang] = useState('en')
  const t = useMemo(() => CONTENT[lang] ?? CONTENT.en, [lang])
  const photoTiles = useMemo(() => photoTilesByLang[lang] ?? photoTilesByLang.en, [lang])
  const experiences = useMemo(() => experiencesByLang[lang] ?? experiencesByLang.en, [lang])
  const projects = useMemo(() => projectsByLang[lang] ?? projectsByLang.en, [lang])
  const { colorMode, toggleColorMode } = useColorMode()

  const pageBg = useColorModeValue('#f3f8ff', '#060d18')
  const textSoft = useColorModeValue('gray.700', 'gray.300')
  const cardBg = useColorModeValue('rgba(255, 255, 255, 0.85)', 'rgba(20, 24, 35, 0.84)')
  const cardBorder = useColorModeValue('gray.200', 'whiteAlpha.300')
  const navBg = useColorModeValue('rgba(255,255,255,0.76)', 'rgba(10, 14, 25, 0.78)')
  const cardShadow = useColorModeValue('0 16px 36px rgba(20, 30, 50, 0.09)', '0 16px 36px rgba(0, 0, 0, 0.35)')
  const cardInnerBg = useColorModeValue('gray.50', 'whiteAlpha.100')
  const contactCardBg = useColorModeValue('whiteAlpha.700', 'whiteAlpha.100')
  const pageText = useColorModeValue('gray.900', 'gray.100')
  const interactiveBorder = useColorModeValue('cyan.300', 'cyan.500')
  const footerColor = useColorModeValue('gray.500', 'gray.500')
  const accentAura = useColorModeValue(
    'radial-gradient(circle at 10% 6%, rgba(56,189,248,0.2), transparent 36%), radial-gradient(circle at 86% 2%, rgba(14,165,233,0.16), transparent 30%), radial-gradient(circle at 50% 96%, rgba(16,185,129,0.08), transparent 38%)',
    'radial-gradient(circle at 10% 6%, rgba(56,189,248,0.3), transparent 36%), radial-gradient(circle at 86% 2%, rgba(34,211,238,0.22), transparent 30%), radial-gradient(circle at 50% 96%, rgba(16,185,129,0.12), transparent 38%)',
  )
  const techGrid = useColorModeValue(
    'linear-gradient(to right, rgba(15,23,42,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(15,23,42,0.05) 1px, transparent 1px), linear-gradient(135deg, rgba(56,189,248,0.06), transparent 45%)',
    'linear-gradient(to right, rgba(56,189,248,0.07) 1px, transparent 1px), linear-gradient(to bottom, rgba(56,189,248,0.07) 1px, transparent 1px), linear-gradient(135deg, rgba(14,165,233,0.12), transparent 45%)',
  )
  const socialIconMap = {
    linkedin: FaLinkedinIn,
    github: FaGithub,
    instagram: FaInstagram,
    facebook: FaFacebookF,
  }

  return (
    <Box
      minH="100vh"
      bg={pageBg}
      backgroundImage={`${accentAura}, ${techGrid}`}
      backgroundSize="18px 18px"
      color={pageText}
    >
      <Container maxW="6xl" py={{ base: 5, md: 10 }}>
        <Flex
          as="nav"
          position="sticky"
          top={3}
          zIndex={20}
          p={3}
          mb={8}
          justify="space-between"
          align="center"
          borderWidth="1px"
          borderColor={cardBorder}
          borderRadius="xl"
          bg={navBg}
          boxShadow={cardShadow}
          backdropFilter="blur(10px)"
          wrap="wrap"
          gap={3}
        >
          <Heading size="sm" letterSpacing="wide">Kyaw Swar Hein</Heading>
          <HStack spacing={2} flexWrap="wrap" pt={1}>
            <Button as="a" href="#about" size="sm" variant="ghost" colorScheme="cyan">{t.nav.about}</Button>
            <Button as="a" href="#experience" size="sm" variant="ghost" colorScheme="cyan">{t.nav.experience}</Button>
            <Button as="a" href="#projects" size="sm" variant="ghost" colorScheme="cyan">{t.nav.projects}</Button>
            <Button as="a" href="#skills" size="sm" variant="ghost" colorScheme="cyan">{t.nav.skills}</Button>
            <Button as="a" href="#resume" size="sm" variant="ghost" colorScheme="cyan">{t.nav.resume}</Button>
            <Button as="a" href="#contact" size="sm" variant="ghost" colorScheme="cyan">{t.nav.contact}</Button>
          </HStack>
          <HStack spacing={2}>
            <Select size="sm" value={lang} onChange={(e) => setLang(e.target.value)} w="130px" aria-label={t.languageLabel}>
              {LANGUAGES.map((language) => (
                <option key={language.code} value={language.code}>{language.label}</option>
              ))}
            </Select>
            <Button
              size="sm"
              onClick={toggleColorMode}
              leftIcon={<Icon as={colorMode === 'dark' ? SunIcon : MoonIcon} />}
            >
              {colorMode === 'dark' ? t.themeLabelLight : t.themeLabelDark}
            </Button>
          </HStack>
        </Flex>

        <VStack align="stretch" spacing={8}>
          <Grid id="about" templateColumns={{ base: '1fr', lg: '1.05fr 0.95fr' }} gap={6}>
            <GridItem
              borderWidth="1px"
              borderColor={cardBorder}
              borderRadius="xl"
              p={{ base: 6, md: 8 }}
              bg={cardBg}
              boxShadow={cardShadow}
            >
              <VStack align="start" spacing={4}>
                <Tag colorScheme="cyan">{t.nav.about}</Tag>
                <Heading size="xl">Kyaw Swar Hein</Heading>
                <Text fontWeight="semibold" color="cyan.400">{t.headline}</Text>
                <Text color={textSoft} lineHeight={1.8}>{t.intro}</Text>
                <Text color={textSoft} lineHeight={1.8}>{t.story}</Text>

                <Box>
                  <Heading size="sm" mb={2}>{t.strengths}</Heading>
                  <HStack spacing={2} flexWrap="wrap" pt={1}>
                    {t.strengthItems.map((item) => (
                      <Tag key={item} colorScheme="cyan" variant="subtle">{item}</Tag>
                    ))}
                  </HStack>
                </Box>

                <Box>
                  <Heading size="sm" mb={2}>{t.achievements}</Heading>
                  <VStack align="start" spacing={1}>
                    {achievements.map((item) => (
                      <Text key={item} color={textSoft}>{'\uD83C\uDFC6'} {item}</Text>
                    ))}
                  </VStack>
                </Box>

                <ButtonGroup flexWrap="wrap" gap={2}>
                  <Button as="a" href="#projects" colorScheme="cyan" rightIcon={<ArrowForwardIcon />}>
                    {t.aboutCtaProjects}
                  </Button>
                  <Button as="a" href="/Kyaw_Swar_Hein_Resume.pdf" download leftIcon={<DownloadIcon />}>
                    {t.aboutCtaResume}
                  </Button>
                  <Button as="a" href="#contact" variant="outline" colorScheme="cyan">
                    {t.aboutCtaContact}
                  </Button>
                </ButtonGroup>
              </VStack>
            </GridItem>

            <GridItem
              borderWidth="1px"
              borderColor={cardBorder}
              borderRadius="xl"
              p={{ base: 6, md: 8 }}
              bg={cardBg}
              boxShadow={cardShadow}
            >
              <Heading size="md" mb={4}>{t.photoTitle}</Heading>
              <SimpleGrid columns={2} spacing={3} minH={{ base: '260px', md: '420px' }}>
                {photoTiles.map((tile) => (
                  <Box
                    key={tile.title}
                    borderRadius="xl"
                    borderWidth="1px"
                    borderColor="whiteAlpha.400"
                    bgImage={tile.image ? `linear-gradient(to top, rgba(2,6,23,0.64), rgba(2,6,23,0.16)), url('${tile.image}')` : tile.bg}
                    bgSize="cover"
                    bgPosition="center"
                    color="white"
                    p={4}
                    display="flex"
                    flexDir="column"
                    justifyContent="flex-end"
                    minH={{ base: '118px', md: '198px' }}
                    position="relative"
                    overflow="hidden"
                    transition="all 0.25s ease"
                    _hover={{ transform: 'translateY(-4px) scale(1.01)', boxShadow: '0 12px 24px rgba(0,0,0,0.28)' }}
                  >
                    <Text position="relative" fontWeight="bold">{tile.title}</Text>
                    <Text position="relative" fontSize="xs" color="whiteAlpha.900">{tile.subtitle}</Text>
                  </Box>
                ))}
              </SimpleGrid>
            </GridItem>
          </Grid>

          <Box
            id="experience"
            borderWidth="1px"
            borderColor={cardBorder}
            borderRadius="xl"
            p={{ base: 6, md: 8 }}
            bg={cardBg}
            boxShadow={cardShadow}
          >
            <Heading size="lg" mb={5}>{t.experienceTitle}</Heading>

            <VStack spacing={4} align="stretch">
              {experiences.map((project) => (
                <Grid
                  key={project.title}
                  templateColumns={{ base: '1fr', md: '260px 1fr' }}
                  gap={{ base: 4, md: 5 }}
                  p={{ base: 4, md: 5 }}
                  borderWidth="1px"
                  borderColor={cardBorder}
                  borderRadius="lg"
                  bg={cardInnerBg}
                  transition="transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease"
                  _hover={{ transform: 'translateY(-3px)', borderColor: interactiveBorder, boxShadow: '0 10px 22px rgba(0,0,0,0.16)' }}
                  _focusWithin={{ borderColor: interactiveBorder, boxShadow: '0 0 0 1px rgba(34,211,238,0.35)' }}
                >
                  <AspectRatio ratio={16 / 10} w="100%">
                    <ProjectImageSlot
                      src={project.src}
                      title={project.title}
                      proofLabel={t.proof}
                      addPhotoText={t.addPhoto}
                      height="100%"
                    />
                  </AspectRatio>

                  <VStack align="start" spacing={3} h="100%">
                    <Heading size="md" lineHeight={1.3}>
                      {project.title}
                    </Heading>
                    <Text color={textSoft} lineHeight={1.8} fontSize={{ base: 'md', md: 'lg' }}>
                      {project.description}
                    </Text>
                    <HStack spacing={2} flexWrap="wrap" pt={1}>
                      {project.tags.map((tag) => (
                        <Tag key={tag} colorScheme="cyan" variant="subtle">{tag}</Tag>
                      ))}
                    </HStack>
                    {project.links?.length > 0 && (
                      <HStack spacing={5} flexWrap="wrap" pt={1}>
                        {project.links.map((item) => (
                          <Link key={`${project.title}-${item.label}-${item.href}`} href={item.href} color={item.color ?? 'cyan.400'} isExternal fontWeight="semibold">
                            {item.label} <Icon as={ExternalLinkIcon} mx="1" />
                          </Link>
                        ))}
                      </HStack>
                    )}
                  </VStack>
                </Grid>
              ))}
            </VStack>
          </Box>

          <Box
            id="projects"
            borderWidth="1px"
            borderColor={cardBorder}
            borderRadius="xl"
            p={{ base: 6, md: 8 }}
            bg={cardBg}
            boxShadow={cardShadow}
          >
            <Heading size="lg" mb={5}>
              {t.projects}
            </Heading>

            <VStack spacing={4} align="stretch">
              {projects.map((project) => (
                <Grid
                  key={project.title}
                  templateColumns={{ base: '1fr', md: '260px 1fr' }}
                  gap={{ base: 4, md: 5 }}
                  p={{ base: 4, md: 5 }}
                  borderWidth="1px"
                  borderColor={cardBorder}
                  borderRadius="lg"
                  bg={cardInnerBg}
                  transition="transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease"
                  _hover={{ transform: 'translateY(-3px)', borderColor: interactiveBorder, boxShadow: '0 10px 22px rgba(0,0,0,0.16)' }}
                  _focusWithin={{ borderColor: interactiveBorder, boxShadow: '0 0 0 1px rgba(34,211,238,0.35)' }}
                >
                  <AspectRatio ratio={16 / 10} w="100%">
                    <ProjectImageSlot
                      src={project.src}
                      title={project.title}
                      proofLabel={t.proof}
                      addPhotoText={t.addPhoto}
                      height="100%"
                    />
                  </AspectRatio>

                  <VStack align="start" spacing={3} h="100%">
                    <Heading size="md" lineHeight={1.3}>
                      {project.title}
                    </Heading>
                    <Text color={textSoft} lineHeight={1.8} fontSize={{ base: 'md', md: 'lg' }}>
                      {project.description}
                    </Text>
                    <HStack spacing={2} flexWrap="wrap" pt={1}>
                      {project.tags.map((tag) => (
                        <Tag key={tag} colorScheme="cyan" variant="subtle">{tag}</Tag>
                      ))}
                    </HStack>
                    {project.links?.length > 0 && (
                      <HStack spacing={5} flexWrap="wrap" pt={1}>
                        {project.links.map((item) => (
                          <Link key={`${project.title}-${item.label}-${item.href}`} href={item.href} color={item.color ?? 'cyan.400'} isExternal fontWeight="semibold">
                            {item.label} <Icon as={ExternalLinkIcon} mx="1" />
                          </Link>
                        ))}
                      </HStack>
                    )}
                  </VStack>
                </Grid>
              ))}
            </VStack>
          </Box>

          <Box id="skills" borderWidth="1px" borderColor={cardBorder} borderRadius="xl" p={{ base: 6, md: 8 }} bg={cardBg} boxShadow={cardShadow}>
            <Heading size="lg" mb={5}>{t.skills}</Heading>
            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={5}>
              {skillGroups.map((group) => (
                <Box
                  key={group.title}
                  p={5}
                  borderWidth="1px"
                  borderColor={cardBorder}
                  borderRadius="lg"
                  bg={cardInnerBg}
                  transition="all 0.2s ease"
                  _hover={{ transform: 'translateY(-3px)', borderColor: interactiveBorder }}
                >
                  <Heading size="sm" mb={4}>{group.icon} {group.title}</Heading>
                  <VStack align="stretch" spacing={3}>
                    {group.items.map((item) => (
                      <Box key={item.name}>
                        <Flex justify="space-between" align="center" mb={1}>
                          <Text>{item.name}</Text>
                          <Rating value={item.rating} />
                        </Flex>
                      </Box>
                    ))}
                  </VStack>
                </Box>
              ))}
            </SimpleGrid>
          </Box>

          <Box id="resume" borderWidth="1px" borderColor={cardBorder} borderRadius="xl" p={{ base: 6, md: 8 }} bg={cardBg} boxShadow={cardShadow}>
            <Heading size="lg" mb={2}>{t.resume}</Heading>
            <Text color={textSoft} mb={4}>{t.resumeText}</Text>
            <Button as="a" href="/Kyaw_Swar_Hein_Resume.pdf" download colorScheme="cyan" leftIcon={<DownloadIcon />}>
              {t.aboutCtaResume}
            </Button>
          </Box>

          <Box id="contact" borderWidth="1px" borderColor={cardBorder} borderRadius="xl" p={{ base: 6, md: 8 }} bg={cardBg} boxShadow={cardShadow}>
            <Heading size="lg" mb={2}>{t.contact}</Heading>
            <Text color={textSoft} mb={4}>{t.contactText}</Text>
            <VStack align="stretch" spacing={3} h="100%">
              <Link
                href="mailto:kyawswarhein3092004@gmail.com"
                display="block"
                borderWidth="1px"
                borderColor={cardBorder}
                borderRadius="lg"
                px={4}
                py={3}
                bg={contactCardBg}
                _hover={{ textDecoration: 'none', borderColor: interactiveBorder, transform: 'translateY(-2px)' }}
                transition="all 0.2s ease"
              >
                <HStack justify="space-between" spacing={3}>
                  <HStack spacing={3}>
                    <Icon as={EmailIcon} color="cyan.300" />
                    <Text color="cyan.300" fontWeight="semibold">kyawswarhein3092004@gmail.com</Text>
                  </HStack>
                </HStack>
              </Link>

              <SimpleGrid columns={{ base: 1, sm: 2 }} spacing={3}>
                {socialLinks.map((item) => {
                  const SocialIcon = socialIconMap[item.icon]
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      isExternal
                      display="block"
                      borderWidth="1px"
                      borderColor={cardBorder}
                      borderRadius="lg"
                      px={4}
                      py={3}
                      bg={contactCardBg}
                      _hover={{ textDecoration: 'none', borderColor: interactiveBorder, transform: 'translateY(-2px)' }}
                      transition="all 0.2s ease"
                    >
                      <HStack justify="space-between" spacing={3}>
                        <HStack spacing={3}>
                          <Box boxSize="26px" display="grid" placeItems="center">
                            {SocialIcon ? <Icon as={SocialIcon} boxSize={5} color="cyan.300" /> : null}
                          </Box>
                          <Text fontWeight="semibold" color={textSoft}>{item.name}</Text>
                        </HStack>
                        <Icon as={ExternalLinkIcon} color={textSoft} />
                      </HStack>
                    </Link>
                  )
                })}
              </SimpleGrid>
            </VStack>
          </Box>
        </VStack>
      <Text
        textAlign="center" color={footerColor} mt={10} fontSize="sm">
        © {new Date().getFullYear()} Kyaw Swar Hein • {t.footer}
      </Text>
      </Container>
    </Box>
  )
}
