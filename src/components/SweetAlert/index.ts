import Swal from 'sweetalert2';
import { theme } from 'themes';

const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  onOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer);
    toast.addEventListener('mouseleave', Swal.resumeTimer);
  },
});

export const ErrorAlert = ({ title, text }: SweetAlertProps) => {
  Swal.fire({
    icon: 'error',
    title,
    text,
    confirmButtonColor: theme.darkShallow,
  });
};

export const SuccessToast = ({ title, type = 'success' }: SweetAlertToastProps) => {
  Toast.fire({
    icon: type,
    title,
  });
};
