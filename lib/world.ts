import { initWorld, getPopulation } from './dataAccess.ts';
import { logger } from './stateful.ts';

async function reset(count: number): Promise<void> {
    await initWorld(count);
    const pop = await getPopulation();
    console.dir(pop);

}

export { reset }