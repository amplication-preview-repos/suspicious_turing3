import * as graphql from "@nestjs/graphql";
import { AttractionResolverBase } from "./base/attraction.resolver.base";
import { Attraction } from "./base/Attraction";
import { AttractionService } from "./attraction.service";

@graphql.Resolver(() => Attraction)
export class AttractionResolver extends AttractionResolverBase {
  constructor(protected readonly service: AttractionService) {
    super(service);
  }
}
