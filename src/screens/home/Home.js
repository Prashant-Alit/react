import React from "react";
import { Grid, Card, CardContent, CardMedia, Typography, Box } from "@mui/material";

const cardData = [
  { id: 1, title: "Mountain View", image: "https://images.unsplash.com/photo-1444858440655-e7cf0269024e?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: 2, title: "Cityscape", image: "https://media.istockphoto.com/id/497900492/photo/brisbane-at-night.jpg?s=2048x2048&w=is&k=20&c=nA6x-KJ5wckTWp3AQeifXwVRV-lJs7e32dEHybMmmvk=" },
  { id: 3, title: "Beach", image: "https://media.istockphoto.com/id/1089746020/photo/seashell.jpg?s=1024x1024&w=is&k=20&c=C-m2hhJgnzesB_0brFXbs4h1tXK0KOG7C-95asCPXDk=" },
  { id: 4, title: "Forest", image: "https://plus.unsplash.com/premium_photo-1669613233557-1676c121fe73?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: 5, title: "Desert", image: "https://media.istockphoto.com/id/519013803/photo/camel-rider-in-jaisalmer-desert-india.jpg?s=2048x2048&w=is&k=20&c=GC47-JB37zpFrM9oMBX8crtg0jLNZgWPe7__Fe6hHDg=" },
  { id: 6, title: "Village", image: "https://plus.unsplash.com/premium_photo-1716025524809-048d12b087d6?q=80&w=2899&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: 7, title: "Lake", image: "https://images.unsplash.com/photo-1628895272659-c9c1642b9471?q=80&w=3028&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: 8, title: "Snowy Peaks", image: "https://media.istockphoto.com/id/1288385045/photo/snowcapped-k2-peak.jpg?s=2048x2048&w=is&k=20&c=w2Qcpt4yVuD8nfG5pkrxwo0t_aq-fHewpEQX4gRa870=" },
];

export const Home = () => {
  return (
    <Box p={4}>
      <Grid container spacing={2}>
        {cardData.map((item) => (
          <Grid item xs={12} sm={6} md={3} key={item.id}>
            <Card>
              <CardMedia
                component="img"
                height="150"
                image={item.image}
                alt={item.title}
              />
              <CardContent>
                <Typography variant="h6" component="div" align="center">
                  {item.title}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};


