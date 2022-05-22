import { Box, Container, Divider, Link, Typography } from "@mui/material";
import ContactForm from "../components/contactForm";

export default function Footer() {
  return (
    <>
      <footer id="Contact">
        <Container fixed>
          <Typography variant="h3" textAlign={"center"} color="white" mb={4}>
            Contact
          </Typography>

          <Divider sx={{ marginTop: "7rem" }}>
            <Link
              fontWeight={"bold"}
              color={"#c1bebe"}
              href="mailto:zemanech@gmail.com"
              target="_blank"
            >
              by Hynek Zemanec
            </Link>
          </Divider>
        </Container>
      </footer>
      <style jsx>{`
        footer {
          padding: 80px 0;
          background: #2b005c;
        }
      `}</style>
    </>
  );
}
