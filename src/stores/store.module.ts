import { DynamicModule, Module } from '@nestjs/common';
import { StoreService } from './store.service';
import {
  STORE_CONFIG,
  StoreConfig,
  StoreFeatureConfig,
  StoreRootConfig,
} from './store.config';

let rootStoreOption: StoreConfig;
const DEFAULT_STORE_DIRNAME = 'store';
const DEFAULT_FILE_NAME = 'data.json';

@Module({
  providers: [StoreService],
  exports: [StoreService],
})
class RootStoreModule {}

@Module({})
export class StoreModule {
  static forRoot(storeConfig?: StoreRootConfig): DynamicModule {
    rootStoreOption = StoreModule.buildStoreOption(storeConfig);
    return {
      module: RootStoreModule,
      providers: [
        {
          provide: STORE_CONFIG,
          useValue: rootStoreOption,
        },
      ],
    };
  }

  static forFeature(storeConfig: StoreFeatureConfig): DynamicModule {
    const token = 'STORE_SEVICE' + storeConfig.filename;
    return {
      module: StoreModule,
      imports: [RootStoreModule],
      providers: [
        {
          provide: token,
          useFactory: () => {
            const storeOption = StoreModule.buildStoreOption({
              ...rootStoreOption,
              ...storeConfig,
            });
            return new StoreService(storeOption);
          },
        },
      ],
      exports: [token],
    };
  }

  private static buildStoreOption(storeOptions: StoreConfig) {
    return Object.assign(
      {
        rootStoreOption,
        storeOptions
      }
    );
    // hoặc
    // return { ...rootStoreOption, ...storeOptions };
  }
}
