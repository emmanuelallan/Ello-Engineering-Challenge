export interface Book {
    author: string;
    coverPhotoURL: string;
    readingLevel: string;
    title: string;
}

export interface NotificationMessage {
    type: 'danger' | 'success';
    message: string;
}
