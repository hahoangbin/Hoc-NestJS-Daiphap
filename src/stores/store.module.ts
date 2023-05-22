import { DynamicModule, Module } from '@nestjs/common';
import { StoreService } from './store.service';
import { StoreConfig, StoreFeatureConfig, StoreRootConfig } from './store.config';

let rootStoreConfig: StoreConfig;

const STORE_CONFIG = 'STORE_CONFIG';
const DEFAULT_STORE_DIRNAME = 'store';
const DEFAULT_FILE_NAME = 'data.json';

@Module({})
export class StoreModule {
  static forRoot(storeConfig?: StoreRootConfig): DynamicModule {
    rootStoreConfig = storeConfig
    return {
      module: StoreModule,
      providers: [
        StoreService,
        {
          provide: STORE_CONFIG,
          useValue: storeConfig,
        },
      ],
      exports: [StoreService],
    };
  }

  static forFeature(storeConfig: StoreFeatureConfig): DynamicModule {
    return {
      module: StoreModule,
      providers: [
        StoreService,
        {
          provide: STORE_CONFIG,
          useValue: storeConfig,
        },
      ],
      exports: [StoreService],
    };
  }

  private static createConfig(config: StoreConfig): StoreConfig {
    const defaultConfig: StoreConfig = {
      dirname: DEFAULT_STORE_DIRNAME,
      filename: DEFAULT_FILE_NAME,
    };
    return { ...defaultConfig, ...config };
    // hoặc
    // return Object.assign(defaultConfig, config);
  }
}
