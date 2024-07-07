import * as graphql from "@nestjs/graphql";
import { AttractionGuideResolverBase } from "./base/attractionGuide.resolver.base";
import { AttractionGuide } from "./base/AttractionGuide";
import { AttractionGuideService } from "./attractionGuide.service";

@graphql.Resolver(() => AttractionGuide)
export class AttractionGuideResolver extends AttractionGuideResolverBase {
  constructor(protected readonly service: AttractionGuideService) {
    super(service);
  }
}
