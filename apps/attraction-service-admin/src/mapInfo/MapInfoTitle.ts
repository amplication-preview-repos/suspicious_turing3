import { MapInfo as TMapInfo } from "../api/mapInfo/MapInfo";

export const MAPINFO_TITLE_FIELD = "id";

export const MapInfoTitle = (record: TMapInfo): string => {
  return record.id?.toString() || String(record.id);
};
