interface Trail {
    id: string;
    name: string;
    difficulty: string;
    distance: number; // Distância da trilha
    rating: number;
    photo: string;
    createdBy: User; // Propriedade para o usuário que criou a trilha
    author?: string;
  }