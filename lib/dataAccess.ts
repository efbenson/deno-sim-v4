import { Sim } from '../types.d.ts';

import { v4 } from 'https://deno.land/std/uuid/mod.ts'

import { getSex } from './math.ts';

let sims: Sim[] = []

async function initWorld(count: number): Promise<void> {
    for (let i = 0; i < count; i++) {
        sims.push(await generate({ birthYear: 0, currentYear: 0, geneticMother: 'unknown', geneticFather: 'unknown' }));
    }
}

async function generate(config: { birthYear: number, currentYear: number, geneticFather: string, geneticMother: string }) {
    const id = v4.generate();
    const sim: Sim = {
        alive: true,
        birthYear: config.birthYear,
        sex: getSex(),
        children: [],
        lastYearProcessed: config.currentYear,
        name: id,
        id,
        parents: { geneticFather: config.geneticFather, geneticMother: config.geneticMother },
    }

    return sim;
}

async function getPopulation(): Promise<Sim[]> {
    return sims;
}


async function getSim() {

}


export { initWorld, getPopulation, getSim };