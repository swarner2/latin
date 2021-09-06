import { IrregularVerb } from "../../../models/entities/irregular-verb";
import { SUM_ESSE_FUI_FUTURUS_FORMS } from "../../entities/sum-esse-present-forms.data";


export const SUM_ESSE_FUI_FUTURUS = new IrregularVerb({
    forms: SUM_ESSE_FUI_FUTURUS_FORMS,
    // TODO :: update definitions to account for irregular english
    definitions: ['is'],
    stem: ''
})