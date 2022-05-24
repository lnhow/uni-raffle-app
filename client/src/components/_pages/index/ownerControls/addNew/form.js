import { TextField } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { useContext, useState } from 'react';
import * as yup from 'yup';
import { useFormik } from 'formik';
import AppContext from '../../../../_context';
import { toast } from 'react-toastify';

const validationSchema = yup.object({
  description: yup.string().required('Required'),
  image: yup.string().required('Required'),
});

export default function AddNewForm() {
  const { raffle, address } = useContext(AppContext);
  const [loading, setLoading] = useState(false);

  const onSubmit = async (formVal) => {
    const desc = formVal.description;
    const img = formVal.image;
    setLoading(true);
    raffle.methods.addPrize(img, desc).send({
      from: address,
    })
    .then(() => {
      // console.log(data);
      toast.success('Added new prize successfully');
    })
    .catch((err) => {
      console.log(err);
      toast.error(err.message);
    })
    .finally(() => {
      setLoading(false);
    })
  }
  const formik = useFormik({
    initialValues: {
      description: '',
      image: ''
    },
    validationSchema: validationSchema,
    onSubmit: onSubmit,
  })

  return(
    <form onSubmit={formik.handleSubmit}>
      <TextField
        fullWidth
        autoFocus
        id='description'
        name='description'
        label='Description (Ex: iPhone,...)'
        value={formik.values.description}
        onChange={formik.handleChange}
        error={Boolean(formik.errors.description)}
        helperText={formik.errors.description || ' '}
      />
      <TextField
        fullWidth
        autoFocus
        id='image'
        name='image'
        label='Prize image (Ex: https://...)'
        value={formik.values.image}
        onChange={formik.handleChange}
        error={Boolean(formik.errors.image)}
        helperText={formik.errors.image || ' '}
      />
      <LoadingButton
        variant='contained'
        fullWidth
        loading={loading}
        type='submit'
      >
        Add
      </LoadingButton>
    </form>
  )
}
