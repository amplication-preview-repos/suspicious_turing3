import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AudioGuideFileServiceBase } from "./base/audioGuideFile.service.base";

@Injectable()
export class AudioGuideFileService extends AudioGuideFileServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
