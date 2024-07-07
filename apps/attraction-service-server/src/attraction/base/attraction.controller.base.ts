/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { AttractionService } from "../attraction.service";
import { AttractionCreateInput } from "./AttractionCreateInput";
import { Attraction } from "./Attraction";
import { AttractionFindManyArgs } from "./AttractionFindManyArgs";
import { AttractionWhereUniqueInput } from "./AttractionWhereUniqueInput";
import { AttractionUpdateInput } from "./AttractionUpdateInput";

export class AttractionControllerBase {
  constructor(protected readonly service: AttractionService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Attraction })
  async createAttraction(
    @common.Body() data: AttractionCreateInput
  ): Promise<Attraction> {
    return await this.service.createAttraction({
      data: data,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Attraction] })
  @ApiNestedQuery(AttractionFindManyArgs)
  async attractions(@common.Req() request: Request): Promise<Attraction[]> {
    const args = plainToClass(AttractionFindManyArgs, request.query);
    return this.service.attractions({
      ...args,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Attraction })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async attraction(
    @common.Param() params: AttractionWhereUniqueInput
  ): Promise<Attraction | null> {
    const result = await this.service.attraction({
      where: params,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Attraction })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateAttraction(
    @common.Param() params: AttractionWhereUniqueInput,
    @common.Body() data: AttractionUpdateInput
  ): Promise<Attraction | null> {
    try {
      return await this.service.updateAttraction({
        where: params,
        data: data,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Attraction })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteAttraction(
    @common.Param() params: AttractionWhereUniqueInput
  ): Promise<Attraction | null> {
    try {
      return await this.service.deleteAttraction({
        where: params,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}