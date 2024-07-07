import * as graphql from "@nestjs/graphql";
import { MapInfoResolverBase } from "./base/mapInfo.resolver.base";
import { MapInfo } from "./base/MapInfo";
import { MapInfoService } from "./mapInfo.service";

@graphql.Resolver(() => MapInfo)
export class MapInfoResolver extends MapInfoResolverBase {
  constructor(protected readonly service: MapInfoService) {
    super(service);
  }
}
