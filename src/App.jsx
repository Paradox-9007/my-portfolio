import {
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
import { CONTENT } from './data/content'
import { skillGroups } from './data/skillGroups'
import { achievements } from './data/achievements'

const LANGUAGES = [
  { code: 'en', label: 'English' },
  { code: 'mya', label: 'မြန်မာ' },
  { code: 'th', label: 'ไทย' },
  { code: 'zh', label: '中文' },
]

function Rating({ value }) {
  return (
    <HStack spacing={1}>
      {[1, 2, 3, 4, 5].map((point) => (
        <Text key={point} fontSize="sm" aria-label={`${value}/5`}>
          {point <= value ? '⭐' : '☆'}
        </Text>
      ))}
      <Text fontSize="xs" color="gray.400">{value}/5</Text>
    </HStack>
  )
}

function ProjectImageSlot({ src, title, proofLabel, addPhotoText }) {
  const [broken, setBroken] = useState(false)
  const borderColor = useColorModeValue('gray.300', 'whiteAlpha.400')
  const bg = useColorModeValue('gray.100', 'whiteAlpha.100')

  if (!broken) {
    return (
      <Box borderWidth="1px" borderColor={borderColor} borderRadius="lg" overflow="hidden" bg={bg}>
        <Image
          src={src}
          alt={`${title} proof`}
          w="100%"
          h="180px"
          objectFit="cover"
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
      h="180px"
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
  const { colorMode, toggleColorMode } = useColorMode()

  const pageBg = useColorModeValue('#f3f8ff', '#060d18')
  const textSoft = useColorModeValue('gray.700', 'gray.300')
  const cardBg = useColorModeValue('rgba(255, 255, 255, 0.85)', 'rgba(20, 24, 35, 0.84)')
  const cardBorder = useColorModeValue('gray.200', 'whiteAlpha.300')
  const navBg = useColorModeValue('rgba(255,255,255,0.76)', 'rgba(10, 14, 25, 0.78)')
  const cardShadow = useColorModeValue('0 16px 36px rgba(20, 30, 50, 0.09)', '0 16px 36px rgba(0, 0, 0, 0.35)')
  const accentAura = useColorModeValue(
    'radial-gradient(circle at 12% 10%, rgba(56,189,248,0.22), transparent 34%), radial-gradient(circle at 86% 3%, rgba(14,165,233,0.16), transparent 28%)',
    'radial-gradient(circle at 12% 10%, rgba(56,189,248,0.28), transparent 34%), radial-gradient(circle at 86% 3%, rgba(34,211,238,0.2), transparent 28%)',
  )
  const techGrid = useColorModeValue(
    'linear-gradient(to right, rgba(0,0,0,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.05) 1px, transparent 1px)',
    'linear-gradient(to right, rgba(0,255,255,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,255,255,0.08) 1px, transparent 1px)',
  )

  const photoTiles = [
    { title: 'Portrait', subtitle: 'Professional headshot', bg: 'linear-gradient(135deg, #0ea5e9 0%, #2563eb 100%)' },
    { title: 'Hackathon', subtitle: 'Competition moment', bg: 'linear-gradient(135deg, #14b8a6 0%, #0f766e 100%)' },
    { title: 'Project Demo', subtitle: 'Presentation day', bg: 'linear-gradient(135deg, #38bdf8 0%, #1d4ed8 100%)' },
    { title: 'Team Event', subtitle: 'Collaboration snapshot', bg: 'linear-gradient(135deg, #06b6d4 0%, #0e7490 100%)' },
  ]

  return (
    <Box
      minH="100vh"
      bg={pageBg}
      backgroundImage={`${accentAura}, ${techGrid}`}
      backgroundSize="18px 18px"
      color={useColorModeValue('gray.900', 'gray.100')}
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
          <HStack spacing={2} flexWrap="wrap">
            <Button as="a" href="#about" size="sm" variant="ghost" colorScheme="cyan">{t.nav.about}</Button>
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
                  <HStack spacing={2} flexWrap="wrap">
                    {t.strengthItems.map((item) => (
                      <Tag key={item} colorScheme="cyan" variant="subtle">{item}</Tag>
                    ))}
                  </HStack>
                </Box>

                <Box>
                  <Heading size="sm" mb={2}>{t.achievements}</Heading>
                  <VStack align="start" spacing={1}>
                    {achievements.map((item) => (
                      <Text key={item} color={textSoft}>🏆 {item}</Text>
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
              <Heading size="md" mb={4}>Photo</Heading>
              <SimpleGrid columns={2} spacing={3} minH={{ base: '260px', md: '420px' }}>
                {photoTiles.map((tile) => (
                  <Box
                    key={tile.title}
                    borderRadius="xl"
                    borderWidth="1px"
                    borderColor="whiteAlpha.400"
                    bgImage={tile.bg}
                    color="white"
                    p={4}
                    display="flex"
                    flexDir="column"
                    justifyContent="flex-end"
                    minH={{ base: '118px', md: '198px' }}
                    position="relative"
                    overflow="hidden"
                    transition="all 0.25s ease"
                    _before={{
                      content: '""',
                      position: 'absolute',
                      inset: 0,
                      bg: 'linear-gradient(to top, rgba(2,6,23,0.68), rgba(2,6,23,0.08))',
                    }}
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

            <VStack spacing={5} align="stretch">
              <Box
                p={5}
                borderWidth="1px"
                borderColor={cardBorder}
                borderRadius="lg"
                bg={useColorModeValue('gray.50', 'whiteAlpha.100')}
                transition="all 0.2s ease"
                _hover={{ transform: 'translateY(-4px)', borderColor: useColorModeValue('cyan.300', 'cyan.500') }}
              >
                <ProjectImageSlot
                  src="/project-leor-proof.jpg"
                  title="LÈOR – Smart Safety Wristband + Mobile App"
                  proofLabel={t.proof}
                  addPhotoText={t.addPhoto}
                />
                <Heading size="md" mt={4} mb={2}>
                  LÈOR – Smart Safety Wristband + Mobile App
                </Heading>
                <Text color={textSoft} mb={4} lineHeight={1.7}>
                  Smart safety wristband and companion app concept with AI-assisted alerts, location-aware workflows, and emergency-first interaction design.
                </Text>
                <HStack spacing={2} mb={4} flexWrap="wrap">
                  <Tag colorScheme="cyan" variant="subtle">AI-Assisted Design</Tag>
                  <Tag colorScheme="cyan" variant="subtle">Mobile UX</Tag>
                  <Tag colorScheme="cyan" variant="subtle">Concept Prototyping</Tag>
                </HStack>
                <HStack spacing={4}>
                  <Link href="#" color="cyan.400" isExternal fontWeight="semibold">
                    GitHub <Icon as={ExternalLinkIcon} mx="1" />
                  </Link>
                  <Link href="#" color="cyan.300" isExternal fontWeight="semibold">
                    Demo <Icon as={ExternalLinkIcon} mx="1" />
                  </Link>
                </HStack>
              </Box>

              <Box
                p={5}
                borderWidth="1px"
                borderColor={cardBorder}
                borderRadius="lg"
                bg={useColorModeValue('gray.50', 'whiteAlpha.100')}
                transition="all 0.2s ease"
                _hover={{ transform: 'translateY(-4px)', borderColor: useColorModeValue('cyan.300', 'cyan.500') }}
              >
                <ProjectImageSlot
                  src="/project-erp-proof.jpg"
                  title="Hospitality ERP Data Visualization Dashboard"
                  proofLabel={t.proof}
                  addPhotoText={t.addPhoto}
                />
                <Heading size="md" mt={4} mb={2}>
                  Hospitality ERP Data Visualization Dashboard
                </Heading>
                <Text color={textSoft} mb={4} lineHeight={1.7}>
                  Hackathon-winning dashboard for hospitality operations that translates ERP data into visual KPIs for strategic and real-time decision making.
                </Text>
                <HStack spacing={2} mb={4} flexWrap="wrap">
                  <Tag colorScheme="cyan" variant="subtle">Python</Tag>
                  <Tag colorScheme="cyan" variant="subtle">SQL</Tag>
                  <Tag colorScheme="cyan" variant="subtle">Data Visualization</Tag>
                  <Tag colorScheme="cyan" variant="subtle">Dashboard Architecture</Tag>
                </HStack>
                <HStack spacing={4}>
                  <Link href="#" color="cyan.400" isExternal fontWeight="semibold">
                    GitHub <Icon as={ExternalLinkIcon} mx="1" />
                  </Link>
                  <Link href="#" color="cyan.300" isExternal fontWeight="semibold">
                    Demo <Icon as={ExternalLinkIcon} mx="1" />
                  </Link>
                </HStack>
              </Box>

              <Box
                p={5}
                borderWidth="1px"
                borderColor={cardBorder}
                borderRadius="lg"
                bg={useColorModeValue('gray.50', 'whiteAlpha.100')}
                transition="all 0.2s ease"
                _hover={{ transform: 'translateY(-4px)', borderColor: useColorModeValue('cyan.300', 'cyan.500') }}
              >
                <ProjectImageSlot
                  src="/project-ai-proof.jpg"
                  title="AI / Data Science Academic Project"
                  proofLabel={t.proof}
                  addPhotoText={t.addPhoto}
                />
                <Heading size="md" mt={4} mb={2}>
                  AI / Data Science Academic Project
                </Heading>
                <Text color={textSoft} mb={4} lineHeight={1.7}>
                  Academic machine learning project covering data preprocessing, model training, evaluation, and communication of findings through clear visual reports.
                </Text>
                <HStack spacing={2} mb={4} flexWrap="wrap">
                  <Tag colorScheme="cyan" variant="subtle">Machine Learning</Tag>
                  <Tag colorScheme="cyan" variant="subtle">Data Analysis</Tag>
                  <Tag colorScheme="cyan" variant="subtle">Python</Tag>
                </HStack>
                <HStack spacing={4}>
                  <Link href="#" color="cyan.400" isExternal fontWeight="semibold">
                    GitHub <Icon as={ExternalLinkIcon} mx="1" />
                  </Link>
                  <Link href="#" color="cyan.300" isExternal fontWeight="semibold">
                    Demo <Icon as={ExternalLinkIcon} mx="1" />
                  </Link>
                </HStack>
              </Box>
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
                  bg={useColorModeValue('gray.50', 'whiteAlpha.100')}
                  transition="all 0.2s ease"
                  _hover={{ transform: 'translateY(-3px)', borderColor: useColorModeValue('cyan.300', 'cyan.500') }}
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
            <VStack align="start" spacing={3}>
              <Link href="mailto:kyawswarhein@example.com" color="cyan.400">
                <Icon as={EmailIcon} mr={2} /> kyawswarhein@example.com
              </Link>
              <Link href="https://www.linkedin.com" color="cyan.400" isExternal>
                LinkedIn <Icon as={ExternalLinkIcon} mx="1" />
              </Link>
              <Link href="https://github.com" color="cyan.400" isExternal>
                GitHub <Icon as={ExternalLinkIcon} mx="1" />
              </Link>
            </VStack>
          </Box>
        </VStack>

        <Text textAlign="center" color={useColorModeValue('gray.500', 'gray.500')} mt={10} fontSize="sm">
          © {new Date().getFullYear()} Kyaw Swar Hein — {t.footer}
        </Text>
      </Container>
    </Box>
  )
}
