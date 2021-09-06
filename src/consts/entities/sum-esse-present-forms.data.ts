import { VerbEndings } from "../../models/entities/verb-endings";
import { Number } from "./number.data";
import { Person } from "./person.data";
import { Voice } from "./voice.data";

export const SUM_ESSE_FUI_FUTURUS_FORMS: VerbEndings = {
    [Voice.active]: {
        [Person.first]: {
            [Number.singular]: 'sum',
            [Number.plural]: 'sumus'
        },
        [Person.second]: {
            [Number.singular]: 'es',
            [Number.plural]: 'estis'
        },
        [Person.third]: {
            [Number.singular]: 'est',
            [Number.plural]: 'sunt'
        }
    }
}