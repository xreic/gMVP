// Dependencies
import styled from '@emotion/styled';
import { css, Global } from '@emotion/core';
import {
  Stack,
  Text,
  Flex,
  Box,
  AccordionItem,
  AccordionHeader,
  PopoverContent,
  Button,
  IconButton
} from '@chakra-ui/core';

export const StyledStack = styled(Stack)`
  background: #beebe9;
  padding: 1rem 1rem 0 1rem;
  text-align: center;
`;

export const StyledAccItem = styled(AccordionItem)`
  background: #f7fafc;
  border-radius: 0.5rem;
  margin-top: 0.5rem;
`;

export const StyleAccHeader = styled(AccordionHeader)`
  :hover {
    border-top-left-radius: 0.5rem;
    border-top-right-radius: 0.5rem;
    background: #f7fafc;
  }
  :focus {
    border-top-left-radius: 0.5rem;
    border-top-right-radius: 0.5rem;
    outline: 0 !important;
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0) !important;
  }

  -webkit-tap-highlight-color: transparent;
  -webkit-touch-callout: transparent;
  -webkit-user-select: transparent;
  -khtml-user-select: transparent;
  -moz-user-select: transparent;
  -ms-user-select: transparent;
  user-select: transparent;
`;

export const StyledBox = styled(Box)`
  background: #9be3de;
  border-radius: 0.5rem;
  padding: 0.75rem;
`;

export const StyledBoxC = styled(Box)`
  background: #f7fafc;
  border-radius: 0.5rem;
`;

export const StyledText = styled(Text)`
  background: #f7fafc;
  border-radius: 0.5rem;
`;

export const StyledFlex = styled(Flex)`
  background: #f7fafc;
  border-radius: 0.5rem;
`;

export const StyledPopoverContent = styled(PopoverContent)`
  :focus {
    border-top-left-radius: 0.5rem;
    border-top-right-radius: 0.5rem;
    outline: 0 !important;
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0) !important;
  }
`;

export const StyledButton = styled(Button)`
  :focus {
    border-top-left-radius: 0.5rem;
    border-top-right-radius: 0.5rem;
    outline: 0 !important;
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0) !important;
  }
`;

export const StyledIconButton = styled(IconButton)`
  :focus {
    border-top-left-radius: 0.5rem;
    border-top-right-radius: 0.5rem;
    outline: 0 !important;
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0) !important;
  }
`;

export const globalStyles = (
  <Global
    styles={css`
      html {
        width: 100%;
      }
      body {
        position: absolute;
        display: flex;
        direction: column;
        width: 100%;
        height: 100%;
        background: #beebe9;
        justify-content: center;
      }
    `}
  />
);
