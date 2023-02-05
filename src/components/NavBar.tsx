import { ReactNode } from "react";
import {
  Box,
  Flex,
  Button,
  useColorModeValue,
  Stack,
  useColorMode,
  Menu,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";

export default function Nav() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
        <Flex h={24} alignItems={"center"} justifyContent={"space-between"}>
          <Box>
            <h1>TwitBanner</h1>
          </Box>

          <Stack direction={"row"} spacing={7}>
            <Button onClick={toggleColorMode}>
              {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
            </Button>
            <WalletMultiButton />
          </Stack>
        </Flex>
      </Box>
    </>
  );
}
