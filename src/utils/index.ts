import Swal from 'sweetalert2';

export const saveToken = token => {
  localStorage.setItem('token', token);
};

export const getToken = () => {
  return localStorage.getItem('token');
};

export const swalToast = (position: 'top-end', duration: 3000) => {
  const toast = Swal.mixin({
    toast: true,
    position,
    showConfirmButton: false,
    timer: duration,
    timerProgressBar: true,
    onOpen: toast => {
      toast.addEventListener('mouseenter', Swal.stopTimer);
      toast.addEventListener('mouseleave', Swal.resumeTimer);
    }
  });
  return toast;
};
