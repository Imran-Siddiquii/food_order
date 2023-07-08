import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import { chooseProduct, cuisineData } from "./Reducer/Products";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const { data } = useSelector((state) => state.chooseProducts);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <div>
      <h1>Food Ordering app </h1>
      <h3>Select you cuisine</h3>
      <Stack direction="row" style={{ justifyContent: "center" }} spacing={2}>
        {cuisineData.map((ele) => (
          <Button
            spacing={2}
            key={ele.name}
            variant="contained"
            onClick={() => dispatch(chooseProduct(ele.id))}
          >
            {ele.name}
          </Button>
        ))}
      </Stack>
      <h3>Dished By {data?.name}</h3>
      <Box sx={{ flexGrow: 1 }} onClick={() => navigate(`/food/${data?.id}`)}>
        <Grid container spacing={0} style={{ margin: "20px" }}>
          {data &&
            data?.menu?.map((ele) => (
              <Grid xs={6} md={3} spacing={2} key={ele.name}>
                {/* <Item> */}
                <Card sx={{ maxWidth: 345 }}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="140"
                      image={ele.imgSrc}
                      alt="green iguana"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {ele.name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Rs for {ele?.qty} {ele?.price}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {data?.name}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
                {/* </Item> */}
              </Grid>
            ))}
        </Grid>
      </Box>
    </div>
  );
};
