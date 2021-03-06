import React from "react";
import { useHistory } from "react-router-dom";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { useState } from "react";
import { Container, TextField } from "@material-ui/core";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


toast.configure();

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
      Application
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  image: {
    backgroundImage: "url(/images/img.jpg)",
    backgroundRepeat: "no-repeat",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  paper: {
    margin: theme.spacing(1, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(5),
  },
  submit: {
    margin: theme.spacing(1, 0, 2),
  },
  container: {
    display: "flex",
    flexWrap: "wrap",
  },
  input: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));

export default function UserAd() {
  const classes = useStyles();
  const history = useHistory();

//   React.useEffect(() => {
//     try{
//       const userinfo=localStorage.getItem('userinfo');

//       console.log(userinfo);

//       if(userinfo)
//       {
//         localStorage.removeItem('userinfo');
        
//         // Redirect to='/';
//       }
      

      
//   }catch(err){
//       console.log(err);
//       toast.error(err);
//       toast.error(
//           'Please sign in first',
//           {
//           position: "top-right",
//           autoClose: 2000,
//           hideProgressBar: false,
//           closeOnClick: true,
//           pauseOnHover: true,
//           draggable: true,
//           progress: undefined
//           }
//       );
//       history.push('/signup');
//   }
    
//   }, []);


  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [description,setDescription]=useState("");
  const [budget,setbudget]=useState("");
  const [Link,setLink]=useState("");

  function sleep(time) {
    return new Promise((resolve) => setTimeout(resolve, time));
  }
  const submitHandler = (e) => {
    e.preventDefault();
    if (email === "" ||description===""||budget===""||firstName===""||Link==="") {
      toast.error("Please fill all fields !", {
        position: toast.POSITION.TOP_CENTER,
      });
    } else {
      if (description.length<10) {
        toast.error("Please enter more details !", {
          position: toast.POSITION.TOP_CENTER,
        });
      } else {
         
          
            // setLoading(true);
            fetch("http://localhost:3001/api/student/putad", {
              method: "post",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                firstName: firstName,
                email: email,
                description:description,
                budget:budget,
                Link:Link
              }),
            })
              .then((res) => res.json())
              .then((result) => {
                // setLoading(false);
                // console.log(result);
                if (result.message === "Success") {
                  localStorage.setItem('userinfo',JSON.stringify(result));
                  toast.success("Sweet !", {
                    position: toast.POSITION.TOP_CENTER,
                    autoClose: 1500,
                  });
                 
                  sleep(2000).then(() => {
                    history.push("/search");
                  });
                } else {
                  toast.error(`${result.message}`, {
                    position: toast.POSITION.TOP_CENTER,
                    autoClose: 2000,
                  });
                  sleep(2300).then(() => {
                    window.location.reload(false);
                    history.push("/signup");
                  });
                }
              });
          
        
      }
    }
  };

  return (
    <div>
      <div>
        {
          <Grid container component="main" className={classes.root}>
            <CssBaseline />
            <Grid item xs={false} sm={4} md={7} className={classes.image} />
            <Grid
              item
              xs={12}
              sm={8}
              md={5}
              component={Paper}
              elevation={6}
              square
            >
              <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                  <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                 Add Ads
                </Typography>
                <form
                  className={classes.form}
                  noValidate
                  onSubmit={submitHandler}
                >
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        name="firstName"
                        variant="outlined"
                        required
                        fullWidth
                        id="firstName"
                        label="Title of Ad"
                        autoFocus
                        onChange={(e) => setFirstName(e.target.value)}
                      />
                    </Grid>
                    {/* <Grid item xs={12} sm={6}>
                      <TextField
                        variant="outlined"
                        required
                        fullWidth
                        id="lastName"
                        label="Description"
                        name="lastName"
                        onChange={(e) => setDescription(e.target.value)}
                      />
                    </Grid> */}
                    <Grid item xs={12}>
                      <TextField
                        variant="outlined"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </Grid>
                   
                    <Grid item xs={12}>
                      <TextField
                        variant="outlined"
                        required
                        fullWidth
                        name="confirmPassword"
                        label="Budget"
                        id="confirmPassword"
                        onChange={(e) => setbudget(e.target.value)}
                      />
                    </Grid>

                    <Grid item xs={12}>
                      <TextField
                        variant="outlined"
                        required
                        fullWidth
                        name="contactnumber"
                        label="Put Add Link"
                        id="contactnumber"
                        type="string"
                        onChange={(e) => setLink(e.target.value)}
                      />
                    </Grid>

                    <Grid item xs={12}>
                      <TextField
                        variant="outlined"
                        required
                        fullWidth
                        name="confirmPassword"
                        label="Description"
                        id="confirmPassword"
                        onChange={(e) => setDescription(e.target.value)}
                      />
                    </Grid>
                  </Grid>

                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                  >
                    Add
                  </Button>
                  <Box mt={3} />
                  <Grid container>
                    <Grid item xs>
                      {/* <Link href="#" variant="body2">
                        Forgot password?
                      </Link> */}
                    </Grid>
                    {/* <Grid item>
                      <Link href="/" variant="body2">
                        {"Already have an account? Sign In"}
                      </Link>
                    </Grid> */}
                  </Grid>
                  <Box mt={5}>
                    <Copyright />
                  </Box>
                </form>
              </div>
            </Grid>
          </Grid>
        }
      </div>
    </div>
  );
}
