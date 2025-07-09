// Shared types and schemas for the application
export interface Level {
  id: number;
  name: string;
  description: string;
  requirements: string;
  practices: string;
}

export interface Entity {
  id: number;
  name: string;
  domain: string;
  element: string;
  symbol: string;
  description: string;
}

export interface Knowledge {
  id: number;
  title: string;
  content: string;
  category: string;
  levelRequired: number;
}