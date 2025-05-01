"use client";

import { Button } from "@mwolfart/cobalt-ui";
import { useTranslation } from "react-i18next";

export const AddToCartButton = () => {
  const { t } = useTranslation("common");
  return (
    <Button variant="primary" onClick={() => console.log("added to cart")}>
      {t("common.add-to-cart")}
    </Button>
  );
};
