import { City as TCity } from "../api/city/City";

export const CITY_TITLE_FIELD = "id";

export const CityTitle = (record: TCity): string => {
  return record.id?.toString() || String(record.id);
};
