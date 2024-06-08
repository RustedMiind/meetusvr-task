import React, { Component } from "react";
import { Box, Rating, Stack, Typography } from "@mui/material";
import ProductCard from "../../../../components/ProductCard";

// Dummy Images
import product1 from "../../../../assets/products/Group 575@2x.png";
import product2 from "../../../../assets/products/Group 583@2x.png";
import product3 from "../../../../assets/products/Group 589@2x.png";
import product4 from "../../../../assets/products/Group 597@2x.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

class SimilarProducts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slidesPerView: this.getSlidesPerView(),
    };
  }

  componentDidMount() {
    window.addEventListener("resize", this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
  }

  handleResize = () => {
    this.setState({ slidesPerView: this.getSlidesPerView() });
  };

  getSlidesPerView = () => {
    const width = window.innerWidth;
    if (width >= 1200) return 4;
    if (width >= 992) return 3;
    if (width >= 550) return 2;
    return 1;
  };

  render() {
    const { slidesPerView } = this.state;

    return (
      <Stack>
        <Typography variant="h5" color="primary.main" fontWeight={700}>
          Similar Products
        </Typography>
        <Typography color="text.secondary">
          You may like these products also
        </Typography>

        <Box mt={2}>
          <Swiper
            key={slidesPerView}
            modules={[Autoplay]}
            autoplay={{ delay: 5000 }}
            loop
            spaceBetween={16}
            slidesPerView={slidesPerView}
          >
            <SwiperSlide>
              <ProductCard image={product1} />
            </SwiperSlide>
            <SwiperSlide>
              <ProductCard image={product2} />
            </SwiperSlide>
            <SwiperSlide>
              <ProductCard image={product3} />
            </SwiperSlide>
            <SwiperSlide>
              <ProductCard image={product4} />
            </SwiperSlide>
            <SwiperSlide>
              <ProductCard image={product1} />
            </SwiperSlide>
            <SwiperSlide>
              <ProductCard image={product2} />
            </SwiperSlide>
            <SwiperSlide>
              <ProductCard image={product3} />
            </SwiperSlide>
            <SwiperSlide>
              <ProductCard image={product4} />
            </SwiperSlide>
          </Swiper>
        </Box>
      </Stack>
    );
  }
}

export default SimilarProducts;
