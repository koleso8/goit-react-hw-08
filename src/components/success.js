import Swal from 'sweetalert2';

export const success = () => {
  Swal.fire({
    position: 'center',
    icon: 'success',
    title: 'contact has been saved',
    showConfirmButton: false,
    timer: 1500,
  });
};
