import {
  Box,
  Button,
  Heading,
  Text,
  VStack,
  HStack,
  Link,
  Divider,
  Image,
  SimpleGrid,
  useColorMode,
  useColorModeValue,
  IconButton,
  Spacer,
} from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaExternalLinkAlt, FaSun, FaMoon } from "react-icons/fa";
import { motion } from "framer-motion";

export default function App() {
  const { colorMode, toggleColorMode } = useColorMode();
  const bgColor = useColorModeValue("#F7F7F7", "gray.900");
  const textColor = useColorModeValue("gray.800", "gray.100");
  const cardBg = useColorModeValue("white", "gray.800");
  const mutedText = useColorModeValue("gray.700", "gray.400");

  return (
    <Box bg={bgColor} minH="100vh" color={textColor}>
      {/* Navbar */}
      <Box as="nav" bg="blue.500" color="white" px={6} py={4}>
        <HStack justify="space-between">
          <HStack spacing={8}>
            <Link href="#about" _hover={{ textDecoration: "underline" }}>About</Link>
            <Link href="#projects" _hover={{ textDecoration: "underline" }}>Projects</Link>
            <Link href="#contact" _hover={{ textDecoration: "underline" }}>Contact</Link>
          </HStack>
          <IconButton
            icon={colorMode === "light" ? <FaMoon /> : <FaSun />}
            onClick={toggleColorMode}
            variant="ghost"
            aria-label="Toggle dark mode"
            color="white"
            _hover={{ bg: "blue.600" }}
          />
        </HStack>
      </Box>

      {/* Profile Section */}
      <VStack p={10} textAlign="center" spacing={4}>
        <Image
          src="/profile-photo.jpeg"
          alt="Profile Photo"
          borderRadius="full"
          width="200px"
          boxShadow="lg"
        />
        <Heading as="h1" size="xl">Welcome to My Portfolio</Heading>
        <Text fontSize="lg" color={mutedText}>
          Full Stack Web Developer passionate about intuitive user experiences.
        </Text>
        <Button colorScheme="blue" size="lg">Get Started</Button>
      </VStack>

      <Divider my={8} />

      {/* About Section */}
      <VStack id="about" p={10} spacing={4} textAlign="center">
        <Heading as="h2" size="lg">About Me</Heading>
        <Text maxW="600px" color={mutedText}>
          I’m a software developer with a background in education and program management.
          I specialize in JavaScript, React, and building user-friendly applications.
        </Text>
      </VStack>

      <Divider my={8} />

      {/* Skills */}
      <VStack id="skills" p={10} spacing={4} textAlign="center">
        <Heading as="h2" size="lg">Skills</Heading>
        <SimpleGrid columns={[3, 4, 6]} spacing={6} mt={4} w="60%" mx="auto">
          {[
            ["js-icon.png", "JavaScript"],
            ["python-icon.jpg", "Python"],
            ["react-icon.jpg", "React"],
            ["flask-icon.png", "Flask"],
            ["html-5-icon.png", "HTML"],
            ["css-logo.jpeg", "CSS"],
            ["git-icon.webp", "Git"],
            ["rest-api-icon.png", "REST APIs"],
            ["sql-icon.png", "SQL"],
            ["node-js-icon.jpeg", "Node.js"],
            ["tailwind-css-icon.jpeg", "Tailwind"],
            ["mui-icon.jpeg", "MUI"],
            ["vite-icon.webp", "Vite"],
            ["chakra-ui-icon.jpg", "Chakra UI"],
            ["vercel-icon.svg", "Vercel"],
            ["npm-icon.png", "NPM"],
          ].map(([src, label]) => (
            <VStack key={label}>
              <Image src={`/${src}`} alt={label} boxSize={10} />
              <Text fontSize="sm" color={mutedText}>{label}</Text>
            </VStack>
          ))}
        </SimpleGrid>
      </VStack>

      <Divider my={8} />

      {/* Projects */}
      <VStack id="projects" p={10} spacing={4} textAlign="center">
        <Heading as="h2" size="lg">Projects</Heading>
        <Text color={mutedText}>Here are some of my recent works:</Text>
        <SimpleGrid columns={[1, 2]} spacing={6} mt={6} w="50%" mx="auto">
          {[
            {
              title: "Calm Space",
              description: "A meditation app with filterable audio sessions and progress tracking.",
              image: "/CalmSpaceLogo.png",
              live: "#",
              repo: "#"
            },
            {
              title: "Game Space",
              description: "A gaming collection and wishlist tracker.",
              image: "/GamespaceLogo.png",
              live: "#",
              repo: "#"
            },
            {
              title: "BookMe!",
              description: "A modern booking app with real-time availability, email confirmations, and admin controls.",
              image: "/BookMeLogo.png",
              live: "https://book-me-now.vercel.app",
              repo: "https://github.com/mdipasqu13/booking-app"
            }
          ].map(({ title, description, image, live, repo }) => (
            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300 }}
              key={title}
            >
              <Box p={4} borderWidth="1px" borderRadius="md" shadow="md" textAlign="left" bg={cardBg}>
                <Image src={image} alt={title} borderRadius="md" mb={4} boxSize="200px" objectFit="contain" />
                <Heading as="h3" size="md" color={textColor}>{title}</Heading>
                <Text mt={2} color={mutedText}>{description}</Text>
                <HStack mt={2} spacing={4}>
                  <Button as={Link} href={live} target="_blank" colorScheme="blue" leftIcon={<FaExternalLinkAlt />}>Live Demo</Button>
                  <Button as={Link} href={repo} target="_blank" colorScheme="gray" leftIcon={<FaGithub />}>GitHub Repo</Button>
                </HStack>
              </Box>
            </motion.div>
          ))}
        </SimpleGrid>
      </VStack>

      <Divider my={8} />

      {/* Contact */}
      <VStack id="contact" p={10} spacing={4} textAlign="center">
        <Heading as="h2" size="lg">Contact</Heading>
        <Text color={mutedText}>Let's connect! Reach out via email or social media.</Text>
        <HStack spacing={6}>
          <Link href="mailto:michaeldipasquale313@gmail.com" color="blue.500">
            <Image src="/GmailIcon.png" alt="Gmail" boxSize={6} />
          </Link>
          <Link href="https://github.com/mdipasqu13" target="_blank" color="gray.800">
            <Image src="/GitHubIcon.jpg" alt="GitHub" boxSize={6} />
          </Link>
          <Link href="https://linkedin.com/in/michael-dipasquale313" target="_blank" color="blue.700">
            <Image src="/LinkedInIcon.jpeg" alt="LinkedIn" boxSize={6} />
          </Link>
        </HStack>
      </VStack>
    </Box>
  );
}
