import { AttractionGuideWhereInput } from "./AttractionGuideWhereInput";
import { AttractionGuideOrderByInput } from "./AttractionGuideOrderByInput";

export type AttractionGuideFindManyArgs = {
  where?: AttractionGuideWhereInput;
  orderBy?: Array<AttractionGuideOrderByInput>;
  skip?: number;
  take?: number;
};
