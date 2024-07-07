import * as graphql from "@nestjs/graphql";
import { AudioGuideFileResolverBase } from "./base/audioGuideFile.resolver.base";
import { AudioGuideFile } from "./base/AudioGuideFile";
import { AudioGuideFileService } from "./audioGuideFile.service";

@graphql.Resolver(() => AudioGuideFile)
export class AudioGuideFileResolver extends AudioGuideFileResolverBase {
  constructor(protected readonly service: AudioGuideFileService) {
    super(service);
  }
}
