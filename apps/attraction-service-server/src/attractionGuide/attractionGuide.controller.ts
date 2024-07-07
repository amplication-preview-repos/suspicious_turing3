import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { AttractionGuideService } from "./attractionGuide.service";
import { AttractionGuideControllerBase } from "./base/attractionGuide.controller.base";

@swagger.ApiTags("attractionGuides")
@common.Controller("attractionGuides")
export class AttractionGuideController extends AttractionGuideControllerBase {
  constructor(protected readonly service: AttractionGuideService) {
    super(service);
  }
}
