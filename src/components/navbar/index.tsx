import React, { useState } from "react";
import {
  AppBar,
  Button,
  Container,
  Toolbar,
  useScrollTrigger,
  useTheme,
} from "@mui/material";
// Icons
import HomeIcon from "@mui/icons-material/Home";
import VideoSettingsIcon from "@mui/icons-material/VideoSettings";
import ConstructionIcon from "@mui/icons-material/Construction";
import ContactMailIcon from "@mui/icons-material/ContactMail";

// routing
import Link from "next/link";

const NavLink = (props) => (
  <Link href={props.href} passHref>
    <Button
      sx={{ color: "black", marginRight: "1.8rem" }}
      className={props.className}
      startIcon={props.startIcon}
    >
      {props.children}
    </Button>
  </Link>
);

function ElevationScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

export default function Navbar(props) {
  const theme = useTheme();

  return (
    <>
      <ElevationScroll {...props}>
        <AppBar
          position="fixed"
          className="bar"
          enableColorOnDark
          sx={(theme) => ({
            [theme.breakpoints.down("md")]: {
              top: "auto",
              bottom: 0,
            },
          })}
        >
          <Container fixed sx={{ padding: 0 }}>
            <Toolbar
              component="nav"
              sx={(theme) => ({
                [theme.breakpoints.down("md")]: {
                  justifyContent: "center",
                  padding: 0,
                },
              })}
            >
              <NavLink
                className="navlink"
                href="/#Intro"
                startIcon={<HomeIcon />}
              >
                Introduction
              </NavLink>
              <NavLink
                className="navlink"
                href="/#Process"
                startIcon={<VideoSettingsIcon />}
              >
                How it works
              </NavLink>
              <NavLink
                className="navlink"
                href="/#Projects"
                startIcon={<ConstructionIcon />}
              >
                Projects
              </NavLink>
              <NavLink
                className="navlink"
                href="/#Contact"
                startIcon={<ContactMailIcon />}
              >
                Contact
              </NavLink>
            </Toolbar>
          </Container>
        </AppBar>
      </ElevationScroll>
      <style jsx global>{`
        @media screen and (max-width: ${theme.breakpoints.values.sm}px) {
          .navlink {
            font-size: 0.8rem;
            filter: drop-shadow(2px 4px 6px rgba(0, 0, 0, 0.15));
          }
        }

        @media screen and (max-width: ${theme.breakpoints.values.md}px) {
          .logo {
            display: none;
          }

          .navlink {
            margin: 0;
            display: flex;
            flex-flow: column wrap;
            text-align: center;
            font-size: 1.2rem;
            span {
              margin: 0;
            }
          }
        }

        .bar {
          background-color: rgba(255, 255, 255, 0.35) !important;
          backdrop-filter: blur(7px) !important;
        }

        .logo {
          margin-right: auto;

          span img {
            filter: saturate(0);
            transition: transform 200ms;
          }

          &:hover {
            span img {
              filter: saturate(1);
              transform: scale(1.05);
            }
          }
        }
      `}</style>
    </>
  );
}
