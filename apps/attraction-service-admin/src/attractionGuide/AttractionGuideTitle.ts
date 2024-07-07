import { AttractionGuide as TAttractionGuide } from "../api/attractionGuide/AttractionGuide";

export const ATTRACTIONGUIDE_TITLE_FIELD = "id";

export const AttractionGuideTitle = (record: TAttractionGuide): string => {
  return record.id?.toString() || String(record.id);
};
