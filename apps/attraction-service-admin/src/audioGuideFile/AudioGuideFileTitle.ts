import { AudioGuideFile as TAudioGuideFile } from "../api/audioGuideFile/AudioGuideFile";

export const AUDIOGUIDEFILE_TITLE_FIELD = "id";

export const AudioGuideFileTitle = (record: TAudioGuideFile): string => {
  return record.id?.toString() || String(record.id);
};
