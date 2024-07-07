/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import {
  Prisma,
  AttractionGuide as PrismaAttractionGuide,
} from "@prisma/client";

export class AttractionGuideServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.AttractionGuideCountArgs, "select">
  ): Promise<number> {
    return this.prisma.attractionGuide.count(args);
  }

  async attractionGuides(
    args: Prisma.AttractionGuideFindManyArgs
  ): Promise<PrismaAttractionGuide[]> {
    return this.prisma.attractionGuide.findMany(args);
  }
  async attractionGuide(
    args: Prisma.AttractionGuideFindUniqueArgs
  ): Promise<PrismaAttractionGuide | null> {
    return this.prisma.attractionGuide.findUnique(args);
  }
  async createAttractionGuide(
    args: Prisma.AttractionGuideCreateArgs
  ): Promise<PrismaAttractionGuide> {
    return this.prisma.attractionGuide.create(args);
  }
  async updateAttractionGuide(
    args: Prisma.AttractionGuideUpdateArgs
  ): Promise<PrismaAttractionGuide> {
    return this.prisma.attractionGuide.update(args);
  }
  async deleteAttractionGuide(
    args: Prisma.AttractionGuideDeleteArgs
  ): Promise<PrismaAttractionGuide> {
    return this.prisma.attractionGuide.delete(args);
  }
}