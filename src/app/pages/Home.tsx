import {
  Box,
  Grid,
  IconButton,
  Link,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import logo from "../../static/2x2-JeremyMarcos.jpg";
import { useLocation } from "react-router-dom";
import { links } from "./links";

interface Props {
  setSelectedIndex: React.Dispatch<React.SetStateAction<number>>;
}

export default function Home({ setSelectedIndex }: Props) {
  const { pathname } = useLocation();
  useEffect(() => {
    setSelectedIndex(-1);
  }, [setSelectedIndex]);

  useEffect(() => {
    document.title = process.env.REACT_APP_NAME!;
  }, [pathname]);

  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ 
        minHeight: `calc(100vh - 20px - 33px)`,
        px: { xs: 3, sm: 0 },
        width: '100%',
        overflowX: 'hidden',
        background: (theme) => theme.palette.mode === 'dark' 
          ? 'radial-gradient(circle at center, #2d2d2d 0%, #1e1e1e 100%)' 
          : 'radial-gradient(circle at center, #ffffff 0%, #f0f0f0 100%)',
        transition: 'all 0.5s ease-in-out'
      }}
    >
      <Grid item xs={12} sx={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center',
        animation: 'fadeIn 1s ease-in',
        '@keyframes fadeIn': {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        }
      }}>
        <Stack 
          direction={{ xs: "column", sm: "row-reverse" }} 
          spacing={{ xs: 4, sm: 6 }} 
          alignItems="center"
          textAlign={{ xs: "center", sm: "left" }}
          sx={{ maxWidth: '900px', width: '100%' }}
        >
          <Box 
            sx={{ 
              position: 'relative',
              display: 'flex', 
              justifyContent: 'center',
              filter: 'drop-shadow(0px 10px 20px rgba(0,0,0,0.3))',
              '& img': {
                borderRadius: '50%',
                border: (theme) => `4px solid ${theme.palette.mode === 'dark' ? '#333' : '#ddd'}`,
                transition: 'transform 0.3s ease',
                '&:hover': {
                  transform: 'scale(1.05)',
                }
              }
            }}
          >
            <img src={logo} width="350px" alt="logo" style={{ height: 'auto' }} />
          </Box>
          <Box>
            <Grid
              display="flex"
              justifyContent={{ xs: "center", sm: "flex-start" }}
            >
              <Typography 
                variant="h3" 
                sx={{ 
                  fontSize: { xs: '2rem', sm: '3.5rem' }, 
                  fontWeight: 800,
                  background: (theme) => theme.palette.mode === 'dark' 
                    ? 'linear-gradient(45deg, #fff 30%, #6997d5 90%)' 
                    : 'linear-gradient(45deg, #333 30%, #295fbf 90%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  mb: 1
                }}
              >
                {process.env.REACT_APP_NAME}
              </Typography>
            </Grid>
            <Grid
              display="flex"
              justifyContent={{ xs: "center", sm: "flex-start" }}
            >
              <Typography 
                variant="subtitle1" 
                gutterBottom 
                sx={{ 
                  fontSize: { xs: '1rem', sm: '1.2rem' }, 
                  opacity: 0.8,
                  fontStyle: 'italic',
                  mb: 3
                }}
              >
                *Architecting scalable automation. Engineering quality at scale. Empowering teams, accelerating delivery, and enabling reliable software with confidence. Building practical automation solutions, improving testing processes, and helping teams deliver better software faster.*

              </Typography>
            </Grid>
            <Grid
              display="flex"
              justifyContent={{ xs: "center", sm: "flex-start" }}
            >
              <Stack 
                direction="row" 
                spacing={1} 
                justifyContent={{ xs: "center", sm: "flex-start" }}
                sx={{ 
                  p: 1, 
                  borderRadius: '20px', 
                  backgroundColor: (theme) => theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)',
                  backdropFilter: 'blur(10px)'
                }}
              >
                {links.map((link) => (
                  <Tooltip key={link.index} title={link.title} arrow>
                    <Link
                      target="_blank"
                      href={link.href}
                      underline="none"
                      color="inherit"
                    >
                      <IconButton 
                        color="inherit" 
                        sx={{ 
                          transition: 'all 0.2s', 
                          '&:hover': { transform: 'translateY(-3px)', color: '#6997d5' } 
                        }}
                      >
                        {link.icon}
                      </IconButton>
                    </Link>
                  </Tooltip>
                ))}
              </Stack>
            </Grid>
          </Box>
        </Stack>
      </Grid>
    </Grid>
  );
}
