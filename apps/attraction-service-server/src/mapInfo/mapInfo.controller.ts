import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { MapInfoService } from "./mapInfo.service";
import { MapInfoControllerBase } from "./base/mapInfo.controller.base";

@swagger.ApiTags("mapInfos")
@common.Controller("mapInfos")
export class MapInfoController extends MapInfoControllerBase {
  constructor(protected readonly service: MapInfoService) {
    super(service);
  }
}
