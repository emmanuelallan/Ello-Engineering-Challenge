import { FC } from 'react';
import { AspectRatio, Card, CardContent, Typography, Button, CardCover } from '@mui/joy';

interface Book {
    title: string;
    author: string;
    coverPhotoURL: string;
    readingLevel: string;
}

interface BookCardProps {
    book: Book;
    onAdd: (book: Book) => void;
}

const BookCard: FC<BookCardProps> = ({ book, onAdd }) => {
    return (
        <Card variant="outlined" sx={{ width: 200, margin: 1 }}>
            <CardCover>
                <AspectRatio ratio="2/3">
                    <img
                        src={book.coverPhotoURL}
                        alt={book.title}
                        loading="lazy"
                    />
                </AspectRatio>
            </CardCover>
            <CardContent>
                <Typography level="title-md">
                    {book.title}
                </Typography>
                <Typography
                    sx={{
                        mt: 0.5,
                    }}
                >
                    by {book.author}
                </Typography>
            </CardContent>
            <Button
                variant="solid"
                size="sm"
                color="primary"
                aria-label={`Add ${book.title} to cart`}
                sx={{
                    position: 'absolute',
                    zIndex: 2,
                    bottom: '1rem',
                    right: '1rem',
                }}
                onClick={() => onAdd(book)}
            >
                Add
            </Button>
        </Card>
    );
};

export default BookCard;
