import {
  Box,
  BoxProps,
  Button,
  FormControl,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useForm, ValidationError } from "@formspree/react";

export type SubscriptionFormTypes = BoxProps;

const SubscriptionForm: React.FC<SubscriptionFormTypes> = (props) => {
  const [state, handleSubmit] = useForm("mdovgbwa");

  const initialFormState = {
    email: "",
  };
  const [form, setForm] = useState(initialFormState);

  const handleChange = ({ currentTarget: { name, value } }: any) => {
    setForm((presState) => {
      console.log(presState);
      return { ...presState, [name]: value };
    });
  };

  useEffect(() => {
    if (state.succeeded) {
      setForm(() => initialFormState);
    }
  }, [state]);

  return (
    <Box {...props} component="form" onSubmit={handleSubmit}>
      <Stack alignItems={{ md: "flex-start", sm: "center", xs: "center" }}>
        <Typography sx={{ fontSize: 24 }}>
          Subscribe to our newsletter
        </Typography>
        <Typography
          variant="caption"
          sx={{
            fontSize: 12,
          }}
        >
          Subscribe to our newsletter to get the new updates!
        </Typography>
      </Stack>

      <FormControl
        sx={{
          borderRadius: 0,
          marginTop: (theme) => theme.spacing(8),
        }}
        fullWidth
      >
        <TextField
          placeholder="Enter Your Email"
          variant="outlined"
          sx={{ borderRadius: 0 }}
          fullWidth
          required
          name="email"
          value={form.email}
          onChange={handleChange}
        />
      </FormControl>
      <ValidationError prefix="Email" field="email" errors={state.errors} />
      {state.succeeded && (
        <p style={{ textAlign: "center" }}>Thanks for joining!</p>
      )}

      <Button
        sx={{
          borderRadius: 0,
          marginTop: 5,
          textTransform: "unset",
        }}
        variant="contained"
        type="submit"
        fullWidth
      >
        Subscribe
      </Button>
    </Box>
  );
};

export default SubscriptionForm;
