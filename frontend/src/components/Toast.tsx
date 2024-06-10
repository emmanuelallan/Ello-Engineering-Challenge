import { Snackbar } from "@mui/joy";
import { NotificationMessage } from '../types'

interface ToastProps {
    notification: NotificationMessage | null;
    onClose?: () => void;
}

export default function Toast({ notification, onClose }: ToastProps) {
    return (
        <Snackbar
            autoHideDuration={3000}
            color={notification?.type || "neutral"}
            size="lg"
            variant="outlined"
            open={!!notification}
            onClose={onClose}
        >
            {notification?.message}
        </Snackbar>
    );
}
