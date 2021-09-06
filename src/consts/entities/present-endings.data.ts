import { VerbEndings } from "../../models/entities/verb-endings";
import { Number } from "./number.data";
import { Person } from "./person.data";
import { Voice } from "./voice.data";

export const PRESENT: VerbEndings = {
    [Voice.active]: {
        [Person.first]: {
            [Number.singular]: 'o',
            [Number.plural]: 'mus'
        },
        [Person.second]: {
            [Number.singular]: 's',
            [Number.plural]: 'tis'
        },
        [Person.third]: {
            [Number.singular]: 't',
            [Number.plural]: 'nt'
        }
    }
}