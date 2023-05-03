import { Experience } from "@/typing";

export const fetchExperience = async (): Promise<Experience[]> => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getExperiences`);
    const data = await res.json();
    const experience: Experience[] = data.experience;
    console.log("fetching experience:", experience);

    return experience;
}
