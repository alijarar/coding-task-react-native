import { ActivityIndicator, Text, View } from "react-native";
import { useTranslation } from "react-i18next";
import { SafeScreen } from "@/components/template";

import type { ApplicationScreenProps } from "@/types/navigation";
import { SuccessScreenWrapper } from "./styled";
import BottomImageScreen from "../Login/BottomImage";

function Success({ navigation }: ApplicationScreenProps) {
  const { t } = useTranslation(["welcome", "common"]);
  return (
    <SafeScreen>
      <BottomImageScreen>

      <SuccessScreenWrapper>
        <Text style={{ fontSize: 60, color: "white", fontWeight: "bold" }}>
          {t("common:success")}
        </Text>
      </SuccessScreenWrapper>
      </BottomImageScreen>
    </SafeScreen>
  );
}

export default Success;
