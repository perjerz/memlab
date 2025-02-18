/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 * @oncall ws_labs
 */

import type {ParsedArgs} from 'minimist';
import type {MemLabConfig} from '@memlab/core';
import {BaseOption} from '@memlab/core';

export default class SkipScreenshotOption extends BaseOption {
  getOptionName(): string {
    return 'skip-screenshot';
  }

  getDescription(): string {
    return 'skip taking screenshots';
  }

  async parse(config: MemLabConfig, args: ParsedArgs): Promise<void> {
    if (args['skip-screenshot']) {
      config.skipScreenshot = true;
    }
  }
}
