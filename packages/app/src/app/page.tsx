import {
  Button,
  ButtonGroup,
  ExampleTemplete,
  FormButtton,
} from "@frontifyHub/common-ui/index";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <Button />
      <ButtonGroup />
      <ExampleTemplete />
      <FormButtton />
    </main>
  );
}
