import 'dotenv/config';
import { get } from 'env-var';


export const envs = {

    PORT: get('PORT').required().asPortNumber(),   // puerto del exposicion del server
    PUBLIC_PATH: get('PUBLIC_PATH').default('public').asString(), // carpeta public si no se especifica toma default

}



