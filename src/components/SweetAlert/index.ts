import Swal from 'sweetalert2';
import { theme } from 'themes';

export const ErrorAlert = ({ title, text }: SweetAlertProps) => {
  Swal.fire({
    icon: 'error',
    title,
    text,
    confirmButtonColor: theme.darkShallow,
  });
};
