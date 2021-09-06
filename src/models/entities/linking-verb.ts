import { UseCase } from "../../consts/entities/use-case-name";
import { Verb } from "./verb";

export class LinkingVerb extends Verb {
    takesCase!: UseCase.predicate;

    constructor(definitions: string[], stem: string) {
        super(definitions, stem);
    }
}