// import styled from "@emotion/styled";
import { Star } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  TextField,
  Typography,
  styled,
} from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addRating } from "./Reducer/Products";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  //   ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "start",
  marginTop: "3rem",
  color: theme.palette.text.secondary,
  border: "none",
}));

export const FoodDetails = () => {
  const { data } = useSelector((state) => state.chooseProducts);

  const [open, setOpen] = React.useState(false);
  const [rating, setRating] = useState("");
  const [comment, setComment] = useState("");
  const dispatch = useDispatch();
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleSumbit = (e) => {
    const obj = { rating, comment };
    dispatch(addRating(obj));
    console.log("🚀 ~ file: FoodDetails.jsx:53 ~ handleSumbit ~ obj:", obj);
    setOpen(false);
  };
  return (
    <Container>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container>
          <Grid item xs={8}>
            <Item>
              <Typography gutterBottom variant="h5" component="div">
                {data.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {data?.menu?.map((ele) => (
                  <span>{ele.name}, </span>
                ))}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {data?.address}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Avarage Rating : {data?.averageRating}
              </Typography>
            </Item>
          </Grid>
          <Grid
            item
            xs={4}
            style={{
              alignItems: "center",
              justifyContent: "center",
              display: "flex",
            }}
          >
            <Item>
              <Button onClick={handleClickOpen}>Add Review</Button>
            </Item>
          </Grid>
        </Grid>
      </Box>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add Your Review</DialogTitle>
        <DialogContent>
          <Box
            noValidate
            component="form"
            sx={{
              display: "flex",
              flexDirection: "column",
              m: "auto",
              width: "fit-content",
            }}
          >
            <FormControl sx={{ mt: 2, minWidth: 120 }}>
              <InputLabel htmlFor="Select Rating">Select Rating</InputLabel>
              <Select
                autoFocus
                // value={maxWidth}
                onChange={(e) => setRating(e.target.value)}
                label="Select Rating"
              >
                <MenuItem value="1">1</MenuItem>
                <MenuItem value="2">2</MenuItem>
                <MenuItem value="3">3</MenuItem>
                <MenuItem value="4">4</MenuItem>
                <MenuItem value="5">5</MenuItem>
              </Select>
              <TextField
                sx={{ mt: 2, minWidth: 120 }}
                onChange={(e) => setComment(e.target.value)}
                label="Comment"
                pt={5}
              />
            </FormControl>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>

          <Button onClick={handleSumbit}>Submit</Button>
        </DialogActions>
      </Dialog>
      <hr />
      <Typography align="start" mt={3} component="div" variant="h6">
        Review
      </Typography>
      {data.ratings.map((ele) => (
        <div key={ele.revName} style={{}}>
          <div
            style={{
              display: "flex",
              width: "100%",
              // alignItems: "start",
              justifyContent: "center",
              margin: "16px",
            }}
          >
            <Avatar
              alt="username"
              variant="round"
              style={{ paddingLeft: "0", margin: 0, cursor: "pointer" }}
              src={ele?.pp}
              // sx={{ width: 175, height: 130 }}
              // onClick={() => handleAvatarChange(avatar.Avatar)}
            />
            <div style={{ paddingLeft: "10px" }}>{ele.revName}</div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginRight: "16px",
                fontSize: "14px",
                paddingLeft: "15px",
              }}
            >
              {ele.rating} <Star style={{ textAlign: "end" }} />
            </div>
          </div>
          <Typography
            variant="h8"
            align="start !important"
            style={{ textAlign: "start !important" }}
          >
            {ele.comment}
          </Typography>
        </div>
      ))}
    </Container>
  );
};
