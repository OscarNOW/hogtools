import { bpm } from "/validations/bpm.js";
import { degree } from "/validations/degree.js";
import { percent_0_inf } from "/validations/percent_0_inf.js";
import { percent_inf_inf } from "/validations/percent_inf_inf.js";
import { time } from "/validations/time.js";

export const validations = {
    bpm,
    percent_0_inf,
    percent_inf_inf,
    degree,
    time
}