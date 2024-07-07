import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { AttractionService } from "./attraction.service";
import { AttractionControllerBase } from "./base/attraction.controller.base";

@swagger.ApiTags("attractions")
@common.Controller("attractions")
export class AttractionController extends AttractionControllerBase {
  constructor(protected readonly service: AttractionService) {
    super(service);
  }
}
