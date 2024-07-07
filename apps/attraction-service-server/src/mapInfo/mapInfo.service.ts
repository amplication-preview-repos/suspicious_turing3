import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { MapInfoServiceBase } from "./base/mapInfo.service.base";

@Injectable()
export class MapInfoService extends MapInfoServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
