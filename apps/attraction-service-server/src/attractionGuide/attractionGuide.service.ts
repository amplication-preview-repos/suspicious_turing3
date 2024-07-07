import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AttractionGuideServiceBase } from "./base/attractionGuide.service.base";

@Injectable()
export class AttractionGuideService extends AttractionGuideServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
