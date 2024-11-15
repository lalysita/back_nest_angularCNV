import { Injectable } from '@nestjs/common';
import * as fs from 'fs'
import { parse } from "dotenv"

@Injectable()
export class ConfigService {
    private readonly envConfig: {[key: string]: string}
    constructor(){
        const env = process.env.NODE_ENV || 'development'
        const envFilePath= `${__dirname}/../../.env${env}`
        const existsPath = fs.existsSync(envFilePath)
        if (!existsPath){
            console.log( `.env.${__dirname}/../../.env.${env}`)
            process.exit(0)
        }
        this.envConfig = parse(fs.readFileSync(envFilePath))
       // console.log("*********",envFilePath)
       /*
      }
        else {
            const envFilePath = __dirname + '/../../.env.production'
            const existsPath = fs.existsSync(envFilePath)
            if (!existsPath) {
                console.log('.env.production no existe PRODUCTION')
                process.exit(0)
            }
            this.envConfig = parse(fs.readFileSync(envFilePath))
        }*/
    }
    get(key: string): string {
        return this.envConfig[key];
    }
}
