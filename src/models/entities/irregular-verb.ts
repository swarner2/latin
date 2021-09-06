import { Verb, VerbI } from "./verb";
import { VerbEndings } from "./verb-endings";

export interface IrregularVerbI {
    definitions: string[],
    forms: VerbEndings,
}

export class IrregularVerb extends Verb {
    forms: VerbEndings

    constructor(config: IrregularVerb) {
        super(config);
        this.forms = config.forms
    }
}