import { Container, Grid, Box } from '@mui/material';

/**
 * Display an empty page to signify an error had occured
 * @param {*} code Error status code
 * @param {*} title Error title
 * @param {*} details Error details
 * @param {*} message Error message (Will be ignored if details is present)
 * @param {*} children Additional
 * @returns React Component
 */
function ErrorPage({
  code,
  title,
  details,
  message = null,
  children = null,
  minHeight = '90vh',
}) {
  return (
    <Container>
      <Grid
        container
        spacing={0}
        direction='column'
        alignItems='center'
        justifyContent='center'
        style={{ minHeight: minHeight /* Layout height */ }}
      >
        <Grid item xs={3}>
          <Box>
            <h1>{code}</h1>
            <h2>{title}</h2>
            <p>{details ? details : message}</p>
            {children}
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

export default ErrorPage;
