import { env } from "@/utils/env";

export const HashingConfig = {
    /*
    |--------------------------------------------------------------------------
    | Bcrypt Hashing Rounds
    |--------------------------------------------------------------------------
    |
    | This value sets the number of rounds for bcrypt hashing. It determines
    | how computationally expensive the hashing will be. The higher the value,
    | the more secure the hash, but it also takes more time and resources to compute.
    |
    */
    bcryptRounds: env('BCRYPT_ROUNDS', 12),
}