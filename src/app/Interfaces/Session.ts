import { User } from "./User";

export interface Session {
    id: number;
    userId: User | null;
    startTime: Date;
    endTime: Date;
    gameId: number;
    totalSpent: number;
    totalWon: number;
    
}