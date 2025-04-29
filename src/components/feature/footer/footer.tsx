import initTranslations from "@/app/i18n";
import { Typography } from "@mwolfart/cobalt-ui";

type Props = {
  locale: string;
};

export const Footer = async ({ locale }: Props) => {
  const { t } = await initTranslations(locale, ["common"]);

  return (
    <footer className="flex items-center justify-center w-full my-8">
      <Typography>{t("footer.text")}</Typography>
    </footer>
  );
};
