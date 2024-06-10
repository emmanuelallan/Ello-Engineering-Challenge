import { Book } from '../../../../fullstack-take-home-test/frontend/src/types.ts'

export const fetchBooks = async (): Promise<Book[]> => {
    const response = await fetch('http://localhost:4000/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            query: `
        query Books {
          books {
            author
            coverPhotoURL
            readingLevel
            title
          }
        }
      `,
        }),
    });

    const { data } = await response.json();
    return data.books;
};

