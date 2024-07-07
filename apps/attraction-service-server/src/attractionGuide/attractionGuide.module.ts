import { Module } from "@nestjs/common";
import { AttractionGuideModuleBase } from "./base/attractionGuide.module.base";
import { AttractionGuideService } from "./attractionGuide.service";
import { AttractionGuideController } from "./attractionGuide.controller";
import { AttractionGuideResolver } from "./attractionGuide.resolver";

@Module({
  imports: [AttractionGuideModuleBase],
  controllers: [AttractionGuideController],
  providers: [AttractionGuideService, AttractionGuideResolver],
  exports: [AttractionGuideService],
})
export class AttractionGuideModule {}
