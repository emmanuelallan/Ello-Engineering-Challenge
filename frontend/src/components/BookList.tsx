import {FC, useEffect, useState} from 'react';
import Header from "./Header.tsx";
import SearchBar from './SearchBar';
import ReadingList from '../../../../../fullstack-take-home-test/frontend/src/components/ReadingList';
import { Container } from '@mui/joy';
import Toast from "./Toast.tsx";
import { NotificationMessage } from '../types.ts'

interface Book {
    title: string;
    author: string;
    coverPhotoURL: string;
    readingLevel: string;
}

interface MainViewProps {
    books: Book[];
}

const MainView: FC<MainViewProps> = ({ books }) => {
    const [readingList, setReadingList] = useState<Book[]>(() => {
        const storedReadingList = localStorage.getItem('readingList');
        return storedReadingList ? JSON.parse(storedReadingList) : [];
    });
    const [notification, setNotification] = useState<NotificationMessage | null>(null);


    const handleAddBook = (book: Book) => {
        const isDuplicate = readingList.some(b => b.title === book.title);

        if (isDuplicate) {
            setNotification({ type: 'danger', message: 'Book already in your list.' });
        } else {
            setReadingList([...readingList, book]);
            setNotification({ type: 'success', message: 'Book added to the reading list successfully!' });
        }
    };

    const handleRemoveBook = (book: Book) => {
        setReadingList(readingList.filter((b) => b.title !== book.title));
        setNotification({ type: 'success', message: 'Book removed from the reading list successfully!' });
    };

    useEffect(() => {
        localStorage.setItem('readingList', JSON.stringify(readingList));
    }, [readingList]);

    useEffect(() => {
        if (notification) {
            const timer = setTimeout(() => {
                setNotification(null);
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [notification]);

    return (
        <>
            <Header />
            <Container>
                <SearchBar books={books} onAddToReadingList={handleAddBook} setNotification={setNotification} />

                <ReadingList books={readingList} onRemove={handleRemoveBook} />
            </Container>
            <Toast notification={notification} />
        </>
    );
};

export default MainView;
