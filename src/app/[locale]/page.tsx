import { Heading } from "@mwolfart/cobalt-ui";
import initTranslations from "../i18n";
import { Trans } from "react-i18next/TransWithoutContext";

type Props = {
  params: {
    locale: string;
  };
};

export default async function Home({ params }: Props) {
  const { locale } = await params;
  const { t } = await initTranslations(locale, ["common"]);

  return (
    <div className="flex items-center justify-center h-full">
      <Heading variant="h1">
        <Trans i18nKey="home.welcome" t={t}>
          Welcome to
          <span className="font-zain text-blue-300 text-6xl">Cobalt Shop</span>
        </Trans>
      </Heading>
    </div>
  );
}
