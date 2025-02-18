import React, { useState, useEffect } from "react";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../utils/firebase.utils";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import {
    Alert,
    Box,
    Button,
    Typography,
    Grid,
    useTheme,
    Fade,
    Slide,
    Grow,
    Avatar,
    Divider
} from "@mui/material";
import { Google, GitHub, Email, Lock } from "@mui/icons-material";
import ParticleBackground from "../components/ParticleBackground";

const Login = () => {
    const { user } = useAuth();
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const theme = useTheme();
    const provider = new GoogleAuthProvider();

    useEffect(() => {
        if (user) navigate("/dashboard");
    }, [user]);

    const handleGoogleSignIn = async () => {
        try {
            setLoading(true);
            await signInWithPopup(auth, provider);  
        } catch (error) {
            setError(error.message);
            setLoading(false);
        }
    };

    return (
        <Box sx={{
            minHeight: '100vh',
            background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
            position: 'relative',
            overflow: 'hidden'
        }}>
            <ParticleBackground />

            <Grid container sx={{ height: '100vh', position: 'relative', zIndex: 1 }}>
                {/* Left Section - Visuals */}
                <Grid item xs={12} md={6} sx={{
                    display: { xs: 'none', md: 'flex' },
                    alignItems: 'center',
                    justifyContent: 'center',
                    p: 8,
                    background: 'rgba(255, 255, 255, 0.1)',
                    backdropFilter: 'blur(10px)'
                }}>
                    <Slide in direction="right" timeout={500}>
                        <Box sx={{ textAlign: 'center', color: 'white' }}>
                            <Lock sx={{ fontSize: 80, mb: 2 }} />
                            <Typography variant="h2" sx={{
                                fontWeight: 700,
                                mb: 2,
                                background: 'linear-gradient(45deg, #ffffff 30%, #eeeeee 90%)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent'
                            }}>
                                DocuMind AI
                            </Typography>
                            <Typography variant="h5" sx={{ opacity: 0.9 }}>
                                Your Intelligent Document Management System
                            </Typography>
                        </Box>
                    </Slide>
                </Grid>

                {/* Right Section - Login */}
                <Grid item xs={12} md={6} sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    p: 4
                }}>
                    <Fade in timeout={800}>
                        <Box sx={{
                            width: '100%',
                            maxWidth: 450,
                            bgcolor: 'background.paper',
                            borderRadius: 4,
                            p: 6,
                            boxShadow: 24,
                            position: 'relative'
                        }}>
                            {/* Error Alert */}
                            {error && (
                                <Grow in>
                                    <Alert severity="error" sx={{ mb: 3 }}>
                                        {error}
                                    </Alert>
                                </Grow>
                            )}

                            <Box sx={{ textAlign: 'center', mb: 4 }}>
                                <Avatar sx={{
                                    width: 80,
                                    height: 80,
                                    bgcolor: theme.palette.primary.main,
                                    mb: 2,
                                    mx: 'auto'
                                }}>
                                    <Lock sx={{ fontSize: 40 }} />
                                </Avatar>
                                <Typography variant="h4" sx={{
                                    fontWeight: 700,
                                    mb: 1,
                                    background: `linear-gradient(45deg, ${theme.palette.primary.main} 30%, ${theme.palette.secondary.main} 90%)`,
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent'
                                }}>
                                    Welcome
                                </Typography>
                                <Typography variant="body1" color="text.secondary">
                                    Analyze your documents
                                </Typography>
                            </Box>

                            <Button
                                fullWidth
                                variant="contained"
                                onClick={handleGoogleSignIn}
                                disabled={loading}
                                startIcon={<Google />}
                                sx={{
                                    py: 1.5,
                                    mb: 2,
                                    borderRadius: 2,
                                    background: `linear-gradient(45deg, #4285F4 30%, #357ABD 90%)`,
                                    '&:hover': {
                                        transform: 'translateY(-1px)',
                                        boxShadow: 4
                                    },
                                    transition: 'all 0.3s ease'
                                }}
                            >
                                Continue with Google
                            </Button>

                            <Divider sx={{ my: 3 }}>OR</Divider>

                            {/* Additional Auth Methods (Placeholder) */}
                            <Button
                                fullWidth
                                variant="outlined"
                                startIcon={<GitHub />}
                                sx={{
                                    py: 1.5,
                                    mb: 2,
                                    borderRadius: 2,
                                    '&:hover': {
                                        transform: 'translateY(-1px)',
                                        boxShadow: 2
                                    },
                                    transition: 'all 0.3s ease'
                                }}
                            >
                                Continue with GitHub
                            </Button>

                            <Button
                                fullWidth
                                variant="outlined"
                                startIcon={<Email />}
                                sx={{
                                    py: 1.5,
                                    borderRadius: 2,
                                    '&:hover': {
                                        transform: 'translateY(-1px)',
                                        boxShadow: 2
                                    },
                                    transition: 'all 0.3s ease'
                                }}
                            >
                                Continue with Email
                            </Button>

                            <Typography variant="body2" sx={{
                                mt: 4,
                                textAlign: 'center',
                                color: 'text.secondary'
                            }}>
                                By continuing, you agree to our <br />
                                <Button size="small" component={Link} to="/terms-and-services">Terms of Service</Button> and
                                <Button size="small" component={Link} to="/privacy-policy">Privacy Policy</Button>
                            </Typography>
                        </Box>
                    </Fade>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Login;