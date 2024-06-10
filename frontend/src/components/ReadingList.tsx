import { FC } from 'react';
import {
    Grid,
    CardOverflow,
    Card,
    Typography,
    IconButton,
    Chip,
    useTheme,
    CardContent,
    Box
} from '@mui/joy';
import {keyframes} from "@emotion/react";
import { LocalLibraryOutlined, DeleteForeverOutlined } from "@mui/icons-material";
import { Book } from '../types.ts'

interface ReadingListProps {
    books: Book[];
    onRemove: (book: Book) => void;
}

const ReadingList: FC<ReadingListProps> = ({ books, onRemove }) => {
    const theme = useTheme();

    const pulsate = keyframes`
        0% {
            transform: scale(1);
        }
        50% {
            transform: scale(1.1);
        }
        100% {
            transform: scale(1);
        }
    `;

    return (
        <Box>
            <Typography sx={{color: "#335C6E", marginBottom: "20px", fontWeight: "bold", fontSize: "20px"}}>Your Reading Collection</Typography>
            {books.length === 0 ? (
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: "50px" }}>
                    <LocalLibraryOutlined sx={{ fontSize: 80, color: "#335C6E" }} />
                    <Typography level="title-md" sx={{ marginTop: 2, color: "#335C6E" }}>
                        Your reading list is empty.
                    </Typography>
                    <Typography level="body-sm" sx={{ marginTop: 1, color: "#5ACCCC" }}>
                        Start adding books to build your collection!
                    </Typography>
                </Box>
            ) : (
                <Grid container spacing={3} columns={{ xs: 4, sm: 8, md: 12 }} sx={{justifyContent: "center"}}>
                    {books.map((book) => (
                        <Grid key={book.title} xs={2.4} sm={2.4} md={2.4}>
                            <Card
                                variant="plain"
                                sx={{
                                    width: "100%",
                                    "--Card-padding": "0px",
                                    transition: "transform 0.3s",
                                    "&:hover": {
                                        transform: "translateY(-2px)",
                                    },
                                    "&:hover .delete-button": {
                                        opacity: 1,
                                        animation: `${pulsate} 1s ease-in-out infinite`,
                                    },
                                    backgroundColor: "transparent"
                                }}
                                orientation="vertical"
                            >
                                <CardOverflow>
                                    <img
                                        src={book.coverPhotoURL}
                                        alt={book.title}
                                        style={{ width: "100%", height: 263, objectFit: "cover", borderRadius: "10px" }}
                                    />
                                    <Chip
                                        variant="soft"
                                        color="primary"
                                        sx={{
                                            position: "absolute",
                                            bottom: 0,
                                            right: 0,
                                            borderTopRightRadius: theme.radius.sm,
                                        }}
                                    >
                                        {book.readingLevel}
                                    </Chip>

                                    <IconButton
                                        variant="solid"
                                        color="danger"
                                        size="sm"
                                        className="delete-button"
                                        sx={{
                                            position: "absolute",
                                            top: "0.5rem",
                                            right: "0.5rem",
                                            opacity: 0,
                                            transition: "opacity 0.3s ease",
                                            zIndex: 2,
                                        }}
                                        onClick={() => onRemove(book)}
                                    >
                                        <DeleteForeverOutlined />
                                    </IconButton>
                                </CardOverflow>
                                <CardContent sx={{padding: 0}}>
                                    <Typography level="title-md">{book.title}</Typography>
                                    <Typography level="body-sm">
                                        by <span style={{ color: "#5ACCCC" }}>{book.author}</span>
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            )}

        </Box>
    );
};

export default ReadingList;