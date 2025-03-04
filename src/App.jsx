import { Box, Button, Heading, Text, VStack, HStack, Link, Icon, Divider, Image, SimpleGrid } from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaEnvelope, FaExternalLinkAlt } from "react-icons/fa";

export default function App() {
  return (
    <Box bg="#F7F7F7" minH="100vh">
      {/* Navbar */}
      <Box as="nav" bg="blue.500" color="white" p={4} textAlign="center">
        <HStack justify="center" spacing={8}>
          <Link href="#about" _hover={{ textDecoration: "underline" }}>About</Link>
          <Link href="#skills" _hover={{ textDecoration: "underline" }}>Skills</Link>
          <Link href="#projects" _hover={{ textDecoration: "underline" }}>Projects</Link>
          <Link href="#contact" _hover={{ textDecoration: "underline" }}>Contact</Link>
        </HStack>
      </Box>

      {/* Profile Photo Section */}
      <VStack p={10} textAlign="center" spacing={4}>
      <Image 
          src="/profile-photo.jpeg" 
          alt="Profile Photo" 
          borderRadius="full" 
          width="200px" 
          height="auto" 
          boxShadow="lg" 
        />
        <Heading as="h1" size="xl">Welcome to My Portfolio</Heading>
        <Text fontSize="lg" color="gray.600">Full Stack Web Developer passionate about intuitive user experiences.</Text>
        <Button colorScheme="blue" size="lg">Get Started</Button>
      </VStack>

      <Divider my={8} />

      {/* About Me Section */}
      <VStack id="about" p={10} spacing={4} textAlign="center">
        <Heading as="h2" size="lg">About Me</Heading>
        <Text maxW="600px" color="gray.700">
          I’m a software developer with a background in education and program management. 
          I specialize in JavaScript, React, and building user-friendly applications.
        </Text>
      </VStack>

      <Divider my={8} />

      {/* Skills Section */}
      <VStack id="skills" p={10} spacing={4} textAlign="center">
        <Heading as="h2" size="lg">Skills</Heading>
        <SimpleGrid columns={[3, 4, 6]} spacing={6} mt={4} w="60%" mx="auto">
          <VStack>
            <Image src="/js-icon.png" alt="JavaScript" boxSize={10} />
            <Text fontSize="sm">JavaScript</Text>
          </VStack>
          <VStack>
            <Image src="/python-icon.jpg" alt="Python" boxSize={10} />
            <Text fontSize="sm">Python</Text>
          </VStack>
          <VStack>
            <Image src="/react-icon.jpg" alt="React" boxSize={10} />
            <Text fontSize="sm">React</Text>
          </VStack>
          <VStack>
            <Image src="/flask-icon.png" alt="Flask" boxSize={10} />
            <Text fontSize="sm">Flask</Text>
          </VStack>
          <VStack>
            <Image src="/html-5-icon.png" alt="HTML" boxSize={10} />
            <Text fontSize="sm">HTML</Text>
          </VStack>
          <VStack>
            <Image src="/css-logo.jpeg" alt="CSS" boxSize={10} />
            <Text fontSize="sm">CSS</Text>
          </VStack>
          <VStack>
            <Image src="/git-icon.webp" alt="Git" boxSize={10} />
            <Text fontSize="sm">Git</Text>
          </VStack>
          <VStack>
            <Image src="/rest-api-icon.png" alt="REST APIs" boxSize={10} />
            <Text fontSize="sm">REST APIs</Text>
          </VStack>
          <VStack>
            <Image src="/sql-icon.png" alt="SQL" boxSize={10} />
            <Text fontSize="sm">SQL</Text>
          </VStack>
          <VStack>
            <Image src="/node-js-icon.jpeg" alt="Node.js" boxSize={10} />
            <Text fontSize="sm">Node.js</Text>
          </VStack>
          <VStack>
            <Image src="/tailwind-css-icon.jpeg" alt="Tailwind" boxSize={10} />
            <Text fontSize="sm">Tailwind</Text>
          </VStack>
          <VStack>
            <Image src="/mui-icon.jpeg" alt="MUI" boxSize={10} />
            <Text fontSize="sm">MUI</Text>
          </VStack>
          <VStack>
            <Image src="/vite-icon.webp" alt="Vite" boxSize={10} />
            <Text fontSize="sm">Vite</Text>
          </VStack>
          <VStack>
            <Image src="/chakra-ui-icon.jpg" alt="Chakra UI" boxSize={10} />
            <Text fontSize="sm">Chakra UI</Text>
          </VStack>
          <VStack>
            <Image src="/vercel-icon.svg" alt="Vercel" boxSize={10} />
            <Text fontSize="sm">Vercel</Text>
          </VStack>
          <VStack>
            <Image src="/npm-icon.png" alt="NPM" boxSize={10} />
            <Text fontSize="sm">NPM</Text>
          </VStack>
        </SimpleGrid>
      </VStack>

      <Divider my={8} />

      {/* Projects Section */}
      <VStack id="projects" p={10} spacing={4} textAlign="center">
        <Heading as="h2" size="lg">Projects</Heading>
        <Text color="gray.700">Here are some of my recent works:</Text>
        <SimpleGrid columns={[1, 2]} spacing={6} mt={6} w="50%" mx="auto">
          <Box p={4} borderWidth="1px" borderRadius="md" shadow="md" textAlign="left">
            <Image src="/CalmSpaceLogo.png" alt="Calm Space" borderRadius="md" mb={4} boxSize="200px" objectFit="contain" />
            <Heading as="h3" size="md">Calm Space</Heading>
            <Text mt={2}>A meditation app with filterable audio sessions and progress tracking.</Text>
            <HStack mt={2} spacing={4}>
              <Button as={Link} href="#" colorScheme="blue" leftIcon={<FaExternalLinkAlt />}>Live Demo</Button>
              <Button as={Link} href="#" colorScheme="gray" leftIcon={<FaGithub />}>GitHub Repo</Button>
            </HStack>
          </Box>
          <Box p={4} borderWidth="1px" borderRadius="md" shadow="md" textAlign="left">
            <Image src="/GamespaceLogo.png" alt="Game Space" borderRadius="md" mb={4} boxSize="200px" objectFit="contain" />
            <Heading as="h3" size="md">Game Space</Heading>
            <Text mt={2}>A gaming collection and wishlist tracker.</Text>
            <HStack mt={2} spacing={4}>
              <Button as={Link} href="#" colorScheme="blue" leftIcon={<FaExternalLinkAlt />}>Live Demo</Button>
              <Button as={Link} href="#" colorScheme="gray" leftIcon={<FaGithub />}>GitHub Repo</Button>
            </HStack>
          </Box>
        </SimpleGrid>
      </VStack>

      <Divider my={8} />

      {/* Contact Section */}
      <VStack id="contact" p={10} spacing={4} textAlign="center">
        <Heading as="h2" size="lg">Contact</Heading>
        <Text>Let's connect! Reach out via email or social media.</Text>
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
