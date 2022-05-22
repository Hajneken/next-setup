import { useTheme } from "@emotion/react";
import { Box, Button, Container, Slide } from "@mui/material";
import Link from "next/link";
const imageLoader = require("/configs/loader.js");

export default function Intro() {
  const theme = useTheme();
  return (
    <>
      <Container
        sx={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
        fixed
      >
        <Box position={"relative"}>
          <Slide in={true} timeout={1200}>
            <h1>Next Bootstrap</h1>
          </Slide>
        </Box>
        <Box className="focus-in" textAlign={"center"}>
          <Link href={"https://github.com/Hajneken/next-setup"} passHref>
            <Button variant="contained">Learn More</Button>
          </Link>
        </Box>
      </Container>
      <style jsx>
        {`
          h1 {
            font-size: 6.4rem;
            line-height: 6.2rem;

            font-weight: 700;
            text-align: center;
            margin: 0 0 3.8rem 0;

            font-family: "Roboto Slab";
            font-style: normal;
            font-weight: 700;

            letter-spacing: -1.5px;
            background: linear-gradient(
              180deg,
              rgba(98, 0, 238, 0.96) 4.59%,
              #000000 100%
            );
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            text-fill-color: transparent;
            filter: drop-shadow(2px 4px 6px #0000001a);
          }

          h1:after {
            content: "";
            position: absolute;
            left: 50%;
            bottom: -2.4rem;
            transform: translateX(-50%);
            width: 78px;
            height: 8px;
            border-radius: 10px;

            background: #ffffff;
            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
          }

          h3 {
            font-size: 2.4rem;
            font-variant: small-caps;
            text-align: center;
          }

          .checkmark {
            position: absolute;
            top: 23%;
            left: 57%;
            max-width: 240px;
            height: auto;

            animation: scale-in-hor-right 0.5s
              cubic-bezier(0.25, 0.46, 0.45, 0.94) 2s both;
          }

          @keyframes scale-in-hor-right {
            0% {
              -webkit-transform: scaleX(0);
              transform: scaleX(0);
              -webkit-transform-origin: 100% 100%;
              transform-origin: 100% 100%;
              opacity: 1;
            }
            100% {
              -webkit-transform: scaleX(1);
              transform: scaleX(1);
              -webkit-transform-origin: 100% 100%;
              transform-origin: 100% 100%;
              opacity: 1;
            }
          }

          /* md and up */
          @media screen and (min-width: ${theme.breakpoints.values.md}px) {
            h1 {
              font-size: 9.6rem;
              line-height: 9.8rem;
            }

            svg {
              max-width: 400px;
              left: 70%;
            }
          }
        `}
      </style>
    </>
  );
}
