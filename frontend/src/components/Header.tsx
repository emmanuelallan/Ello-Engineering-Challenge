import { FC } from 'react';
import {Box, Container, Typography} from '@mui/joy';

const Header: FC = () => {
    return (
        <>
            <Box sx={{paddingTop: "20px", paddingBottom: "20px", paddingRight: "30px", paddingLeft: "30px", marginBottom: "50px", borderBottom: "1px solid rgba(157, 169, 170, 0.3)"}}>
                <img src="/icons/logo.svg" alt="ello logo" />
            </Box>
            <Container>
                <Box sx={{ marginBottom: "80px" }}>
                    <Typography
                        level="h1"
                        fontWeight="xl"
                        fontSize="32px"
                        sx={{ color: "#335C6E", textAlign: "center", marginBottom: "10px" }}
                    >
                        Ello Book Assignment
                    </Typography>
                    <Typography fontSize="20px" lineHeight="lg" sx={{ color: "#2C3232", fontWeight: "500", textAlign: "center", maxWidth: "580px", margin: "auto" }}>
                        Easily search and assign books to your students from our extensive library.
                    </Typography>
                </Box>
            </Container>
        </>
    );
};

export default Header;
