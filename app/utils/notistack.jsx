import { useSnackbar } from 'notistack';

export default function useCustomSnackbar() {
    const { enqueueSnackbar } = useSnackbar();

    const showSnackbar = (text, duration = 3000, variant = 'default') => {
        enqueueSnackbar(text, {
            variant,
            autoHideDuration: duration,
            anchorOrigin: { horizontal: 'center', vertical: 'top' },
            dense: true,
        });
    };

    return showSnackbar;
}
