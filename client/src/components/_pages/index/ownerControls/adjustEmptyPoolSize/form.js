import { TextField } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { useContext, useState } from 'react';
import * as yup from 'yup';
import { useFormik } from 'formik';
import AppContext from '../../../../_context';
import { toast } from 'react-toastify';

const validationSchema = yup.object({
  emptyPoolSize: yup
    .number()
    .min(0, 'Greater or equal 0')
    .required('Required'),
});

export default function AdjustEmptyPoolSizeForm() {
  const { raffle, address } = useContext(AppContext);
  const [loading, setLoading] = useState(false);

  const onSubmit = async (formVal) => {
    const size = formVal.emptyPoolSize;
    setLoading(true);
    raffle.methods.updateEmptyPool(size).send({
      from: address,
    })
    .then((data) => {
      console.log(data);
      toast.success('Updated successfully');
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
      emptyPoolSize: 0,
    },
    validationSchema: validationSchema,
    onSubmit: onSubmit,
  })

  return(
    <form onSubmit={formik.handleSubmit}>
      <TextField
        fullWidth
        autoFocus
        id='emptyPoolSize'
        name='emptyPoolSize'
        label='Size'
        value={formik.values.emptyPoolSize}
        onChange={formik.handleChange}
        error={Boolean(formik.errors.emptyPoolSize)}
        helperText={formik.errors.emptyPoolSize || ' '}
      />
      <LoadingButton
        variant='contained'
        fullWidth
        loading={loading}
        type='submit'
      >
        Update
      </LoadingButton>
    </form>
  )
}
