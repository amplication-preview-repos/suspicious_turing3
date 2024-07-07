/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { AudioGuideFileWhereInput } from "./AudioGuideFileWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { AudioGuideFileOrderByInput } from "./AudioGuideFileOrderByInput";

@ArgsType()
class AudioGuideFileFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => AudioGuideFileWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => AudioGuideFileWhereInput, { nullable: true })
  @Type(() => AudioGuideFileWhereInput)
  where?: AudioGuideFileWhereInput;

  @ApiProperty({
    required: false,
    type: [AudioGuideFileOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [AudioGuideFileOrderByInput], { nullable: true })
  @Type(() => AudioGuideFileOrderByInput)
  orderBy?: Array<AudioGuideFileOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { AudioGuideFileFindManyArgs as AudioGuideFileFindManyArgs };