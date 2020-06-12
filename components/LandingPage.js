// Dependencies
import Link from 'next/link';

// Chakra + Styles
import { StyledButton, StyledPopoverContent } from '../shared/styles';
import {
  Box,
  Flex,
  Popover,
  PopoverTrigger,
  PopoverHeader,
  PopoverBody,
  PopoverArrow,
  Image,
  PseudoBox,
  Button
} from '@chakra-ui/core';

const LandingPage = () => {
  return (
    <Box padding={2} h="100%">
      <Flex direction="column" alignItems="center">
        <Image
          rounded="full"
          width="275px"
          height="100px"
          marginTop="3rem"
          src="/banner.png"
        />

        <Box
          position="relative"
          background="#F7EEC7"
          boxShadow="1px 2px 3px #A2A2A2"
          width="50%"
          fontSize="xlg"
          textAlign="center"
        >
          Welcome!
        </Box>

        <Popover>
          <PopoverTrigger>
            <StyledButton
              as={Box}
              background="#F7EEC7"
              boxShadow="1px 2px 3px #A2A2A2"
              marginTop="1rem"
              width="40%"
              height="20px"
              fontSize="xs"
              textAlign="center"
            >
              Learn More
            </StyledButton>
          </PopoverTrigger>
          <StyledPopoverContent zIndex={4}>
            <PopoverArrow />
            <PopoverHeader textAlign="center" fontSize="md">
              Join. Connect. Achieve
            </PopoverHeader>
            <PopoverBody textAlign="center" fontSize="sm">
              Streak is a platform where you can connect with your family,
              friends, and peers to collaborate individually for any activity.
            </PopoverBody>
          </StyledPopoverContent>
        </Popover>

        <Image
          rounded="full"
          size="200px"
          height="190px"
          marginTop="10%"
          marginBottom="10%"
          src="/logo.png"
        />

        <Link href="/login">
          <a style={{ width: '100%' }}>
            <Button
              background="#FFB6BA"
              color="#373737"
              rounded="20px"
              width="100%"
              height="40px"
              marginTop="5%"
              marginBottom="10%"
              _hover={{ bg: '#FFB6BA' }}
              _focus={{ boxShadow: 'outline' }}
            >
              Log In
            </Button>
          </a>
        </Link>

        <Link href="/register">
          <a style={{ width: '100%' }}>
            <Button
              background="#FFB6BA"
              color="#373737"
              rounded="20px"
              width="100%"
              height="40px"
              _hover={{ bg: '#FFB6BA' }}
              _focus={{ boxShadow: 'outline' }}
            >
              Register
            </Button>
          </a>
        </Link>
      </Flex>
    </Box>
  );
};

export default LandingPage;
