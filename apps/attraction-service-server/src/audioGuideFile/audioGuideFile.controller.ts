import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { AudioGuideFileService } from "./audioGuideFile.service";
import { AudioGuideFileControllerBase } from "./base/audioGuideFile.controller.base";

@swagger.ApiTags("audioGuideFiles")
@common.Controller("audioGuideFiles")
export class AudioGuideFileController extends AudioGuideFileControllerBase {
  constructor(protected readonly service: AudioGuideFileService) {
    super(service);
  }
}
