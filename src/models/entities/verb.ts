export interface VerbI {
definitions: string[], stem: string
}

export class Verb {
    definitions: string[] = [];
    stem: string = ''

    constructor(config: VerbI) {
        Object.assign(this, config)
    }

}