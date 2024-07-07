import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AttractionServiceBase } from "./base/attraction.service.base";

@Injectable()
export class AttractionService extends AttractionServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
