import { MapInfoWhereInput } from "./MapInfoWhereInput";
import { MapInfoOrderByInput } from "./MapInfoOrderByInput";

export type MapInfoFindManyArgs = {
  where?: MapInfoWhereInput;
  orderBy?: Array<MapInfoOrderByInput>;
  skip?: number;
  take?: number;
};
