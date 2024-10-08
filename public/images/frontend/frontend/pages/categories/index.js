import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import MainLayout from "../../src/components/layout/MainLayout";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/router";
import Categories from "../../src/components/categories";
import { getServerSideProps } from "../index";
import SEO from "../../src/components/seo";
import CustomContainer from "../../src/components/container";
import { CustomStackFullWidth } from "styled-components/CustomStyles.style";
import { getImageUrl } from "utils/CustomFunctions";

const Index = ({ configData, landingPageData }) => {
  const { t } = useTranslation();
  const router = useRouter();
  return (
    <>
      <CssBaseline />
      <SEO
        title={configData ? `Categories` : "Loading..."}
        image={`${getImageUrl(
          { value: configData?.logo_storage },
          "business_logo_url",
          configData
        )}/${configData?.fav_icon}`}
        businessName={configData?.business_name}
      />
      <MainLayout configData={configData} landingPageData={landingPageData}>
        <CustomContainer>
          <CustomStackFullWidth mt="1rem">
            <Categories configData={configData} t={t} />
          </CustomStackFullWidth>
        </CustomContainer>
      </MainLayout>
    </>
  );
};

export default Index;
export { getServerSideProps };
