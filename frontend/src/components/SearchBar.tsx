import {FC, useState} from 'react';
import {Autocomplete, Box, Button, AutocompleteOption, Typography} from '@mui/joy';
import { Book, NotificationMessage } from '../types'

interface SearchBarProps {
    books: Book[];
    onAddToReadingList: (book: Book) => void;
    setNotification: (message: NotificationMessage) => void;
}

const SearchBar: FC<SearchBarProps> = ({ books, onAddToReadingList, setNotification }) => {
    const [selectedBook, setSelectedBook] = useState<Book | null>(null);

    const handleAddToReadingList = () => {
        if (!selectedBook) {
            setNotification({ type: 'danger', message: 'Please select a book to add to the reading list.' });
        } else {
            onAddToReadingList(selectedBook);
            setSelectedBook(null);
        }
    };

    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '20px', marginBottom: "100px", flexDirection: 'column', alignItems: 'center' }}>
            <Autocomplete
                options={books}
                getOptionLabel={(option: Book) => `${option.title} by ${option.author}`}
                value={selectedBook}
                onChange={(_event, newValue: Book) => setSelectedBook(newValue)}
                renderOption={(props, option: Book) => (
                    <AutocompleteOption {...props}>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <img src={`/${option.coverPhotoURL}`} alt={option.title} width="50" style={{ marginRight: 10 }} />
                            <Box>
                                <Typography level="title-md">{option.title}</Typography>
                                <Typography level="body-sm" sx={{ color: 'text.secondary' }}>{option.author}</Typography>
                            </Box>
                        </Box>
                    </AutocompleteOption>
                )}
                sx={{ width: 400, marginBottom: 2, borderRadius: "6px", minHeight: "40px" }}
                autoHighlight
                placeholder="Search books by title"
            />
            <Button color="primary" onClick={handleAddToReadingList} disabled={!selectedBook} sx={{borderRadius: "100px", paddingTop: "12px", paddingBottom: "12px", paddingRight: "40px", paddingLeft: "40px"}}>
                Add to Reading List
            </Button>
        </Box>
    );
};

export default SearchBar;
