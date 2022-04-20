import React from "react";
import { Media } from "react-bootstrap";
// import "../Category/SubCategory/subcategory.scss";
// import "./Amit";
import "../Amit.css";
// import React from "react";
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
// import "./otherDetails/otherDetails.modules.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import { toast } from "react-toastify";
// import { useHistory } from "react-router-dom";
import Card from '@material-ui/core/Card';
// import Link from '@material-ui/core/Link';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
// import Button from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Typography';
import MIT from '../../../images/images.png';
import clsx from "clsx";
// import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
// import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import Input from "@material-ui/core/Input";
import Axios from "axios";
import { useEffect } from "react";
// import { useHistory } from "react-router-dom";
import Rating from "@material-ui/lab/Rating";
// import { useState } from "react";
// import Header from "../"

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1.6,
   
    margin:5,
    padding: theme.spacing(3.3),
    maxWidth: 380,
    // width:'30%'
    
    
  },
  media: {
    height: 140,
    width:'200px'
    // Ho
  },
}));

function MediaCard(props) {
  const classes = useStyles();
  const [Files, setFiles] = React.useState([]);
  // setAdid(props._id)
  
  

  return (
    <>
      {
        
        <Link href={props.Link}>
          
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={MIT}
                title={props.title}
                
              />
              <CardContent>
                <Typography gutterBottom variant='h5' component='h2' >
                {/* style={{width:'150px'}} */}
                    {/* <div style={{width:'30px'}}> */}
                  <p>Title-{props.title}</p>

                 <h5>{props.email}</h5>

                  <h3>Status-{props.data}</h3>

                  {/* </div> */}
                </Typography>
                <Typography
                  variant='body2'
                  color='textSecondary'
                  // image=
                  component='p'
                ></Typography>
              </CardContent>
            </CardActionArea>
            <CardActions></CardActions>
            
          </Card>
         
        </Link>
      }
    </>
  );
}
export default function Viewall() {
 
  const [Files, setFiles] = React.useState([]);
  const [search,setsearch]=React.useState("");

  const address = 'http://localhost:3001/api/student/allads';
  React.useEffect(() => {
    // <Header/>
    Axios.post(address).then((result) => {

      // for var i in 
      
      
      console.log("opwhahs");
      console.log(result.data.files);
      setFiles(result.data.files);
     
     
     
    });
  }, []);

 
  const [adid,setAdid]=React.useState("");
  const [email,setEmail]=React.useState("");
  const [data,setData]=React.useState("");

 
  // const []

  // const submitHandler = (e) => {
  //   e.preventDefault();

  //   // setLoading(true);

  //   if (adid===""||email===""||data==="") {
  //     toast.error("Please fill all fields !", {
  //       position: toast.POSITION.TOP_CENTER,
  //     });
  //     // setLoading(false);
  //   } else {
  //     fetch("http://localhost:3001/api/student/verify", {
         
  //       method: "post",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         email: email,
  //         data:data,
  //         adid:adid
  //       }),
  //     })
  //       .then((res) => res.json(),)
        
  //       .then((result) => {
         
  //         // setLoading(false);

  //         //  toast.success("ueuririr");
  //         console.log(result);
  //         if (result.message === "Success") {
  //           localStorage.setItem('userinfo',JSON.stringify(result));
  //           dispatch({type:"USER", payload:true});
           
  //           toast.success("Sweet !", {
  //             position: toast.POSITION.TOP_CENTER,
  //             autoClose: 1500, 
  //           });
  //           history.push("/search");
  //         } else {
  //           toast.error(`${result.message}`, {
  //             position: toast.POSITION.TOP_CENTER,
  //           });
  //           // window.reloa
  //           history.push("/");
  //         }
  //       });
  //   }
  // };
  

  return (
    <>
    <div className="bodyPlace">
   
      
      {/* <form><input type="text" class="textbox" placeholder="Search" onChange={event=>{setsearch(event.target.value)}}></input></form> */}
      {
          
        Files.filter((value)=>{
          if(search==="")
          {
            return value;
          }
          else if(value.filename.toLowerCase().includes(search.toLowerCase()))
          {
               return value;
          }
        }).map((value, key) => {
          return (
            
              <MediaCard {...value} />
           
          )
        })
      }
    </div>
      {/*  */}
    </>
  );
}