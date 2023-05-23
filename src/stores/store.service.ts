import { Inject, Injectable } from '@nestjs/common';
import * as fs from 'fs';
import { STORE_CONFIG, StoreConfig } from './store.config';

@Injectable()
export class StoreService {
  constructor(
    @Inject(STORE_CONFIG) private readonly storeConfig: StoreConfig,
  ) {
    if (!fs.existsSync(this.storeConfig.dirname)) {
      fs.mkdirSync(this.storeConfig.dirname);
    }
  }

  save(data: any): void {
    console.log(data);
    fs.appendFileSync(
      `${this.storeConfig.dirname}/${this.storeConfig.filename}`,
      JSON.stringify(data),
    );
  }
}
