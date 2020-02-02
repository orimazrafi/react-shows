
export interface Show {
    id: any;
    pic: string;
    title: string;
    score: number;
    description: string;
}
export const defaultPic =
    "data:image/png;base64,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";
export const logo =
    "data:image/png;base64,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"
export function formatRawShows(shows: any): Show[] {
    return shows.map((item: any) => {
        const { score, show } = item;

        return {
            id: show.id,
            pic: show.image ? show.image.medium : "", // unsafe...
            title: show.name,
            score,
            description: show.summary
        };
    });
}