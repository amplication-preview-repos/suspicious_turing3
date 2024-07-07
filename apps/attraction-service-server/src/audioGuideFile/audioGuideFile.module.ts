import { Module } from "@nestjs/common";
import { AudioGuideFileModuleBase } from "./base/audioGuideFile.module.base";
import { AudioGuideFileService } from "./audioGuideFile.service";
import { AudioGuideFileController } from "./audioGuideFile.controller";
import { AudioGuideFileResolver } from "./audioGuideFile.resolver";

@Module({
  imports: [AudioGuideFileModuleBase],
  controllers: [AudioGuideFileController],
  providers: [AudioGuideFileService, AudioGuideFileResolver],
  exports: [AudioGuideFileService],
})
export class AudioGuideFileModule {}
