import { Module } from "@nestjs/common";
import { MapInfoModuleBase } from "./base/mapInfo.module.base";
import { MapInfoService } from "./mapInfo.service";
import { MapInfoController } from "./mapInfo.controller";
import { MapInfoResolver } from "./mapInfo.resolver";

@Module({
  imports: [MapInfoModuleBase],
  controllers: [MapInfoController],
  providers: [MapInfoService, MapInfoResolver],
  exports: [MapInfoService],
})
export class MapInfoModule {}
