import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Button,
  IconButton,
  Tooltip,
  Snackbar,
  Alert,
  useTheme,
  alpha,
} from '@mui/material';
import {
  Phone as PhoneIcon,
  Email as EmailIcon,
  LinkedIn as LinkedInIcon,
  Instagram as InstagramIcon,
  Twitter as TwitterIcon,
  Language as LanguageIcon,
  ContentCopy as CopyIcon,
} from '@mui/icons-material';
import './Contact.css';

const Contact: React.FC = () => {
  const theme = useTheme();
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [copiedText, setCopiedText] = useState('');

  const handleCopy = async (text: string, label: string, event?: React.MouseEvent<HTMLButtonElement>) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedText(`${label} copied to clipboard!`);
      setSnackbarOpen(true);
      // Remove focus from the button after clicking
      if (event?.currentTarget) {
        event.currentTarget.blur();
      } else {
        (document.activeElement as HTMLElement)?.blur();
      }
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };

  return (
    <Box
      id="contact"
      sx={{
        py: { xs: 4, md: 6 },
        px: { xs: 2, md: 3 },
        background: '#0c112c',
        color: '#fff',
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 4 }}>
          <Typography
            variant="h3"
            component="h2"
            sx={{
              fontWeight: 700,
              mb: 1,
              color: '#fff',
              fontSize: { xs: '1.8rem', sm: '2.2rem', md: '2.5rem' },
            }}
          >
            Contact Us
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: alpha('#fff', 0.8),
              fontWeight: 400,
              fontSize: { xs: '1rem', md: '1.15rem' },
            }}
          >
            We'd love to work with you
          </Typography>
        </Box>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              sm: 'repeat(2, 1fr)',
              md: 'repeat(3, 1fr)',
            },
            gap: 3,
            mb: 4,
          }}
        >
          <Card
            sx={{
              height: '100%',
              textAlign: 'center',
              borderRadius: 4,
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              border: '1px solid',
              borderColor: alpha('#fff', 0.15),
              bgcolor: alpha('#fff', 0.05),
              backdropFilter: 'blur(5px)',
              boxShadow: `0 2px 12px ${alpha('#000', 0.2)}`,
              cursor: 'pointer',
              position: 'relative',
              overflow: 'hidden',
              '&::before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: `linear-gradient(135deg, ${alpha('#00D4FF', 0.05)} 0%, ${alpha('#00D4FF', 0)} 100%)`,
                opacity: 0,
                transition: 'opacity 0.3s ease',
              },
              '&:hover': {
                transform: 'translateY(-6px)',
                boxShadow: `0 6px 20px ${alpha('#00D4FF', 0.25)}`,
                borderColor: '#00D4FF',
                bgcolor: alpha('#fff', 0.08),
                '&::before': {
                  opacity: 1,
                },
                '& .icon-box': {
                  bgcolor: alpha('#00D4FF', 0.25),
                  transform: 'scale(1.08)',
                  boxShadow: `0 0 10px ${alpha('#00D4FF', 0.3)}`,
                },
              },
            }}
          >
            <CardContent sx={{ p: 3 }}>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  mb: 2,
                }}
              >
                <Box
                  className="icon-box"
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 64,
                    height: 64,
                    borderRadius: '50%',
                    bgcolor: alpha('#00D4FF', 0.15),
                    color: '#00D4FF',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  }}
                >
                  <PhoneIcon sx={{ fontSize: 32 }} />
                </Box>
              </Box>
              <Typography variant="h6" sx={{ fontWeight: 600, mb: 1.5, color: '#fff' }}>
                Phone
              </Typography>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 1,
                }}
              >
                <Typography
                  component="a"
                  href="tel:+919145940649"
                  sx={{
                    color: '#00D4FF',
                    textDecoration: 'none',
                    fontWeight: 500,
                    fontSize: '1rem',
                    transition: 'all 0.2s ease',
                    '&:hover': {
                      textDecoration: 'underline',
                      color: '#00B8E6',
                    },
                  }}
                >
                  +91 91459 40649
                </Typography>
                <Tooltip title="Copy phone number">
                  <IconButton
                    size="small"
                    onClick={(e) => handleCopy('+919145940649', 'Phone number', e)}
                    sx={{
                      color: 'primary.main',
                      '&:hover': {
                        bgcolor: alpha(theme.palette.primary.main, 0.1),
                      },
                    }}
                  >
                    <CopyIcon fontSize="small" />
                  </IconButton>
                </Tooltip>
              </Box>
            </CardContent>
          </Card>

          <Card
            sx={{
              height: '100%',
              textAlign: 'center',
              borderRadius: 4,
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              border: '1px solid',
              borderColor: alpha('#fff', 0.15),
              bgcolor: alpha('#fff', 0.05),
              backdropFilter: 'blur(5px)',
              boxShadow: `0 2px 12px ${alpha('#000', 0.2)}`,
              cursor: 'pointer',
              position: 'relative',
              overflow: 'hidden',
              '&::before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: `linear-gradient(135deg, ${alpha('#00D4FF', 0.05)} 0%, ${alpha('#00D4FF', 0)} 100%)`,
                opacity: 0,
                transition: 'opacity 0.3s ease',
              },
              '&:hover': {
                transform: 'translateY(-6px)',
                boxShadow: `0 6px 20px ${alpha('#00D4FF', 0.25)}`,
                borderColor: '#00D4FF',
                bgcolor: alpha('#fff', 0.08),
                '&::before': {
                  opacity: 1,
                },
                '& .icon-box': {
                  bgcolor: alpha('#00D4FF', 0.25),
                  transform: 'scale(1.08)',
                  boxShadow: `0 0 10px ${alpha('#00D4FF', 0.3)}`,
                },
              },
            }}
          >
            <CardContent sx={{ p: 3 }}>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  mb: 2,
                }}
              >
                <Box
                  className="icon-box"
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 64,
                    height: 64,
                    borderRadius: '50%',
                    bgcolor: alpha('#00D4FF', 0.15),
                    color: '#00D4FF',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  }}
                >
                  <EmailIcon sx={{ fontSize: 32 }} />
                </Box>
              </Box>
              <Typography variant="h6" sx={{ fontWeight: 600, mb: 1.5, color: '#fff' }}>
                Email
              </Typography>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 1,
                }}
              >
                <Typography
                  component="a"
                  href="mailto:info@sourcentrix.in"
                  sx={{
                    color: '#00D4FF',
                    textDecoration: 'none',
                    fontWeight: 500,
                    fontSize: '1rem',
                    transition: 'all 0.2s ease',
                    '&:hover': {
                      textDecoration: 'underline',
                      color: '#00B8E6',
                    },
                  }}
                >
                  info@sourcentrix.in
                </Typography>
                <Tooltip title="Copy email address">
                  <IconButton
                    size="small"
                    onClick={(e) => handleCopy('info@sourcentrix.in', 'Email address', e)}
                    sx={{
                      color: 'primary.main',
                      '&:hover': {
                        bgcolor: alpha(theme.palette.primary.main, 0.1),
                      },
                    }}
                  >
                    <CopyIcon fontSize="small" />
                  </IconButton>
                </Tooltip>
              </Box>
            </CardContent>
          </Card>

          <Card
            sx={{
              height: '100%',
              textAlign: 'center',
              borderRadius: 4,
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              border: '1px solid',
              borderColor: alpha('#fff', 0.15),
              bgcolor: alpha('#fff', 0.05),
              backdropFilter: 'blur(5px)',
              boxShadow: `0 2px 12px ${alpha('#000', 0.2)}`,
              gridColumn: { xs: '1', sm: 'span 2', md: 'span 1' },
              cursor: 'pointer',
              position: 'relative',
              overflow: 'hidden',
              '&::before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: `linear-gradient(135deg, ${alpha('#00D4FF', 0.05)} 0%, ${alpha('#00D4FF', 0)} 100%)`,
                opacity: 0,
                transition: 'opacity 0.3s ease',
              },
              '&:hover': {
                transform: 'translateY(-6px)',
                boxShadow: `0 6px 20px ${alpha('#00D4FF', 0.25)}`,
                borderColor: '#00D4FF',
                bgcolor: alpha('#fff', 0.08),
                '&::before': {
                  opacity: 1,
                },
                '& .icon-box': {
                  bgcolor: alpha('#00D4FF', 0.25),
                  transform: 'scale(1.08)',
                  boxShadow: `0 0 10px ${alpha('#00D4FF', 0.3)}`,
                },
              },
            }}
          >
            <CardContent sx={{ p: 3 }}>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  mb: 2,
                }}
              >
                <Box
                  className="icon-box"
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 64,
                    height: 64,
                    borderRadius: '50%',
                    bgcolor: alpha('#00D4FF', 0.15),
                    color: '#00D4FF',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  }}
                >
                  <LanguageIcon sx={{ fontSize: 32 }} />
                </Box>
              </Box>
              <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, color: '#fff' }}>
                Follow Us
              </Typography>
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 1.5,
                    alignItems: 'center',
                  }}
                >
                  <Button
                    component="a"
                    href="https://www.linkedin.com/company/sourcentrix/"
                    target="_blank"
                    rel="noopener noreferrer"
                    startIcon={<LinkedInIcon />}
                    variant="outlined"
                    sx={{
                      width: '100%',
                      maxWidth: 200,
                      textTransform: 'none',
                      borderColor: alpha('#fff', 0.2),
                      color: '#fff',
                      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                      '&:hover': {
                        borderColor: '#00D4FF',
                        bgcolor: alpha('#00D4FF', 0.15),
                        transform: 'translateX(4px)',
                        boxShadow: 2,
                        color: '#fff',
                      },
                    }}
                  >
                    LinkedIn
                  </Button>
                  <Button
                    component="a"
                    href="https://www.instagram.com/sourcentrix"
                    target="_blank"
                    rel="noopener noreferrer"
                    startIcon={<InstagramIcon />}
                    variant="outlined"
                    sx={{
                      width: '100%',
                      maxWidth: 200,
                      textTransform: 'none',
                      borderColor: alpha('#fff', 0.2),
                      color: '#fff',
                      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                      '&:hover': {
                        borderColor: '#00D4FF',
                        bgcolor: alpha('#00D4FF', 0.15),
                        transform: 'translateX(4px)',
                        boxShadow: 2,
                        color: '#fff',
                      },
                    }}
                  >
                    Instagram
                  </Button>
                  <Button
                    component="a"
                    href="https://twitter.com/sourcentrix"
                    target="_blank"
                    rel="noopener noreferrer"
                    startIcon={<TwitterIcon />}
                    variant="outlined"
                    sx={{
                      width: '100%',
                      maxWidth: 200,
                      textTransform: 'none',
                      borderColor: alpha('#fff', 0.2),
                      color: '#fff',
                      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                      '&:hover': {
                        borderColor: '#00D4FF',
                        bgcolor: alpha('#00D4FF', 0.15),
                        transform: 'translateX(4px)',
                        boxShadow: 2,
                        color: '#fff',
                      },
                    }}
                  >
                    Twitter
                  </Button>
                </Box>
              </CardContent>
            </Card>
        </Box>

        <Box
          sx={{
            textAlign: 'center',
            mt: 5,
            pt: 3,
            borderTop: `1px solid ${alpha('#fff', 0.1)}`,
          }}
        >
          <Typography
            sx={{
              color: alpha('#fff', 0.7),
              fontSize: { xs: '0.9rem', md: '1rem' },
              fontWeight: 400,
            }}
          >
            © {new Date().getFullYear()} SOURCENTRIX. All rights reserved.
          </Typography>
        </Box>
      </Container>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity="success"
          sx={{ width: '100%' }}
        >
          {copiedText}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Contact;

