import { Attraction as TAttraction } from "../api/attraction/Attraction";

export const ATTRACTION_TITLE_FIELD = "id";

export const AttractionTitle = (record: TAttraction): string => {
  return record.id?.toString() || String(record.id);
};
