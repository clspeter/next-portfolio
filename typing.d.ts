interface SanityBody {
    _createdAt: string;
    _id: string;
    _rev: string;
    _updatedAt: string;
}

export interface PageInfo extends SanityBody {
    _type: "pageInfo";
    address: string;
    backgroundInformation: string;
    email: string;
    name: string;
    phoneNumber: string;
    profilePic: Image;
    role: string;
    heroImage: Image;
    socials: Social[];
    typeWriter: string[];
}
export interface Technology extends SanityBody {
    _type: "skill";
    title: string;
    image: Image;
    progress: number;
}

export interface Skill extends SanityBody {
    _type: "skill";
    title: string;
    image: Image;
    progress: number;
}

export interface Experience extends SanityBody {
    _type: "experience";
    company: string;
    companyImage: Image;
    dateStarted: date;
    dateEnded: date;
    isCurrentlyWorkingHere: boolean;
    jobTitle: string;
    points: string[];
    technologies: Technology[];
}

export interface Project extends SanityBody {
    _type: "project";
    title: string;
    image: Image;
    linkToBuild: string;
    summary: string;
    technologies: Technology[];
}

export interface Social extends SanityBody {
    _type: "socials";
    title: string;
    url: string;
}
