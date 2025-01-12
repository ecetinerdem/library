interface Book {
    id: number;
    title: string;
    author: string;
    genre: string;
    rating: number;
    total_copies: number;
    available_copies: number;
    description: string;
    coverColor: string;
    coverImage: string;
    video: string;
    summary: string;
    isLoanedBook?: boolean;
}