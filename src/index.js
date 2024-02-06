import messages_fr_cm_csu from "./translations/fr_CM.json";
import messages_en_cm_csu from "./translations/en_CM.json";

const DEFAULT_CONFIG = {
  "translations": [
    { key: 'fr', messages: messages_fr_cm_csu },
    { key: 'en', messages: messages_en_cm_csu }
  ],
}

export const LanguageFrCmrCSUModule = (cfg) => {
  return { ...DEFAULT_CONFIG, ...cfg };
}