export interface Persona {
    loginId: String;
    name: string;
    dob: string;
    gender: string;
    city: string;
    country: string;
    topics: Array<string>;
    bio: string;
    image: any;
    likes: Array<string>;
    dislikes: Array<string>;
}
