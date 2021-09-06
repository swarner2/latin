import { UseCase } from "../../consts/entities/use-case-name";
import { Verb, VerbI } from "./verb";


export class LinkingVerb extends Verb {
    takesCase!: UseCase.predicate;

    constructor(config: VerbI) {
        super(config);
    }
}