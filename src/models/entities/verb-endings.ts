import { Number } from "../../consts/entities/number.data";
import { Person } from "../../consts/entities/person.data";
import { Voice } from "../../consts/entities/voice.data";

export interface VerbEndings {
    [Voice.active]: {
        [Person.first]: {
            [Number.singular]: string,
            [Number.plural]: string
        },
        [Person.second]: {
            [Number.singular]: string,
            [Number.plural]: string
        },
        [Person.third]: {
            [Number.singular]: string,
            [Number.plural]: string
        }
    }
}