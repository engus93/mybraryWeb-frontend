// Import Modules
import React from "react";
import MainPresenter from "./MainPresenter";
import { useQuery } from "react-apollo-hooks";
import { HOT_NEWBOOK } from "./MainQueries";

// Import My Files
export default () => {
  const sliderSetting = {
    dots: true,
    infinite: true,
    // autoplay: true,
    speed: 1000,
    autoplaySpeed: 3000,
    slidesToShow: 3,
    slidesToScroll: 1
  };

  const {
    data: { ListBook },
    loading
  } = useQuery(HOT_NEWBOOK, {
    variables: {
      type: "ItemNewSpecial"
    }
  });

  return (
    <MainPresenter
      loading={loading}
      ListBook={ListBook}
      sliderSetting={sliderSetting}
    />
  );
};
