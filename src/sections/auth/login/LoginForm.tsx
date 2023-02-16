import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// @mui
import {
  Link,
  Stack,
  IconButton,
  InputAdornment,
  TextField,
  Checkbox,
  FormControl,
  Backdrop,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";
import FormControlLabel from "@mui/material/FormControlLabel";
// components
import Iconify from "../../../components/iconify";
import { useAppDispatch } from "../../../redux/hook/hook";
import { userLogin } from "../../../redux/action/userAction";
import Loading from "../../../animate-loading/Loading";




// ----------------------------------------------------------------------

export default function LoginForm() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [show, setShow] = useState<boolean>(false);
  const [password, setPassword] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [open, setOpen] = React.useState(false);


  const handleClick = (e: React.SyntheticEvent) => {
    e.preventDefault();
    setOpen(!open);
    console.log('username: ',name);
    console.log('password: ',password);

    
    dispatch(
      userLogin({
        userNameOrEmailAddress: name,
        password: password,
        rememberClient: true
      })
    )

        .then(() => {
          navigate("/dashboard");
      })
      .catch((error) => {
          console.log(error)
      });
  };
 

  return (
    <>
      <form onSubmit={handleClick}>
      <Stack spacing={3}>
      <FormControl>
      <TextField value={name} onChange={(e) => setName(e.target.value)}
           label="Username" />
        
           </FormControl>

           <FormControl>
        <TextField value={password} onChange={(e) => setPassword(e.target.value)}
          label="Password"
          type={show ? "text" : "password"}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={() => setShow(!show)}
                  edge="end"
                >
                  <Iconify
                    icon={show ? "eva:eye-fill" : "eva:eye-off-fill"}
                  />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      

</FormControl>
    
      </Stack>

      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        sx={{ my: 2 }}
      >
        <FormControlLabel
          control={<Checkbox name="remember" />}
          label="Remember me"
        />
        <Link variant="subtitle2" underline="hover">
          Forgot password?
        </Link>
      </Stack>

      <LoadingButton
        fullWidth
        size="large"
        type="submit"
        variant="contained"
       
      >
        Login
      </LoadingButton>
      </form>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
      >
       <Loading/>
      </Backdrop>
    </>
  );
}



