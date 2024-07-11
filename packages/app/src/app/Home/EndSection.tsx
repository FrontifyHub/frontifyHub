import {
  Avatar,
  Card,
  CardBody,
  CardHeader,
  Container,
  Flex,
  Image,
  Link,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useLocalization } from "@frontifyHub/common/localization";

type ContributorProps = {
  src: string;
  name: string;
};

type CommunicationProps = {
  src: string;
  color: string;
  title: string;
  desc: string;
};

const CONTRIBUTORS: ContributorProps[] = [
  {
    src: "https://github.com/nhinbm",
    name: "Man Nhi",
  },
  {
    src: "https://github.com/TanKaka123",
    name: "Hong Tan",
  },
  {
    src: "https://github.com/PhuongAnh2212",
    name: "Phuong Anh",
  },
  {
    src: "https://github.com/nhinhiii",
    name: "Yen Nhi",
  },
];

const COMMUNICATIONS: CommunicationProps[] = [
  {
    src: "github.svg",
    color: "black",
    title: "Start a discussion",
    desc: "Request new features, ask questions and provide feedback wit Github discussions",
  },
  {
    src: "twitter.svg",
    color: "#1d9bf0",
    title: "Follow on Twitter",
    desc: "Get notified about new minor and major releases",
  },
  {
    src: "discord.svg",
    color: "#5865f2",
    title: "Join Discord community",
    desc: "Ask questions, share feedback, get updates, learn about upcoming features and more",
  },
];

export const EndSection: React.FC = () => {
  const { t } = useLocalization();

  return (
    <Flex w="100%" direction="column" align="center">
      <Text size="4xl">
        The&nbsp;
        <Text variant="textGradient" as="span">
          FrontifyHub
        </Text>
        &nbsp;contributor
      </Text>

      <Text size="xl" color="gray">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. 
      </Text>

      <Stack direction="row" margin="2rem">
        {CONTRIBUTORS.map((item, key) => (
          <Link href={item.src} key={key} margin="0 1rem">
            <Avatar name={item.name} size="lg" />
          </Link>
        ))}
      </Stack>

      <Text size="4xl">Communication</Text>

      <SimpleGrid
        w="100%"
        spacing={4}
        templateColumns="repeat(auto-fill, 30%)"
        margin="2rem 0"
        justifyContent="center"
      >
        {COMMUNICATIONS.map((item, key) => (
          <Card key={key} background={item.color} color="white">
            <CardHeader padding="1.25rem 1.25rem 0">
              <Flex gap={3} align="center">
                <Image src={item.src} boxSize="2rem" />
                <Text size="lg" fontWeight="700">
                  {item.title}
                </Text>
              </Flex>
            </CardHeader>
            <CardBody padding="1rem 1.25rem 1.25rem">
              <Container>{item.desc}</Container>
            </CardBody>
          </Card>
        ))}
      </SimpleGrid>
    </Flex>
  );
};
