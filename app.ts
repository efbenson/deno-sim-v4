import { logger } from './lib/stateful.ts'

import { reset } from './lib/world.ts';

logger.info(Deno.args);

reset(10);