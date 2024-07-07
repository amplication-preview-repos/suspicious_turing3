import { AudioGuideFileWhereInput } from "./AudioGuideFileWhereInput";
import { AudioGuideFileOrderByInput } from "./AudioGuideFileOrderByInput";

export type AudioGuideFileFindManyArgs = {
  where?: AudioGuideFileWhereInput;
  orderBy?: Array<AudioGuideFileOrderByInput>;
  skip?: number;
  take?: number;
};
