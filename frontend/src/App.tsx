import React, { useEffect, useState } from 'react';
import { CssVarsProvider } from '@mui/joy/styles';
import CssBaseline from '@mui/joy/CssBaseline';
import BookList from '../components/BookList';
import theme from './theme';
import { fetchBooks } from './api';
import { Book } from './types'

const App: React.FC = () => {
    const [books, setBooks] = useState<Book[]>([]);

    useEffect(() => {
        fetchBooks().then(setBooks);
    }, []);

    return (
        <CssVarsProvider disableTransitionOnChange theme={theme}>
            <CssBaseline />
            <BookList books={books} />
        </CssVarsProvider>
    );
};

export default App;
