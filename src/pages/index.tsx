import { Button, Flex, Stack } from "@chakra-ui/react";
import { Input } from "../components/Form/Input";

export default function SignIn() {
  return (
    <Flex w="100vw" h="100vh" align="center" justify="center">
      <Flex
        as="form"
        w="100%"
        maxWidth={500}
        bg="gray.800"
        p="8"
        borderEndRadius="8"
        flexDir="column"
      >
        <Stack spacing={4}>
          <Input name="email" type="email" label="E-mail" />
          <Input name="password" type="password" label="Senha" />
        </Stack>
        <Button type="submit" marginTop={6} colorScheme="pink">
          Entrar
        </Button>
      </Flex>
    </Flex>
  );
}
