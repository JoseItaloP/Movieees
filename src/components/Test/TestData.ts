
import { Card } from "../../types/cardShow";
import data from "../../types/data";
import Urls from "../Homi/Urls";

type urlS = {
    urlTopedMovies: string;
};

type elementData = Omit<data, 'results'> & {
    results: Card[]
}

export const { urlTopedMovies }: urlS = Urls();

export const mockFetchedData: elementData = {
    page: 1,
    results: [
        {
            id: 101,
            title: "Title One",
            poster_path: "/path/to/poster1.jpg",
            popularity: 8.5,
            release_date: "2023-01-01",
        },
        {
            id: 102,
            title: "Title Two",
            poster_path: "/path/to/poster2.jpg",
            popularity: 7.8,
            release_date: "2023-02-01",
        },
        {
            id: 103,
            title: "Title Three",
            poster_path: "/path/to/poster3.jpg",
            popularity: 9.1,
            release_date: "2023-03-01",
        },
        {
            id: 104,
            title: "Title 4",
            poster_path: "/p4.jpg",
            popularity: 7,
            release_date: "2023-04-01",
        },
        {
            id: 105,
            title: "Title 5",
            poster_path: "/p5.jpg",
            popularity: 6,
            release_date: "2023-05-01",
        },
        {
            id: 106,
            title: "Title 6",
            poster_path: "/p6.jpg",
            popularity: 8,
            release_date: "2023-06-01",
        },
        {
            id: 107,
            title: "Title 7",
            poster_path: "/p7.jpg",
            popularity: 9,
            release_date: "2023-07-01",
        },
        {
            id: 108,
            title: "Title 8",
            poster_path: "/p8.jpg",
            popularity: 7.5,
            release_date: "2023-08-01",
        },
        {
            id: 109,
            title: "Title 9",
            poster_path: "/p9.jpg",
            popularity: 6.5,
            release_date: "2023-09-01",
        },
        {
            id: 110,
            title: "Title 10",
            poster_path: "/p10.jpg",
            popularity: 8.2,
            release_date: "2023-10-01",
        },
        {
            id: 111,
            title: "Title 11",
            poster_path: "/p11.jpg",
            popularity: 5,
            release_date: "2023-11-01",
        },
        {
            id: 101,
            title: "Title One",
            poster_path: "/path/to/poster1.jpg",
            popularity: 8.5,
            release_date: "2023-01-01",
        },
        {
            id: 102,
            title: "Title Two",
            poster_path: "/path/to/poster2.jpg",
            popularity: 7.8,
            release_date: "2023-02-01",
        },
        {
            id: 103,
            title: "Title Three",
            poster_path: "/path/to/poster3.jpg",
            popularity: 9.1,
            release_date: "2023-03-01",
        },
        {
            id: 104,
            title: "Title 4",
            poster_path: "/p4.jpg",
            popularity: 7,
            release_date: "2023-04-01",
        },
        {
            id: 105,
            title: "Title 5",
            poster_path: "/p5.jpg",
            popularity: 6,
            release_date: "2023-05-01",
        },
        {
            id: 106,
            title: "Title 6",
            poster_path: "/p6.jpg",
            popularity: 8,
            release_date: "2023-06-01",
        },
        {
            id: 107,
            title: "Title 7",
            poster_path: "/p7.jpg",
            popularity: 9,
            release_date: "2023-07-01",
        },
        {
            id: 108,
            title: "Title 8",
            poster_path: "/p8.jpg",
            popularity: 7.5,
            release_date: "2023-08-01",
        },
        {
            id: 109,
            title: "Title 9",
            poster_path: "/p9.jpg",
            popularity: 6.5,
            release_date: "2023-09-01",
        },
        {
            id: 110,
            title: "Title 10",
            poster_path: "/p10.jpg",
            popularity: 8.2,
            release_date: "2023-10-01",
        },
        {
            id: 111,
            title: "Title 11",
            poster_path: "/p11.jpg",
            popularity: 5,
            release_date: "2023-11-01",
        },
        {
            id: 109,
            title: "Title 9",
            poster_path: "/p9.jpg",
            popularity: 6.5,
            release_date: "2023-09-01",
        },
        {
            id: 110,
            title: "Title 10",
            poster_path: "/p10.jpg",
            popularity: 8.2,
            release_date: "2023-10-01",
        },
        {
            id: 111,
            title: "Title 11",
            poster_path: "/p11.jpg",
            popularity: 5,
            release_date: "2023-11-01",
        },
         {
            id: 101,
            title: "Title One",
            poster_path: "/path/to/poster1.jpg",
            popularity: 8.5,
            release_date: "2023-01-01",
        },
        {
            id: 102,
            title: "Title Two",
            poster_path: "/path/to/poster2.jpg",
            popularity: 7.8,
            release_date: "2023-02-01",
        },
        {
            id: 103,
            title: "Title Three",
            poster_path: "/path/to/poster3.jpg",
            popularity: 9.1,
            release_date: "2023-03-01",
        },
        {
            id: 104,
            title: "Title 4",
            poster_path: "/p4.jpg",
            popularity: 7,
            release_date: "2023-04-01",
        },
        {
            id: 105,
            title: "Title 5",
            poster_path: "/p5.jpg",
            popularity: 6,
            release_date: "2023-05-01",
        },
        {
            id: 106,
            title: "Title 6",
            poster_path: "/p6.jpg",
            popularity: 8,
            release_date: "2023-06-01",
        },
        {
            id: 107,
            title: "Title 7",
            poster_path: "/p7.jpg",
            popularity: 9,
            release_date: "2023-07-01",
        },
        {
            id: 108,
            title: "Title 8",
            poster_path: "/p8.jpg",
            popularity: 7.5,
            release_date: "2023-08-01",
        },
        {
            id: 109,
            title: "Title 9",
            poster_path: "/p9.jpg",
            popularity: 6.5,
            release_date: "2023-09-01",
        },
        {
            id: 110,
            title: "Title 10",
            poster_path: "/p10.jpg",
            popularity: 8.2,
            release_date: "2023-10-01",
        },
        {
            id: 111,
            title: "Title 11",
            poster_path: "/p11.jpg",
            popularity: 5,
            release_date: "2023-11-01",
        },
    ],
    total_pages: 50,
    total_results: 500,
};
