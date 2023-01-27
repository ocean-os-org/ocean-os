import AddTwoToneIcon from '@mui/icons-material/AddTwoTone';
import { Typography, Button, Grid } from '@mui/material';

interface ComponentDocumentationProps {
  heading?: string;
  subHeading?: string;
  docs?: string;
}

const ComponentDocumentation = ({
  heading = '',
  subHeading = '',
  docs = '',
  ...rest
}: ComponentDocumentationProps) => {
  return (
    <Grid
      container
      justifyContent="space-between"
      alignItems="center"
      {...rest}
    >
      <Grid item>
        <Typography variant="h3" component="h3" gutterBottom>
          {heading}
        </Typography>
        <Typography variant="subtitle2">{subHeading}</Typography>
      </Grid>
      <Grid item>
        <Button
          href={docs}
          target="_blank"
          rel="noopener noreferrer"
          sx={{ mt: { xs: 2, md: 0 } }}
          variant="contained"
          startIcon={<AddTwoToneIcon fontSize="small" />}
        >
          {heading} Documentation
        </Button>
      </Grid>
    </Grid>
  );
};

export default ComponentDocumentation;
