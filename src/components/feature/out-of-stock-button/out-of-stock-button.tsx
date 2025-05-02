"use client";

import { Button } from "@mwolfart/cobalt-ui";
import { useTranslation } from "react-i18next";

export const OutOfStockButton = () => {
  const { t } = useTranslation();
  return (
    <Button variant="primary" disabled onClick={() => {}}>
      {t("common.out-of-stock")}
    </Button>
  );
};
