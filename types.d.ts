

export interface Sim {
    id: string,
    alive: boolean;
    sex: number;
    spouse?: string;
    name: string;
    birthYear: number;
    deathYear?: number;
    parents?: SimParents;
    children: string[];
    lastYearProcessed?: number;
    error?: SimProccessingError;
}

interface SimParents {
    geneticFather: string;
    geneticMother: string;
}

interface SimProccessingError {
    logic: string;
    error: Error;
    details: string
}