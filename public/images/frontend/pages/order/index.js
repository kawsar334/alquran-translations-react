import React from "react";
import MainLayout from "../../src/components/layout/MainLayout";
import OrderSuccessPage from "../../src/components/order-success-page";
import CssBaseline from "@mui/material/CssBaseline";
import { getServerSideProps } from "../index";
import SEO from "../../src/components/seo";
import CustomContainer from "../../src/components/container";
import { NoSsr } from "@mui/material";
import { getImageUrl } from "utils/CustomFunctions";

const index = ({ configData, landingPageData }) => {
  return (
    <>
      <CssBaseline />
      <SEO
        title={configData ? `Order` : "Loading..."}
        image={`${getImageUrl(
          { value: configData?.logo_storage },
          "business_logo_url",
          configData
        )}/${configData?.fav_icon}`}
        businessName={configData?.business_name}
      />
      <MainLayout configData={configData} landingPageData={landingPageData}>
        <CustomContainer>
          <NoSsr>
            <OrderSuccessPage configData={configData} />
          </NoSsr>
        </CustomContainer>
      </MainLayout>
    </>
  );
};

index.propTypes = {};

export default index;
export { getServerSideProps };
