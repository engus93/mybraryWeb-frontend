// Import Modules
import React from "react";
import MainPresenter from "./MainPresenter";
import { useQuery } from "react-apollo-hooks";
import { LIST_BOOK, MAIN_LIST_BOOK } from "./MainQueries";

// Import My Files
export default () => {
  const bestSellerSlider = {
    dots: true,
    infinite: true,
    // autoplay: true,
    speed: 1000,
    autoplaySpeed: 3000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };

  const categorySlider = {
    dots: true,
    infinite: true,
    // autoplay: true,
    speed: 1000,
    autoplaySpeed: 3000,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 375,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };

  // const {
  //   data: { ListBook },
  //   loading
  // } = useQuery(LIST_BOOK, {
  //   variables: {
  //     type: "Bestseller"
  //   }
  // });

  const {
    data: { MainListBook },
    loading
  } = useQuery(MAIN_LIST_BOOK, {
    variables: {
      type: "Bestseller"
    }
  });

  return (
    <MainPresenter
      loading={loading}
      MainListBook={MainListBook}
      bestSellerSlider={bestSellerSlider}
      categorySlider={categorySlider}
    />
  );
};
